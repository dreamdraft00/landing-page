import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import useVideoControls from "../hooks/useVideoControls";
import useCountdownToRelease from "../hooks/useCountdownToRelease";

const HeroSection = () => {
  const {
    videoRef,
    isPlaying,
    isMuted,
    showThumbnail,
    togglePlay,
    toggleMute,
    toggleFullscreen,
    handleVideoEnd,
  } = useVideoControls();
  const timeLeft = useCountdownToRelease("2025-07-23T00:00:00");

  return (
    <section className="relative isolate overflow-hidden h-screen">
      {/* Video Background */}
      <div className="absolute inset-0">
        {showThumbnail && (
          <img
            alt="Video Thumbnail"
            src="https://pianofingers.vn/wp-content/uploads/2024/04/Sheet-piano-Thie%CC%82n-Ly%CC%81-O%CC%9Bi-Jack-2.jpeg"
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
        )}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            showThumbnail ? "opacity-0" : "opacity-100"
          }`}
          muted={isMuted}
          playsInline
          onEnded={handleVideoEnd}
          onPlay={() => !showThumbnail}
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto flex items-end justify-between">
          {/* Text Content - Bottom Left */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
              DREAM DRAFT
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-4">
              Đề tài: Màu Của Hòa Bình
            </p>
            <p className="text-lg sm:text-xl text-gray-300">
              {timeLeft ? (
                <>
                  COMING SOON IN:{" "}
                  <span className="font-mono font-semibold text-white">
                    {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                    {timeLeft.seconds}s
                  </span>
                </>
              ) : (
                <span className="text-green-400 font-semibold">
                  WE'RE LIVE!
                </span>
              )}
            </p>
          </div>

          {/* Video Controls - Bottom Right */}
          <div className="flex items-center space-x-4">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="group relative flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-1" />
              )}
              <div className="absolute inset-0 rounded-full ring-2 ring-white/50 opacity-0 group-hover:opacity-100 group-hover:ring-white/70 transition-all duration-200"></div>
            </button>

            {/* Volume Button */}
            <button
              onClick={toggleMute}
              className="group relative flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
              <div className="absolute inset-0 rounded-full ring-2 ring-white/50 opacity-0 group-hover:opacity-100 group-hover:ring-white/70 transition-all duration-200"></div>
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="group relative flex items-center justify-center w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Enter fullscreen"
            >
              <Maximize2 className="w-5 h-5 text-white" />
              <div className="absolute inset-0 rounded-full ring-2 ring-white/50 opacity-0 group-hover:opacity-100 group-hover:ring-white/70 transition-all duration-200"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom for better text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
