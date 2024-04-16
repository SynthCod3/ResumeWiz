export function Guide() {
  return (
    <section key="1" className="w-full py-12 lg:py-24 xl:py-32">
      <div className="container px-4 space-y-8 lg:space-y-10">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Resume Building Guidance
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Let&apos;s get started with building your AI-powered resume. Follow
            the steps below to create a professional and ATS-friendly resume.
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-12">
          <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-10">
            <div className="flex flex-col gap-4 lg:justify-center lg:gap-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  1. Sign in to your account
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sign in to access your dashboard and start creating your
                  resume.
                </p>
              </div>
              <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-950 w-full aspect-video overflow-hidden shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:aspect-video">
                <img
                  alt="Step 1"
                  className="aspect-video object-cover"
                  height="250"
                  src="/step1.svg"
                  width="500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:gap-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">2. Select a template</h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the perfect template that suits your style and
                  professionalism.
                </p>
              </div>
              <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-950 w-full aspect-video overflow-hidden shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:aspect-video">
                <img
                  alt="Step 2"
                  className="aspect-video object-cover"
                  height="250"
                  src="/step2.svg"
                  width="500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:justify-center lg:gap-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">3. Add details</h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Input your personal information, work experience, education,
                  and skills into the AI-powered form.
                </p>
              </div>
              <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-950 w-full aspect-video overflow-hidden shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:aspect-video">
                <img
                  alt="Step 3"
                  className="aspect-video object-cover"
                  height="250"
                  src="/step3.svg"
                  width="500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:gap-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">4. Check ATS score</h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Understand your ATS score and how it impacts your resume.
                </p>
              </div>
              <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-950 w-full aspect-video overflow-hidden shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:aspect-video">
                <img
                  alt="Step 4"
                  className="aspect-video object-cover"
                  height="250"
                  src="/step4.svg"
                  width="500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:justify-center lg:gap-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  5. Correct the resume with recommendations
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Review the recommendations and make necessary corrections.
                </p>
              </div>
              <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-950 w-full aspect-video overflow-hidden shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:aspect-video">
                <img
                  alt="Step 5"
                  className="aspect-video object-cover"
                  height="250"
                  src="/step5.svg"
                  width="500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:gap-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  6. Download as PDF or PNG
                </h3>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Download your resume as a PDF or PNG file for easy sharing.
                </p>
              </div>
              <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-950 w-full aspect-video overflow-hidden shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:aspect-video">
                <img
                  alt="Step 6"
                  className="aspect-video object-cover"
                  height="250"
                  src="/step6.svg"
                  width="500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  );
}
