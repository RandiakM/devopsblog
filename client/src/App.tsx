import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/navbar";
import Home from "@/pages/home";
import Articles from "@/pages/articles";
import Topics from "@/pages/topics";
import About from "@/pages/about";
import Article from "@/pages/article"; // Import the new Article page
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

// Get base path from environment variable or use GitHub Pages repo name in production
const getBasePath = (): string => {
  if (isGitHubPages()) {
    // Extract repo name from path if on GitHub Pages
    // This works for URLs like https://username.github.io/repo-name/
    const pathParts = window.location.pathname.split('/');
    if (pathParts.length > 1) {
      return `/${pathParts[1]}`;
    }
  }
  return import.meta.env.VITE_BASE_URL || '';
};

const basePath = getBasePath();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/articles" component={Articles} />
      <Route path="/topics" component={Topics} />
      <Route path="/about" component={About} />
      <Route path="/article/:slug" component={Article} /> {/* Add the new route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <WouterRouter base={basePath}>
          <div className="min-h-screen bg-background font-sans antialiased">
            <Navbar />
            <Router />
            <Toaster />
          </div>
        </WouterRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;