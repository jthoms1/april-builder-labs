import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#171717] font-[family-name:var(--font-geist-sans)]">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/builder-logo.svg"
              alt="Builder.io logo"
              width={40}
              height={40}
              priority
            />
            <span className="ml-2 font-bold">builder.io</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center text-sm font-medium">
              Platform <span className="ml-1">▼</span>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium">
              Solutions <span className="ml-1">▼</span>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium">
              Developers <span className="ml-1">▼</span>
            </button>
          </div>
          <Link href="/pricing" className="text-sm font-medium">
            Pricing
          </Link>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium">
              Resources <span className="ml-1">▼</span>
            </button>
          </div>
        </nav>
        <div className="flex items-center space-x-2">
          <Link
            href="/contact"
            className="hidden md:block px-4 py-2 text-sm font-medium border border-gray-200 rounded-md"
          >
            Contact Sales
          </Link>
          <Link
            href="/app"
            className="px-4 py-2 text-sm font-medium text-white bg-[#6979F8] rounded-md"
          >
            Go to App
          </Link>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 px-6 py-8 border-r border-gray-100">
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Builder docs"
                className="w-full px-4 py-2 pl-10 text-sm border border-gray-200 rounded-md"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
              <span className="absolute right-3 top-2.5 text-xs text-gray-400">
                ⌘K
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="text-sm font-medium text-gray-500">
                Filter by product
              </span>
              <span className="ml-1 text-gray-400">ⓘ</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <button className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100">
                View All
              </button>
              <button className="px-4 py-2 text-sm font-medium rounded-full bg-gray-800 text-white">
                Develop
              </button>
              <button className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100">
                Publish
              </button>
            </div>
          </div>

          <nav>
            <div className="mb-6">
              <h3 className="mb-2 text-sm font-medium">Overview</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="block text-sm text-gray-600 hover:text-gray-900"
                  >
                    Key Concepts in Develop
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-sm text-gray-600 hover:text-gray-900"
                  >
                    How Builder Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-sm text-gray-600 hover:text-gray-900"
                  >
                    Learning Paths
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-sm text-gray-600 hover:text-gray-900"
                  >
                    Enterprise Hub
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-sm font-medium">Get Started</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="block text-sm text-gray-600 hover:text-gray-900"
                  >
                    Get Started with Develop
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-sm text-gray-600 hover:text-gray-900"
                  >
                    Import from Figma
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-sm font-medium">Builder Basics</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="block text-sm text-gray-600 hover:text-gray-900"
                  >
                    Visual Copilot
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-sm text-gray-600 hover:text-gray-900"
                  >
                    Visual Editor
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-sm text-gray-600 hover:text-gray-900"
                  >
                    Collaboration Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-sm text-gray-600 hover:text-gray-900"
                  >
                    Productivity Tools
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="mb-2 text-sm font-medium">Builder In-depth</h3>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 py-8 max-w-4xl">
          <div className="flex items-center mb-6">
            <h1 className="text-3xl font-bold">Projects</h1>
            <Link href="#" className="ml-2">
              <span className="text-gray-400">🔗</span>
            </Link>
          </div>

          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium text-pink-800 bg-pink-100 rounded-full">
              private beta
            </span>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-700">
              Projects let you create net-new applications from prompts or
              connect existing Github repositories for visual editing.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-bold">Key use cases include:</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Prototyping</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Web application development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Internal tool development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Integrating Figma designs to live codebases (including
                  functionality)
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <p className="text-lg text-gray-700">
              To access projects, select the <strong>Projects</strong> tab in
              the left nav.
            </p>
          </div>

          <div className="mb-8 rounded-md overflow-hidden border border-gray-200 bg-gray-100">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F25f7c1c6343546cfbf3d7ecd69a8487a"
              alt="Builder.io Projects interface"
              width={900}
              height={600}
              className="w-full"
            />
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden lg:block w-64 px-6 py-8 border-l border-gray-100">
          <h3 className="mb-4 text-sm font-bold text-gray-500">ON THIS PAGE</h3>
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="block text-sm text-gray-600 hover:text-gray-900"
              >
                Create apps from prompts
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-sm text-gray-600 hover:text-gray-900"
              >
                Convert Figma design to code
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-sm text-gray-600 hover:text-gray-900"
              >
                Connect an existing Github Repository
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-sm text-gray-600 hover:text-gray-900"
              >
                Create a Pull Request
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-sm text-gray-600 hover:text-gray-900"
              >
                Tag the Builder agent to make updates
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
