import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import LogoSvg from "@/public/images/logo.svg";
import Book from "@/public/images/icons/book.svg";
import BracketsAngle from "@/public/images/icons/bracketsAngle.svg";
import SquaresFour from "@/public/images/icons/squaresFour.svg";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="container px-4 pt-[120px] md:pt-[268px] pb-12 md:pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 flex items-center justify-center gap-2 md:gap-4 text-4xl md:text-[80px] font-semibold tracking-[-1px] md:tracking-[-2.4px] leading-[110%] font-['Inter']">
            <Image
              src={LogoSvg}
              alt="Swell Logo"
              className="h-[44px] w-[44px] md:h-[88px] md:w-[88px]"
              width={88}
              height={88}
            />
            <span className="text-foreground">Swellchain Build</span>
          </h1>
          <p className="mb-8 text-lg md:text-xl text-muted-foreground pt-4 md:pt-[42px]">
            Learn how to integrate, build, and scale with Swellchain.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container px-4 pb-16 flex-grow">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Getting Started */}
          <div className="h-[251px] p-6 bg-card rounded-xl border border-border flex-col justify-start items-start gap-4 inline-flex hover:border-blue-500">
            <div className="w-8 h-8 relative">
              <Image src={Book} alt="Welcome to Swellchain" />
            </div>
            <div className="self-stretch text-foreground text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              Welcome to Swellchain
            </div>
            <div className="self-stretch text-muted-foreground text-base font-medium font-['Inter'] leading-relaxed">
              New to Swell? Start here for a comprehensive introduction.
            </div>
            <div className="home-card-button justify-start items-center inline-flex">
              <Link href="/docs/">
                <div className="h-[42px] rounded-[10px] justify-center items-center flex group">
                  <div className="grow shrink basis-0 h-[42px] px-4 py-2 rounded-[10px] border border-border dark:border-white justify-center items-center gap-2 flex hover:bg-accent">
                    <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                      Learn more
                    </div>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Developer Guide */}
          <div className="h-[251px] p-6 bg-card rounded-xl border border-border flex-col justify-start items-start gap-4 inline-flex hover:border-blue-500">
            <div className="w-8 h-8 relative">
              <Image src={BracketsAngle} alt="Developer Guide" />
            </div>
            <div className="self-stretch text-foreground text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              Developer Guide
            </div>
            <div className="self-stretch text-muted-foreground text-base font-medium font-['Inter'] leading-relaxed">
              Technical documentation, APIs, and tools for building on Swell
              Network.
            </div>
            <div className="home-card-button justify-start items-center inline-flex">
              <Link href="/docs/guides/getting-started">
                <div className="h-[42px] rounded-[10px] justify-center items-center flex group">
                  <div className="grow shrink basis-0 h-[42px] px-4 py-2 rounded-[10px] border border-border dark:border-white justify-center items-center gap-2 flex hover:bg-accent">
                    <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                      View Guide
                    </div>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Protocol Specs */}
          <div className="h-[251px] p-6 bg-card rounded-xl border border-border flex-col justify-start items-start gap-4 inline-flex hover:border-blue-500">
            <div className="w-8 h-8 relative">
              <Image src={SquaresFour} alt="Protocol Specs" />
            </div>
            <div className="self-stretch text-foreground text-2xl font-semibold font-['Inter'] leading-[28.80px]">
              Protocol Specs
            </div>
            <div className="self-stretch text-muted-foreground text-base font-medium font-['Inter'] leading-relaxed">
              Detailed specifications of the Swell Network protocol and
              architecture.
            </div>
            <div className="home-card-button justify-start items-center inline-flex">
              <Link href="/docs/fundamentals/about-swell-chain">
                <div className="h-[42px] rounded-[10px] justify-center items-center flex group">
                  <div className="grow shrink basis-0 h-[42px] px-4 py-2 rounded-[10px] border border-border dark:border-white justify-center items-center gap-2 flex hover:bg-accent">
                    <div className="text-center text-foreground text-base font-medium font-['Inter'] leading-relaxed">
                      Explore Specs
                    </div>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
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
            <Link
              href="https://www.swellnetwork.io/legal/terms-of-service"
              className="text-sm text-gray-400 hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="https://www.swellnetwork.io/legal/privacy-policy"
              className="text-sm text-gray-400 hover:text-white"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
