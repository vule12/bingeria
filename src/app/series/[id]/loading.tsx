export default function ShowLoading() {
  return (
    <div role="status" className="mx-auto max-w-6xl px-4 py-8 animate-pulse">
      <div className="h-10 w-28 rounded-full bg-white/10 mb-4" />
      <section className="grid grid-rows-2 md:grid-rows-none lg:grid-cols-[420_1fr] gap-6">
        <div className="aspect-3/4 lg:aspect-2/3 lg:max-w-sm rounded-2xl bg-white/10 w-full" />
        <div className="flex flex-col gap-4">
          <div className="h-10 lg:h-16 w-3/4 rounded bg-white/10" />
          <div className="flex gap-2">
            <div className="h-7 w-20 rounded-full bg-white/10" />
            <div className="h-7 w-24 rounded-full bg-white/10" />
            <div className="h-7 w-16 rounded-full bg-white/10" />
          </div>
          <div className="flex gap-6 border-y border-[#504A79]/50 py-3">
            <div className="h-5 w-16 rounded bg-white/10" />
            <div className="h-5 w-28 rounded bg-white/10" />
            <div className="h-5 w-24 rounded bg-white/10" />
          </div>
          <div className="h-5 w-24 rounded bg-white/10" />
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-5/6 rounded bg-white/10" />
            <div className="h-4 w-2/3 rounded bg-white/10" />
          </div>
          <div className="flex gap-6 items-center">
            <div className="h-10 w-32 rounded-full bg-white/10" />
            <div className="h-10 w-40 rounded-full bg-white/10" />
          </div>
        </div>
      </section>
    </div>
  );
}
