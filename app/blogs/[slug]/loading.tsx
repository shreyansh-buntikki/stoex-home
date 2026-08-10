export default function BlogDetailLoading() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <section className="py-8 lg:py-12">
        <div className="blog-layout w-full">
          {/* Left sidebar skeleton — TOC */}
          <div className="hidden min-[1100px]:flex flex-col gap-3 sticky top-[125px]">
            <div className="h-3 w-20 rounded bg-gray-200 animate-pulse" />
            <div className="flex flex-col gap-2 mt-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-3 rounded bg-gray-200 animate-pulse"
                  style={{ width: `${60 + (i % 3) * 15}%` }}
                />
              ))}
            </div>
            <div className="mt-4 h-10 w-28 rounded-full bg-gray-200 animate-pulse" />
          </div>

          {/* Article skeleton */}
          <div className="min-w-0 px-2 flex flex-col gap-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2">
              <div className="h-3 w-10 rounded bg-gray-200 animate-pulse" />
              <div className="h-3 w-2 rounded bg-gray-200 animate-pulse" />
              <div className="h-3 w-12 rounded bg-gray-200 animate-pulse" />
              <div className="h-3 w-2 rounded bg-gray-200 animate-pulse" />
              <div className="h-3 w-32 rounded bg-gray-200 animate-pulse" />
            </div>

            {/* Category badge */}
            <div className="h-6 w-24 rounded-md bg-gray-200 animate-pulse" />

            {/* Title */}
            <div className="flex flex-col gap-3">
              <div className="h-8 sm:h-10 lg:h-12 w-full rounded-lg bg-gray-200 animate-pulse" />
              <div className="h-8 sm:h-10 lg:h-12 w-4/5 rounded-lg bg-gray-200 animate-pulse" />
              <div className="h-8 sm:h-10 lg:h-12 w-2/3 rounded-lg bg-gray-200 animate-pulse" />
            </div>

            {/* Author row */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse flex-shrink-0" />
              <div className="flex flex-col gap-1.5">
                <div className="h-3.5 w-28 rounded bg-gray-200 animate-pulse" />
                <div className="h-3 w-36 rounded bg-gray-200 animate-pulse" />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#E5E5E5]" />

            {/* Featured image */}
            <div
              className="w-full rounded-xl bg-gray-200 animate-pulse"
              style={{ aspectRatio: "16/9" }}
            />

            {/* Share row */}
            <div className="flex justify-end items-center gap-3">
              <div className="h-3 w-10 rounded bg-gray-200 animate-pulse" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
              ))}
            </div>

            {/* Excerpt quote block */}
            <div className="border-l-4 border-gray-200 pl-4 flex flex-col gap-2 py-3">
              <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
              <div className="h-4 w-11/12 rounded bg-gray-200 animate-pulse" />
              <div className="h-4 w-4/5 rounded bg-gray-200 animate-pulse" />
            </div>

            {/* Content paragraphs */}
            <div className="flex flex-col gap-4">
              {/* h2 heading */}
              <div className="h-6 w-2/5 rounded bg-gray-200 animate-pulse mt-2" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-4 rounded bg-gray-200 animate-pulse" style={{ width: `${85 + (i % 3) * 5}%` }} />
              ))}
              <div className="h-4 w-3/5 rounded bg-gray-200 animate-pulse" />

              <div className="h-6 w-1/3 rounded bg-gray-200 animate-pulse mt-4" />
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-4 rounded bg-gray-200 animate-pulse" style={{ width: `${80 + (i % 4) * 5}%` }} />
              ))}
              <div className="h-4 w-1/2 rounded bg-gray-200 animate-pulse" />

              <div className="h-6 w-2/5 rounded bg-gray-200 animate-pulse mt-4" />
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-4 rounded bg-gray-200 animate-pulse" style={{ width: `${75 + (i % 5) * 5}%` }} />
              ))}
            </div>

            {/* Author card */}
            <div className="border-t border-[#E5E5E5] pt-6">
              <div className="bg-white rounded-2xl p-5 flex items-start gap-4 border border-[#F0F0F0]">
                <div className="w-14 h-14 rounded-full bg-gray-200 animate-pulse flex-shrink-0" />
                <div className="flex flex-col gap-2 flex-1">
                  <div className="h-3 w-16 rounded bg-gray-200 animate-pulse" />
                  <div className="h-4 w-32 rounded bg-gray-200 animate-pulse" />
                  <div className="h-3 w-full rounded bg-gray-200 animate-pulse" />
                  <div className="h-3 w-4/5 rounded bg-gray-200 animate-pulse" />
                </div>
              </div>
            </div>

            {/* CTA block */}
            <div className="bg-gray-200 animate-pulse rounded-2xl h-40" />

            {/* Mobile related articles */}
            <div className="min-[1100px]:hidden border-t border-[#E5E5E5] pt-6 flex flex-col gap-4">
              <div className="h-3 w-28 rounded bg-gray-200 animate-pulse" />
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-full aspect-[16/9] rounded-md bg-gray-200 animate-pulse" />
                  <div className="h-4 w-4/5 rounded bg-gray-200 animate-pulse" />
                  <div className="h-3 w-24 rounded bg-gray-200 animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Right sidebar skeleton — Related Articles */}
          <div className="hidden min-[1100px]:flex flex-col gap-3 sticky top-[125px]">
            <div className="h-3 w-28 rounded bg-gray-200 animate-pulse" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className={`flex flex-col gap-2 py-3 ${i !== 0 ? "border-t border-[#EBEBEB]" : ""}`}>
                <div className="w-full aspect-[16/9] rounded-md bg-gray-200 animate-pulse" />
                <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
                <div className="h-3 w-24 rounded bg-gray-200 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
