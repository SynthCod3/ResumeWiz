/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2Ss9L5AYVyM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="w-full py-6 mt-24 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-8 xl:flex-row xl:justify-between">
          <div className="space-y-4 xl:w-1/2 xl:order-last xl:space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                AI-powered resume builder
              </h1>
              <p className="max-w-[500px] text-gray-500 md:text-xl md:mx-auto dark:text-gray-400">
                Create a professional resume in minutes with our easy-to-use interface.
              </p>
            </div>
            <Link
              
              href="/templates"
            >
              <Button>Get Started</Button>
            </Link>
          </div>
          <div className="w-full max-w-sm rounded-xl border border-gray-100 shadow-sm md:max-w-2xl lg:max-w-3xl xl:max-w-none dark:border-gray-800">
            <div className="grid w-full overflow-hidden rounded-xl aspect-video">
              <img
                alt="Resumes"
                className="object-cover w-full h-[100%] transition-transform duration-300 cursor-pointer hover:scale-105"
                height="225"
                src="/hero1.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width="400"
              />
              <img
                alt="Resumes"
                className="object-cover w-full h-[100%] transition-transform duration-300 cursor-pointer hover:scale-105"
                height="225"
                src="/hero2.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width="400"
              />
              <img
                alt="Resumes"
                className="object-cover w-full h-[100%] transition-transform duration-300 cursor-pointer hover:scale-105"
                height="225"
                src="/hero1.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width="400"
              />
              <img
                alt="Resumes"
                className="object-cover w-full h-[100%] transition-transform duration-300 cursor-pointer hover:scale-105"
                height="225"
                src="/hero2.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width="400"
              />
              <img
                alt="Resumes"
                className="object-cover w-full h-[100%] transition-transform duration-300 cursor-pointer hover:scale-105"
                height="225"
                src="/hero1.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

