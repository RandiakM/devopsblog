import { Article, featuredArticles, recentArticles } from './articles';
import axios from 'axios';

// Cache for loaded markdown content to avoid repeated fetches
const contentCache: Record<string, {post: Article, content: string}> = {};

// Helper function to determine if we're running on GitHub Pages
function isGitHubPages(): boolean {
  // Check if we're in a GitHub Pages environment
  // This is a heuristic - if we're on a .github.io domain or have a specific path pattern
  if (typeof window !== 'undefined') {
    return window.location.hostname.endsWith('github.io') || 
           window.location.pathname.startsWith('/devopsblog') ||
           process.env.NODE_ENV === 'production';
  }
  return false;
}

// Get base path for GitHub Pages
function getBasePath(): string {
  if (isGitHubPages()) {
    // Extract repo name from path if on GitHub Pages
    // This works for URLs like https://username.github.io/repo-name/
    const pathParts = window.location.pathname.split('/');
    if (pathParts.length > 1) {
      return `/${pathParts[1]}`;
    }
  }
  return '';
}

// Get all posts (for listing purposes)
export async function getAllPosts(): Promise<Article[]> {
  try {
    let posts;
    
    if (isGitHubPages()) {
      // For GitHub Pages, use the static JSON file with the correct base path
      const basePath = getBasePath();
      const response = await axios.get(`${basePath}/data/posts.json`);
      posts = response.data;
    } else {
      // For development, use the API
      const response = await axios.get('/api/posts');
      posts = response.data;
    }
    
    return posts;
  } catch (error) {
    console.error('Error fetching all posts:', error);
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
      // For GitHub Pages, use the static JSON files with correct base path
      const basePath = getBasePath();
      const response = await axios.get(`${basePath}/data/${slug}.json`);
      const data = response.data;
      post = data.post;
      content = data.content;
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
    console.error(`Error fetching post ${slug}:`, error);
    
    // Final fallback to static content
    const allArticles = [...featuredArticles, ...recentArticles];
    const staticPost = allArticles.find(article => article.url === `/article/${slug}`) || null;
    
    if (staticPost) {
      try {
        // Try to load from static JSON files with correct base path
        const basePath = getBasePath();
        const response = await axios.get(`${basePath}/data/${slug}.json`);
        const staticContent = response.data.content;
        return { post: staticPost, content: staticContent };
      } catch (e) {
        console.error(`Could not load static content for ${slug}:`, e);
        return { post: staticPost, content: 'Content unavailable.' };
      }
    }
    
    return { post: null, content: '' };
  }
}