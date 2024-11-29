import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Book, Code, Blocks, ArrowRight } from "lucide-react";
import Image from "next/image";
import LogoSvg from "@/public/images/logo.svg";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="container px-4 py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            <span className="inline-flex items-center gap-2">
              <Image
                src={LogoSvg}
                alt="Swell Logo"
                className="h-8 w-8 md:h-10 md:w-10"
                width={32}
                height={32}
              />
              Swellchain
            </span>
            {" - The restaking chain powered by "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Proof of Restake
            </span>
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Learn how to integrate, build, and scale with Swell Network
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 pb-16 flex-grow">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Getting Started */}
          <div className="rounded-lg border bg-card p-6 hover:border-blue-500">
            <Book className="mb-4 h-8 w-8 text-blue-500" />
            <h2 className="mb-2 text-xl font-bold">Welcome to Swellchain</h2>
            <p className="mb-4 text-muted-foreground">
              New to Swell? Start here for a comprehensive introduction to our
              platform.
            </p>
            <Link href="/docs/">
              <Button variant="outline" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Developer Guide */}
          <div className="rounded-lg border bg-card p-6 hover:border-blue-500">
            <Code className="mb-4 h-8 w-8 text-blue-500" />
            <h2 className="mb-2 text-xl font-bold">Developer Guide</h2>
            <p className="mb-4 text-muted-foreground">
              Technical documentation, APIs, and tools for building on Swell
              Network.
            </p>
            <Link href="/docs/guides/getting-started">
              <Button variant="outline" className="group">
                View Guide
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Protocol Specs */}
          <div className="rounded-lg border bg-card p-6 hover:border-blue-500">
            <Blocks className="mb-4 h-8 w-8 text-blue-500" />
            <h2 className="mb-2 text-xl font-bold">Protocol Specs</h2>
            <p className="mb-4 text-muted-foreground">
              Detailed specifications of the Swell Network protocol and
              architecture.
            </p>
            <Link href="/docs/fundamentals/about-swell-chain">
              <Button variant="outline" className="group">
                Explore Specs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-auto">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <div className="text-sm text-gray-400">
            © 2024 Swell Network. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
