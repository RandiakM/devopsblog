import { Article, featuredArticles, recentArticles } from './articles';
import axios from 'axios';

// Cache for loaded markdown content to avoid repeated fetches
const contentCache: Record<string, {post: Article, content: string}> = {};

// Get all posts (for listing purposes)
export async function getAllPosts(): Promise<Article[]> {
  try {
    // Fetch the list of available markdown files
    const response = await axios.get('/api/posts');
    const posts = response.data;
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
    
    // Fetch the post data and content from our API endpoint
    const response = await axios.get(`/api/posts/${slug}`);
    const { post, content } = response.data;
    
    // Cache the post and content for future use
    contentCache[slug] = { post, content };
    
    return { post, content };
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    
    // Fallback to our static content if an article with the same URL exists
    const allArticles = [...featuredArticles, ...recentArticles];
    const staticPost = allArticles.find(article => article.url === `/article/${slug}`) || null;
    
    if (staticPost) {
      // Find content in our static content if available
      const staticContent = ''; // We don't have static content anymore as we fetch from files
      return { post: staticPost, content: staticContent };
    }
    
    return { post: null, content: '' };
  }
}