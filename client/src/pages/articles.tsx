import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "wouter";
import { getAllPosts } from "@/lib/markdown";
import { Article } from "@/lib/articles";

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    async function fetchArticles() {
      try {
        const posts = await getAllPosts();
        setArticles(posts);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchArticles();
  }, []);
  
  return (
    <main className="container mx-auto px-4 max-w-7xl py-16">
      <h1 className="text-4xl font-bold mb-4">Articles</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Explore our latest articles on AI, Machine Learning, and Deep Learning. Stay updated with the most recent developments in artificial intelligence.
      </p>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="animate-pulse">
              <Card className="bg-[#0F172A] h-full">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gray-700 rounded-t-lg"></div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
                  <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/4 mt-4"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {articles.map((article) => (
            <Link 
              key={article.id} 
              href={article.url}
              className="block group"
            >
              <Card className="group hover:border-primary/50 transition-colors bg-[#0F172A] h-full">
                <CardHeader className="p-0">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-sm text-primary mb-2">{article.category}</div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-white group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    {article.date}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}