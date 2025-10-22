export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-4 p-8 w-full max-w-xl">
        <div className="animate-pulse h-24 bg-zinc-200 rounded-xl" />
        <div className="animate-pulse h-24 bg-zinc-200 rounded-xl" />
        <div className="animate-pulse h-24 bg-zinc-200 rounded-xl" />
      </div>
    </div>
  );
}
