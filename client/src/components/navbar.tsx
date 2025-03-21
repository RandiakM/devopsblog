import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl text-primary">NeuralPulse</span>
          </Link>
          <div className="flex-1 flex justify-center space-x-6 text-sm font-medium">
            <Link href="/articles" className="transition-colors hover:text-primary">
              Articles
            </Link>
            <Link href="/topics" className="transition-colors hover:text-primary">
              Topics
            </Link>
            <Link href="/about" className="transition-colors hover:text-primary">
              About
            </Link>
          </div>
          <div>
            <Button variant="ghost" className="text-primary">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}