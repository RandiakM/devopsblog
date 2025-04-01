import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-24">
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Exploring the Frontiers of{" "}
            <span className="text-primary">Cloud Technologies</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Deep insights into SRE, DevOps, Cloud Automation, and Reliability Engineering advancements.
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
