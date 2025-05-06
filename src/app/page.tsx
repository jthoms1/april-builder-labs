import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col sm:flex-row justify-between items-center gap-6 w-full">
        <div className="flex items-center gap-3">
          <Image
            src="/builder-logo.svg"
            alt="Builder.io logo"
            width={40}
            height={40}
            priority
            className="hidden sm:block"
          />
          <h1 className="text-2xl font-bold tracking-tight">
            Builder.io Develop
          </h1>
        </div>
        <nav className="flex gap-6">
          <Link
            href="https://www.builder.io/c/docs/develop"
            target="_blank"
            className="text-sm hover:underline"
          >
            Documentation
          </Link>
          <Link
            href="https://www.builder.io/c/docs/quickstart"
            target="_blank"
            className="text-sm hover:underline"
          >
            Quick Start
          </Link>
          <Link
            href="https://github.com/BuilderIO/builder"
            target="_blank"
            className="text-sm hover:underline"
          >
            GitHub
          </Link>
        </nav>
      </header>

      <main className="flex flex-col gap-10 max-w-4xl mx-auto w-full">
        <section className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Develop with Builder.io
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Builder.io allows developers to create powerful, flexible, and
            visually-editable content systems. This guide will help you
            understand how to use Builder.io Develop effectively in your
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://www.builder.io/c/docs/create-account"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://www.builder.io/c/docs/generate-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn VCP
            </a>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Setup Your Project</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Start by setting up your Builder.io space and connecting it to
              your codebase.
            </p>
            <ol className="list-decimal list-inside text-sm space-y-2 font-[family-name:var(--font-geist-mono)]">
              <li className="tracking-[-.01em]">Create a Builder.io account</li>
              <li className="tracking-[-.01em]">
                Set up your API key in{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  .env.local
                </code>
              </li>
              <li className="tracking-[-.01em]">Install Builder.io packages</li>
              <li className="tracking-[-.01em]">
                Configure your content models
              </li>
            </ol>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Register Components</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Make your custom components available in the Builder.io visual
              editor.
            </p>
            <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-xs font-[family-name:var(--font-geist-mono)]">
              <pre className="whitespace-pre">
                {`import { Builder } from '@builder.io/react';
import MyComponent from './MyComponent';

// Register your component
Builder.registerComponent(MyComponent, {
  name: 'My Component',
  inputs: [
    {
      name: 'text',
      type: 'string',
      defaultValue: 'Hello world'
    }
  ]
});`}
              </pre>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <h3 className="text-xl font-semibold mb-4">
            Builder.io Develop Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 p-5 rounded-lg">
              <h4 className="font-medium mb-2">Visual Editor</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Drag-and-drop interface to build pages and components visually.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 p-5 rounded-lg">
              <h4 className="font-medium mb-2">Content API</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Fetch content from Builder.io using the powerful API with
                targeting options.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 p-5 rounded-lg">
              <h4 className="font-medium mb-2">Framework Agnostic</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Works with React, Vue, Angular, Next.js, and more.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 p-5 rounded-lg">
              <h4 className="font-medium mb-2">A/B Testing</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Test different content variations and optimize for conversion.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 p-5 rounded-lg">
              <h4 className="font-medium mb-2">Targeting & Personalization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Deliver personalized content based on user attributes, device,
                and more.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 p-5 rounded-lg">
              <h4 className="font-medium mb-2">Custom Components</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Register your own components to use in the visual editor.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <h3 className="text-xl font-semibold mb-4">
            Using Builder.io Content
          </h3>
          <div className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-xs font-[family-name:var(--font-geist-mono)]">
            <pre className="whitespace-pre">
              {`import { builder, BuilderComponent } from '@builder.io/react';

// Initialize with your API key
builder.init('YOUR_API_KEY');

export default function Page() {
  const [builderContent, setBuilderContent] = useState(null);

  useEffect(() => {
    // Fetch content from Builder.io
    builder.get('page', { url: window.location.pathname })
      .promise().then(setBuilderContent);
  }, []);

  // If there's no content, show a 404 page
  if (!builderContent && !builder.isPreviewing) {
    return <NotFound />;
  }

  // Render the Builder.io content
  return <BuilderComponent model="page" content={builderContent} />;
}`}
            </pre>
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-4">
            Builder.io with Next.js
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            This project is already set up with Builder.io integration. You can
            see examples in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm font-[family-name:var(--font-geist-mono)]">
            <li className="tracking-[-.01em]">
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/[...page]/page.tsx
              </code>{" "}
              - Dynamic page routing
            </li>
            <li className="tracking-[-.01em]">
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/figma-imports/page.tsx
              </code>{" "}
              - Figma imports integration
            </li>
            <li className="tracking-[-.01em]">
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/components/builder.tsx
              </code>{" "}
              - Builder content renderer
            </li>
            <li className="tracking-[-.01em]">
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/builder-registry.ts
              </code>{" "}
              - Component registration
            </li>
          </ul>
        </section>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center mt-12 text-sm text-gray-600 dark:text-gray-400">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.builder.io/c/docs/develop"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.builder.io/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://discord.gg/builder"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord Community
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/BuilderIO/builder"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
