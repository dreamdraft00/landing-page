import useIntersectionObserver from "../hooks/useIntersectionObserver.js";

export default function IntroduceSection() {
  const [sectionRef, isVisible] = useIntersectionObserver(0.6);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          alt="FPT Polytechnic Logo"
          src="https://cdn.haitrieu.com/wp-content/uploads/2023/05/Logo-Truong-Cao-dang-FPT-Polytechnic.png"
          className={`mx-auto h-12 transition-all duration-1000 ease-in-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        />
        <figure className="mt-10">
          <blockquote
            className={`text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9 transition-transform duration-1000 ease-in-out transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <p>
              “In life, there are times when we must part ways, but the
              responsible and hopeful message that Thien An sends to Jack moves
              the reader. It's not just a farewell, but also a profound
              expression of responsibility – knowing that they will no longer be
              together but still wishing the other person well and continued
              effort. At the same time, it's a message of hope: believing that
              even though they are no longer together, the other person can
              still succeed and be happy…”
            </p>
          </blockquote>
          <figcaption
            className={`mt-10 transition-transform duration-1000 ease-in-out transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <img
              alt="Thien An"
              src="https://hopamchuan.com/node/get_artist_image/thien_an"
              className={`mx-auto size-10 rounded-full transition-all duration-1000 ease-in-out transform delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Thien An</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
