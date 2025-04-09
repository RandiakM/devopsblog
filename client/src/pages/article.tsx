import React, { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'github-markdown-css/github-markdown.css';
import { Newsletter } from '@/components/newsletter';
import { getPostBySlug } from '@/lib/markdown';
import { Article } from '@/lib/articles';

export default function ArticlePage() {
  const [match, params] = useRoute('/article/:slug');
  const [article, setArticle] = useState<Article | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchArticle() {
      setLoading(true);
      
      if (params?.slug) {
        try {
          // Get the article and content from our markdown library
          const { post, content } = await getPostBySlug(params.slug);
          setArticle(post);
          setContent(content);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching article:', error);
          setLoading(false);
        }
      }
    }
    
    fetchArticle();
  }, [params?.slug]);

  if (!match) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/4"></div>
            <div className="h-80 bg-gray-700 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-700 rounded w-4/6"></div>
            </div>
          </div>
        ) : article ? (
          <article className="prose prose-invert max-w-none">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
              <div className="flex items-center text-muted-foreground mb-6">
                <span className="mr-4">{article.date}</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                  {article.category}
                </span>
              </div>
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-[400px] object-cover rounded-lg mb-8" 
              />
            </div>
            
            <div className="markdown-body bg-transparent text-white">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {content}
              </ReactMarkdown>
            </div>
          </article>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-white mb-4">Article not found</h2>
            <p className="text-muted-foreground">The article you're looking for doesn't exist or has been moved.</p>
          </div>
        )}
      </main>
      
      <div className="mt-16">
        <Newsletter />
      </div>
    </div>
  );
}