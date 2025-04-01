import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { recentArticles } from "@/lib/articles";

export function RecentArticles() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <a 
              key={article.id} 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer" 
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
