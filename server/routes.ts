import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { Article } from '../shared/schema';

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to get a list of all posts from the markdown files
  app.get('/api/posts', async (req: Request, res: Response) => {
    try {
      const postsDirectory = path.join(process.cwd(), 'content', 'posts');
      
      // Check if directory exists
      if (!fs.existsSync(postsDirectory)) {
        return res.status(404).json({ error: 'Posts directory not found' });
      }
      
      const files = fs.readdirSync(postsDirectory);
      const posts: Article[] = [];
      
      // Process each markdown file
      for (const file of files) {
        if (file.endsWith('.md')) {
          const filePath = path.join(postsDirectory, file);
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          const { data } = matter(fileContent);
          
          // Create article from frontmatter
          const slug = file.replace('.md', '');
          const post: Article = {
            id: data.id || 0,
            title: data.title,
            excerpt: data.excerpt,
            category: data.category,
            date: data.date,
            image: data.image,
            url: `/article/${slug}`,
            slug
          };
          
          posts.push(post);
        }
      }
      
      // Sort posts by date, newest first
      posts.sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      });
      
      res.json(posts);
    } catch (error) {
      console.error('Error getting posts:', error);
      res.status(500).json({ error: 'Error getting posts' });
    }
  });

  // API route to get a single post by slug
  app.get('/api/posts/:slug', async (req: Request, res: Response) => {
    try {
      const { slug } = req.params;
      const filePath = path.join(process.cwd(), 'content', 'posts', `${slug}.md`);
      
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'Post not found' });
      }
      
      // Read markdown file
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      
      // Parse frontmatter and content
      const { data, content } = matter(fileContent);
      
      // Create article from frontmatter
      const post: Article = {
        id: data.id || 0,
        title: data.title,
        excerpt: data.excerpt,
        category: data.category,
        date: data.date,
        image: data.image,
        url: `/article/${slug}`,
        slug
      };
      
      // Return both post metadata and content
      res.json({
        post,
        content
      });
    } catch (error) {
      console.error(`Error getting post ${req.params.slug}:`, error);
      res.status(500).json({ error: 'Error getting post' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
