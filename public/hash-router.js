// Redirect path-based routes to hash-based routes for GitHub Pages compatibility
(function() {
  // Don't redirect if we already have a hash route
  if (window.location.hash) {
    return;
  }
  
  // Get the path after the repository name (if any)
  const path = window.location.pathname;
  const pathParts = path.split('/');
  
  // If we're in a GitHub Pages site with a repo name
  if (pathParts.length > 2 && pathParts[1] === 'devopsblog') {
    // Take the parts after the repo name and convert to hash
    const route = '/#' + pathParts.slice(2).join('/');
    window.location.replace(window.location.origin + '/devopsblog' + route);
  }
})();