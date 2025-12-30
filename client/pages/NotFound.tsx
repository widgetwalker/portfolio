import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="mx-auto grid min-h-[70vh] max-w-7xl place-items-center px-4 pt-28">
      <div className="text-center">
        <h1 className="text-gradient text-6xl font-extrabold">404</h1>
        <p className="mt-2 text-lg text-muted-foreground">Oops! Page not found.</p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-md border border-white/10 bg-card px-4 py-2 text-sm font-medium hover:bg-muted/30"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
