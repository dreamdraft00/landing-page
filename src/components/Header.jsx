import React, { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        // Hiển thị header khi scroll qua HeroSection
        setIsVisible(scrollPosition > heroHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMusic = () => {
    setIsMusicOn(!isMusicOn);
    // Thêm logic để bật/tắt nhạc nền ở đây
    console.log("Music toggled:", !isMusicOn);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo bên trái */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src="./src/assets/images/logo.png"
                  alt="Logo"
                  className="h-10 mr-3"
                />
                <div>
                  <h1 className="text-2xl font-bold text-[#425261] tracking-tight">
                    DREAM DRAFT
                  </h1>
                  <p className="text-xs text-[#f6a248] mt-[2px]">
                    Màu Của Hòa Bình
                  </p>
                </div>
              </div>
            </div>

            {/* Music toggle bên phải */}
            <div className="flex items-center">
              <button
                onClick={toggleMusic}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isMusicOn
                    ? "bg-green-500/20 text-green-400 border border-green-400/50"
                    : "bg-gray-500/20 text-gray-400 border border-gray-400/50"
                } hover:scale-105 backdrop-blur-sm`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {isMusicOn ? (
                    // Icon nhạc đang phát
                    <path
                      fillRule="evenodd"
                      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  ) : (
                    // Icon nhạc tắt
                    <path
                      fillRule="evenodd"
                      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
                <span className="text-sm font-medium">
                  {isMusicOn ? "ON" : "OFF"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
