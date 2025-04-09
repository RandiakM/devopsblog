import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Article, featuredArticles } from "@/lib/articles";
import { Link } from "wouter";
import { getAllPosts } from "@/lib/markdown";

export function FeaturedArticles() {
  const [articles, setArticles] = useState<Article[]>(featuredArticles);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    async function fetchArticles() {
      try {
        const posts = await getAllPosts();
        // Filter for featured articles
        const featured = posts.filter(post => post.id < 4); // Just use first few articles as featured for now
        if (featured.length > 0) {
          setArticles(featured);
        }
      } catch (error) {
        console.error('Error fetching featured articles:', error);
        // Fallback to static content
      } finally {
        setLoading(false);
      }
    }
    
    fetchArticles();
  }, []);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            // Loading skeletons
            [...Array(3)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <Card className="bg-[#0F172A] h-full">
                  <CardHeader className="p-0">
                    <div className="aspect-video bg-gray-700 rounded-t-lg"></div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
                    <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-700 rounded w-2/3 mt-2"></div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                    <div className="h-4 bg-gray-700 rounded w-1/4"></div>
                  </CardFooter>
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
                    <CardTitle className="mb-2 text-white group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <p className="text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                    <div className="text-sm text-muted-foreground">
                      {article.date}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}