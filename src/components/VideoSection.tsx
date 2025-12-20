import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="relative bg-transparent pt-4 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="w-full bg-[#007bff] rounded-t-lg py-2 text-center cursor-pointer transition-all hover:bg-[#4da3ff] hover:shadow-[0_0_20px_rgba(0,123,255,0.5)] border-2 border-[#007bff] hover:border-[#4da3ff]">
          <span className="text-lg font-semibold tracking-wide text-white">
            Click below to watch
          </span>
        </div>
        <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <button className="group relative">
              <div className="absolute inset-0 bg-[#007bff] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-[#007bff] rounded-full p-12 group-hover:scale-110 transition-transform">
                <Play className="w-20 h-20 text-white fill-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
