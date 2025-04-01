import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredArticles } from "@/lib/articles";

export function FeaturedArticles() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="group hover:border-primary/50 transition-colors">
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
                <CardTitle className="mb-2">{article.title}</CardTitle>
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
          ))}
        </div>
      </div>
    </section>
  );
}
