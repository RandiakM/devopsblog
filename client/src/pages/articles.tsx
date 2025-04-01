import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { featuredArticles, recentArticles } from "@/lib/articles";
import { Link } from "wouter";

export default function Articles() {
  // Combine all articles
  const allArticles = [...featuredArticles, ...recentArticles];
  
  return (
    <main className="container mx-auto px-4 max-w-7xl py-16">
      <h1 className="text-4xl font-bold mb-4">Articles</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Explore our latest articles on AI, Machine Learning, and Deep Learning. Stay updated with the most recent developments in artificial intelligence.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {allArticles.map((article) => (
          <Link href={`/article/${article.slug}`} key={article.id}>
            <Card className="group cursor-pointer hover:border-primary/50 transition-colors bg-[#0F172A]">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-sm text-primary mb-2">{article.category}</div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-white">
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
    </main>
  );
}
