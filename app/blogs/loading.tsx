export default function BlogsLoading() {
  return (
    <section className="bg-[#f8f6f6] py-6 lg:py-8">
      <div className="container mx-auto px-6 flex flex-col gap-8">
        <div className="h-10 w-40 mx-auto rounded-lg bg-gray-200 animate-pulse" />
        <div className="w-full rounded-xl bg-gray-200 animate-pulse" style={{ minHeight: "360px" }} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl h-[260px] lg:h-[380px] animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}
