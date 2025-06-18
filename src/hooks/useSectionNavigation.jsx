import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const useSectionNavigation = (sectionIds = []) => {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (sectionIndex) => {
    const sectionId = sectionIds[sectionIndex];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const nextSection = () => {
    const next =
      currentSection < sectionIds.length - 1 ? currentSection + 1 : 0;
    setCurrentSection(next);
    scrollToSection(next);
  };

  const prevSection = () => {
    const prev =
      currentSection > 0 ? currentSection - 1 : sectionIds.length - 1;
    setCurrentSection(prev);
    scrollToSection(prev);
  };

  const goToSection = (index) => {
    setCurrentSection(index);
    scrollToSection(index);
  };

  // Monitor scroll to update currentSection
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const sectionElements = sectionIds.map((id) =>
        document.getElementById(id)
      );

      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const screenCenter = windowHeight / 2;

          if (Math.abs(sectionCenter - screenCenter) < windowHeight / 3) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  // Navigation Buttons Component
  const NavigationButtons = () => (
    <div className="fixed bottom-8 right-8 flex flex-col items-center gap-3 z-50">
      {/* Previous button */}
      <button
        onClick={prevSection}
        className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
        aria-label="Previous section"
      >
        <ChevronUp
          size={24}
          className="transition-transform duration-200 group-hover:-translate-y-0.5"
        />
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Section trước
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>

      {/* Section indicator */}
      <div className="bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl px-4 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-gray-700">
            {currentSection + 1}
          </span>
          <span className="text-xs text-gray-400 font-medium">
            / {sectionIds.length}
          </span>
        </div>
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${((currentSection + 1) / sectionIds.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={nextSection}
        className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
        aria-label="Next section"
      >
        <ChevronDown
          size={24}
          className="transition-transform duration-200 group-hover:translate-y-0.5"
        />
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Section tiếp theo
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>
    </div>
  );

  return {
    currentSection,
    nextSection,
    prevSection,
    goToSection,
    totalSections: sectionIds.length,
    NavigationButtons,
  };
};

export default useSectionNavigation;
