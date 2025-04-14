export default function TeamPageSkeleton() {
    return (
      <div className="container mx-auto px-4 py-12">
        {/* Category buttons skeleton */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 w-32 bg-gray-800 rounded-md animate-pulse"></div>
          ))}
        </div>
  
        {/* Category title skeleton */}
        <div className="mb-12">
          <div className="h-10 w-48 bg-gray-800 rounded-md animate-pulse"></div>
        </div>
  
        {/* Team members grid skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-gray-900 rounded-lg p-6 animate-pulse">
              <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4"></div>
              <div className="h-8 bg-gray-800 rounded-full w-24 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-800 rounded w-20 mx-auto mb-4"></div>
              <div className="flex justify-center gap-3">
                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Featured member skeleton */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-[500px] bg-gray-800 animate-pulse"></div>
              <div className="p-8">
                <div className="h-6 w-32 bg-gray-800 rounded mb-2 animate-pulse"></div>
                <div className="h-12 w-48 bg-gray-800 rounded mb-4 animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-800 rounded mb-6 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-800 rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-full bg-gray-800 rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-800 rounded mb-8 animate-pulse"></div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                  <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  