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
import NotFound from "@/pages/not-found";

// Get base path from environment variable or use empty string for local development
const basePath = import.meta.env.VITE_BASE_URL || '';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/articles" component={Articles} />
      <Route path="/topics" component={Topics} />
      <Route path="/about" component={About} />
      {/* External articles are now linked directly */}
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