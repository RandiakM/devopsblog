import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-56px)] w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4 bg-[#0F172A] border-primary/30">
        <CardContent className="pt-6 pb-6">
          <div className="flex flex-col items-center text-center mb-6">
            <AlertCircle className="h-12 w-12 text-primary mb-4" />
            <h1 className="text-2xl font-bold text-white">404 - Page Not Found</h1>
            <p className="mt-4 text-muted-foreground">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/">
              <Button>
                Return to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
