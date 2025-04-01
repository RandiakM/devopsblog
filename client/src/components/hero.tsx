import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Exploring the Frontiers of{" "}
            <span className="text-primary">Artificial Intelligence</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Deep insights into AI, GenAI, Computer Vision, and Deep Learning advancements.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Latest Articles</Button>
            <Button variant="outline" size="lg">Join Newsletter</Button>
          </div>
        </div>
      </div>
    </div>
  );
}