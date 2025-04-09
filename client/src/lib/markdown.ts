import { Article, featuredArticles, recentArticles } from './articles';
import axios from 'axios';

// Cache for loaded markdown content to avoid repeated fetches
const contentCache: Record<string, {post: Article, content: string}> = {};

// Helper function to determine if we're running on GitHub Pages
function isGitHubPages(): boolean {
  // Check if we're in a GitHub Pages environment
  if (typeof window !== 'undefined') {
    return window.location.hostname.endsWith('github.io') || 
           window.location.pathname.startsWith('/devopsblog') ||
           process.env.NODE_ENV === 'production';
  }
  return false;
}

// Get static file path based on environment
function getStaticFilePath(file: string): string {
  if (isGitHubPages()) {
    // Get the repo name from the pathname
    const pathParts = window.location.pathname.split('/');
    const repoName = pathParts.length > 1 ? pathParts[1] : '';
    
    // For GitHub Pages deployment
    return repoName ? `/${repoName}/${file}` : `/${file}`;
  }
  
  // For local development
  return `/${file}`;
}

// Get all posts (for listing purposes)
export async function getAllPosts(): Promise<Article[]> {
  try {
    let posts;
    
    if (isGitHubPages()) {
      // For GitHub Pages, use the static JSON file
      const filePath = getStaticFilePath('data/posts.json');
      try {
        const response = await axios.get(filePath);
        posts = response.data;
        return posts;
      } catch (error) {
        console.error(`Failed to load posts from ${filePath}:`, error);
        throw error; // Let the outer catch handle this
      }
    } else {
      // For development, use the API
      const response = await axios.get('/api/posts');
      posts = response.data;
      return posts;
    }
  } catch (error) {
    console.error('Error fetching all posts, falling back to static data:', error);
    
    // Fallback to our static lists if the API fails
    const allArticles = [...featuredArticles, ...recentArticles];
    const uniqueArticles = Array.from(new Map(allArticles.map(item => [item.id, item])).values());
    return uniqueArticles.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<{ post: Article | null; content: string }> {
  try {
    // Check if we have the content in our cache
    if (contentCache[slug]) {
      return { 
        post: contentCache[slug].post, 
        content: contentCache[slug].content 
      };
    }
    
    let post, content;
    
    if (isGitHubPages()) {
      // For GitHub Pages, use the static JSON files
      const filePath = getStaticFilePath(`data/${slug}.json`);
      
      try {
        console.log(`Trying to load article data from: ${filePath}`);
        const response = await axios.get(filePath);
        const data = response.data;
        post = data.post;
        content = data.content;
      } catch (fetchError) {
        console.error(`Failed to load article from ${filePath}:`, fetchError);
        throw fetchError; // Let the outer catch handle it
      }
    } else {
      // For development, use the API
      const response = await axios.get(`/api/posts/${slug}`);
      post = response.data.post;
      content = response.data.content;
    }
    
    // Cache the post and content for future use
    contentCache[slug] = { post, content };
    
    return { post, content };
  } catch (error) {
    console.error(`Error fetching post ${slug}, trying fallback:`, error);
    
    // Fallback to static data
    try {
      const allArticles = [...featuredArticles, ...recentArticles];
      const staticPost = allArticles.find(article => {
        const articleSlug = article.url.split('/').pop();
        return articleSlug === slug;
      });
      
      if (staticPost) {
        // Try again with the static JSON file with a different approach
        try {
          const filePath = getStaticFilePath(`data/${slug}.json`);
          console.log(`Trying fallback path: ${filePath}`);
          const response = await axios.get(filePath);
          const staticContent = response.data.content;
          return { post: staticPost, content: staticContent };
        } catch (e) {
          console.error(`Final fallback failed for ${slug}:`, e);
          return { post: staticPost, content: 'Content unavailable - please try accessing from the homepage.' };
        }
      }
    } catch (fallbackError) {
      console.error('Fallback error:', fallbackError);
    }
    
    return { post: null, content: 'Article not found. Please return to the homepage.' };
  }
}