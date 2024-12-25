// pages/404.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Custom404() {
  const router = useRouter();
  const { asPath } = router;

  useEffect(() => {
    // Log 404s to your analytics
    console.log(`404 error for path: ${asPath}`);
  }, [asPath]);

  // Suggested redirects based on common patterns
  const getSuggestedPath = (path: string) => {
    if (path.startsWith("/location/")) {
      return path.replace("/location/", "/locations/");
    }
    if (path.startsWith("/service/")) {
      return path.replace("/service/", "/services/");
    }
    return "";
  };

  const suggestedPath = getSuggestedPath(asPath);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        {suggestedPath && (
          <div className="mb-4">
            <p>Did you mean to visit:</p>
            <Link href={suggestedPath}>
              <a className="text-blue-600 hover:underline">{suggestedPath}</a>
            </Link>
          </div>
        )}
        <Link href="/">
          <a className="text-blue-600 hover:underline">Go back to homepage</a>
        </Link>
      </div>
    </div>
  );
}
