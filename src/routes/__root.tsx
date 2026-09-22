import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gold-gradient">404</h1>
        <h2 className="mt-4 font-display text-2xl text-cream">Page not found</h2>
        <p className="mt-2 text-sm text-cream/60">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="btn-gold">Return Home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-cream">This page didn't load</h1>
        <p className="mt-2 text-sm text-cream/60">Something went wrong. Try refreshing.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-solid">Try again</button>
          <a href="/" className="btn-gold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Grey — Port City Southern Cuisine | Savannah, GA" },
      { name: "description", content: "Award-winning fine dining inside a restored 1938 Greyhound bus terminal in Savannah, Georgia." },
      { name: "author", content: "The Grey" },
      { property: "og:title", content: "The Grey — Port City Southern Cuisine | Savannah, GA" },
      { property: "og:description", content: "Award-winning fine dining inside a restored 1938 Greyhound bus terminal in Savannah, Georgia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The Grey — Port City Southern Cuisine | Savannah, GA" },
      { name: "twitter:description", content: "Award-winning fine dining inside a restored 1938 Greyhound bus terminal in Savannah, Georgia." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/def32774-951c-41bf-915d-47899ff1d9cf/id-preview-7cb3496e--30071414-1bc6-410d-b6fc-1bd8ee8c03b7.lovable.app-1778232132834.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/def32774-951c-41bf-915d-47899ff1d9cf/id-preview-7cb3496e--30071414-1bc6-410d-b6fc-1bd8ee8c03b7.lovable.app-1778232132834.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="grain min-h-screen bg-background text-foreground selection:bg-gold/30 selection:text-cream">
        <ScrollProgress />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
