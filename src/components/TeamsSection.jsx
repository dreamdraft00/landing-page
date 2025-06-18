import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver.js";

export default function TeamsSection() {
  const [sectionRef, isVisible] = useIntersectionObserver(0.6);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const teamMembers = [
    {
      name: "Trịnh Trần Phương Tứn",
      src: "https://images2.thanhnien.vn/528068263637045248/2025/5/26/edit-48427799012203294996640565770072566130465660n-174827854706467715024.jpeg",
      alt: "Team member Trịnh Trần Phương Tứn",
      role: "Creative Director",
      delay: "delay-[1000ms]",
    },
    {
      name: "Tuấn Trịnh",
      src: "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/3/13/1314771/Jack-1-1.jpeg",
      alt: "Team member Tuấn Trịnh",
      role: "Lead Designer",
      delay: "delay-[1200ms]",
    },
    {
      name: "J97",
      src: "https://cdn.24h.com.vn/upload/3-2022/images/2022-07-22/MV-moi-gay-nhieu-tranh-cai-Jack-kiem-duoc-bao-nhieu-tien-tu-kenh-YouTube-anh-1-1658471533-451-width739height663.jpg",
      alt: "Team member J97",
      role: "Technical Lead",
      delay: "delay-[1400ms]",
    },
    {
      name: "Jack",
      src: "https://thanhnien.mediacdn.vn/Uploaded/haoph/2021_10_21/jack-va-thien-an-5805.jpeg",
      alt: "Team member Jack",
      role: "Product Manager",
      delay: "delay-[1600ms]",
    },
    {
      name: "Meo Meo",
      src: "https://vcdn1-giaitri.vnecdn.net/2021/01/17/jack-2-3889-1610846872.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=R_oQZ2idkj_DYhYQed_Jmw",
      alt: "Team member Meo Meo",
      role: "Marketing Director",
      delay: "delay-[1800ms]",
    },
    {
      name: "Borcon",
      src: "https://scontent.fdad2-1.fna.fbcdn.net/v/t51.75761-15/505433084_18125454988445889_8437539079780816781_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7rpMiXX6KhQQ7kNvwGu4voe&_nc_oc=Adnn4zdTD-tDsVVPZW6H4wMVqD41ULWi0LNjAKlRmfrYfV0L2E-9ifEM-4wZxYKtHo4&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=5mMUUje67dSUUUns-U94xQ&oh=00_AfOfWhZ-oqo4uF06wqAYOkhRhKaGbeD2BAkWf1R5pF1VFA&oe=6855FCD5",
      alt: "Team member Borcon",
      role: "Operations Manager",
      delay: "delay-[2000ms]",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, teamMembers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8 from-slate-50 to-blue-50"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          {/* Header Section */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <h2
                className={`font-bold text-4xl md:text-5xl lg:text-6xl text-slate-800 leading-tight mb-6 text-center lg:text-left transition-all duration-1000 ease-out transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}
              >
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Leading
                </span>
                , Strong &{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Creative
                </span>{" "}
                Team
              </h2>
            </div>

            {/* Team stats - positioned above the paragraph */}
            <div
              className={`flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 transition-all duration-1000 ease-out transform delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-blue-600">
                  {teamMembers.length}+
                </div>
                <div className="text-sm text-slate-500">Team Members</div>
              </div>
              <p className="text-lg md:text-xl text-slate-600 text-center sm:text-right max-w-xs sm:max-w-sm">
                Meet the passionate professionals who work tirelessly to make
                our product the best it can be.
              </p>
            </div>

            {/* Remaining team stats - visible on larger screens
            <div
              className={`hidden lg:flex gap-8 transition-all duration-1000 ease-out transform delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-slate-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">100+</div>
                <div className="text-sm text-slate-500">Projects Completed</div>
              </div>
            </div> */}
          </div>

          {/* Team Members Section */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`group transition-all duration-1000 ease-out transform ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } ${member.delay} ${index % 2 === 1 ? "md:mt-12" : ""} ${
                    index === 4 ? "md:-mt-12" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={member.src}
                        alt={member.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-gray-200">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Carousel Layout */}
            <div className="md:hidden relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {teamMembers.map((member, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-auto max-w-sm">
                        <div className="aspect-[3/4] overflow-hidden">
                          <img
                            src={member.src}
                            alt={member.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 text-center">
                          <h3 className="font-bold text-xl text-slate-800 mb-2">
                            {member.name}
                          </h3>
                          <p className="text-slate-600 text-sm font-medium">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
                aria-label="Previous team member"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
                aria-label="Next team member"
              >
                <ChevronRight className="w-5 h-5 text-slate-700" />
              </button>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-blue-600 scale-125"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Team Stats
        <div
          className={`lg:hidden flex justify-center gap-8 mt-12 transition-all duration-1000 ease-out transform delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {teamMembers.length}+
            </div>
            <div className="text-xs text-slate-500">Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">5+</div>
            <div className="text-xs text-slate-500">Years Exp</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-600">100+</div>
            <div className="text-xs text-slate-500">Projects</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
