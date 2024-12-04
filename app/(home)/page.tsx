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
                width={64}
                height={64}
              />
              Swellchain Build
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
          <div className="h-[251px] p-6 bg-[#010508] rounded-xl border border-[#a4abf1]/20 flex-col justify-start items-start gap-4 inline-flex hover:border-blue-500">
            <div className="w-8 h-8 relative">
              <Book className="text-blue-500" />
            </div>
            <div className="self-stretch text-white text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              Welcome to Swellchain
            </div>
            <div className="self-stretch text-[#b0b0b0] text-base font-medium font-['Inter'] leading-relaxed">
              New to Swell? Start here for a comprehensive introduction to our
              platform.
            </div>
            <div className="justify-start items-center inline-flex">
              <Link href="/docs/">
                <div className="h-[42px] rounded-[10px] justify-center items-center flex">
                  <div className="grow shrink basis-0 h-[42px] px-4 py-2 rounded-[10px] border border-[#e7e7e7] justify-center items-center gap-2 flex">
                    <div className="text-center text-white text-base font-medium font-['Inter'] leading-relaxed">
                      Learn more
                    </div>
                    <ArrowRight className="w-[18px] h-[18px] relative shadow transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Developer Guide */}
          <div className="h-[251px] p-6 bg-[#010508] rounded-xl border border-[#a4abf1]/20 flex-col justify-start items-start gap-4 inline-flex hover:border-blue-500">
            <div className="w-8 h-8 relative">
              <Code className="text-blue-500" />
            </div>
            <div className="self-stretch text-white text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              Developer Guide
            </div>
            <div className="self-stretch text-[#b0b0b0] text-base font-medium font-['Inter'] leading-relaxed">
              Technical documentation, APIs, and tools for building on Swell
              Network.
            </div>
            <div className="justify-start items-center inline-flex">
              <Link href="/docs/guides/getting-started">
                <Button variant="outline" className="group">
                  View Guide
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Protocol Specs */}
          <div className="h-[251px] p-6 bg-[#010508] rounded-xl border border-[#a4abf1]/20 flex-col justify-start items-start gap-4 inline-flex hover:border-blue-500">
            <div className="w-8 h-8 relative">
              <Blocks className="text-blue-500" />
            </div>
            <div className="self-stretch text-white text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              Protocol Specs
            </div>
            <div className="self-stretch text-[#b0b0b0] text-base font-medium font-['Inter'] leading-relaxed">
              Detailed specifications of the Swell Network protocol and
              architecture.
            </div>
            <div className="justify-start items-center inline-flex">
              <Link href="/docs/fundamentals/about-swell-chain">
                <Button variant="outline" className="group">
                  Explore Specs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
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
