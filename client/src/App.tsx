import { Switch, Route, Router } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/navbar";
import Home from "@/pages/home";
import Articles from "@/pages/articles";
import Topics from "@/pages/topics";
import About from "@/pages/about";
import Article from "@/pages/article";
import NotFound from "@/pages/not-found";

// Helper function to determine if we're running on GitHub Pages
function isGitHubPages(): boolean {
  if (typeof window !== 'undefined') {
    return window.location.hostname.endsWith('github.io') || 
           window.location.pathname.startsWith('/devopsblog') ||
           process.env.NODE_ENV === 'production';
  }
  return false;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <Router base="/devopsblog">
          <div className="min-h-screen bg-background font-sans antialiased">
            <Navbar />
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/articles" component={Articles} />
              <Route path="/topics" component={Topics} />
              <Route path="/about" component={About} />
              <Route path="/article/:slug" component={Article} />
              <Route component={NotFound} />
            </Switch>
            <Toaster />
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;