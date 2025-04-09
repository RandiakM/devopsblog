import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Article, recentArticles } from "@/lib/articles";
import { Link } from "wouter";
import { getAllPosts } from "@/lib/markdown";

export function RecentArticles() {
  const [articles, setArticles] = useState<Article[]>(recentArticles);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    async function fetchArticles() {
      try {
        const posts = await getAllPosts();
        // Get the most recent articles (those not marked as featured)
        const recent = posts.filter(post => post.id >= 4).slice(0, 6); // Get up to 6 recent articles
        if (recent.length > 0) {
          setArticles(recent);
        }
      } catch (error) {
        console.error('Error fetching recent articles:', error);
        // Fallback to static content
      } finally {
        setLoading(false);
      }
    }
    
    fetchArticles();
  }, []);
  
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Loading skeletons
            [...Array(6)].map((_, index) => (
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
            ))
          ) : (
            articles.map((article) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}