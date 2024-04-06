/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/VoaTKPyJAJ4
 */
import Link from 'next/link';

export function Templates() {
  return (
    <div key="1" className="flex flex-col min-h-screen pt-16">
      <header className="py-10">
        <div className="container px-4">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Resume Templates
            </h1>
            <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Choose a template to get started with your resume.
            </p>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-2 px-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-3 lg:grid-cols-4 xl:gap-6 xl:grid-cols-4">
            <Link
              className="flex flex-col rounded-lg overflow-hidden border shadow-sm transition-transform scale-100 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              href="/editor?template=1"
            >
              <div className="grid w-full items-center justify-center p-4">
                <img
                  alt="Template thumbnail"
                  className="aspect-[1/1.414] overflow-hidden object-cover object-center"
                  height="250"
                  src="/placeholder.svg"
                  width="400"
                />
              </div>
              <div className="grid w-full items-center justify-center p-4 border-t border-gray-200 text-center">
                <h3 className="font-bold">Professional</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A clean and modern template
                </p>
              </div>
            </Link>
            <Link
              className="flex flex-col rounded-lg overflow-hidden border shadow-sm transition-transform scale-100 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              href="/editor?template=2"
            >
              <div className="grid w-full items-center justify-center p-4">
                <img
                  alt="Template thumbnail"
                  className="aspect-[1/1.414] overflow-hidden object-cover object-center"
                  height="250"
                  src="/placeholder.svg"
                  width="400"
                />
              </div>
              <div className="grid w-full items-center justify-center p-4 border-t border-gray-200 text-center">
                <h3 className="font-bold">Professional</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A clean and modern template
                </p>
              </div>
            </Link>
            <Link
              className="flex flex-col rounded-lg overflow-hidden border shadow-sm transition-transform scale-100 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              href="/editor?template=3"
            >
              <div className="grid w-full items-center justify-center p-4">
                <img
                  alt="Template thumbnail"
                  className="aspect-[1/1.414] overflow-hidden object-cover object-center"
                  height="250"
                  src="/placeholder.svg"
                  width="400"
                />
              </div>
              <div className="grid w-full items-center justify-center p-4 border-t border-gray-200 text-center">
                <h3 className="font-bold">Professional</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A clean and modern template
                </p>
              </div>
            </Link>
            <Link
              className="flex flex-col rounded-lg overflow-hidden border shadow-sm transition-transform scale-100 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              href="/editor?template=4"
            >
              <div className="grid w-full items-center justify-center p-4">
                <img
                  alt="Template thumbnail"
                  className="aspect-[1/1.414] overflow-hidden object-cover object-center"
                  height="250"
                  src="/placeholder.svg"
                  width="400"
                />
              </div>
              <div className="grid w-full items-center justify-center p-4 border-t border-gray-200 text-center">
                <h3 className="font-bold">Professional</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A clean and modern template
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
