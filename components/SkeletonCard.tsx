export default function SkeletonCard() {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 animate-pulse">
      <div className="w-full pt-[140%]" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-700 rounded w-1/2" />
      </div>
    </div>
  );
}
