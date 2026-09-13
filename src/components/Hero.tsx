import heroImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto grid max-w-[1180px] grid-cols-1 items-center
          gap-8 px-4 py-8
          md:grid-cols-2 md:gap-12 md:px-8 md:py-16
          lg:min-h-[560px] lg:gap-20 lg:py-20
        "
      >
        {/* Left Content */}
        <div
          className="
            flex flex-col items-center text-center
            md:items-start md:text-left
          "
        >
          <h1
            className="
              max-w-[570px]
              text-[28px] font-bold
              leading-[1.08] tracking-[-1px]
              text-[#111827]
              sm:text-[34px]
              md:text-[40px]
              lg:text-[53px]
            "
          >
            Build Your Ideal
            <br />

            <span className="brand-gradient-text">
              Development Stack
            </span>
          </h1>

          <p
            className="
              mt-4 max-w-[340px]
              text-[13px] leading-5 text-[#64748b]
              sm:max-w-[420px] sm:text-[14px]
              md:mt-6 md:max-w-[540px] md:text-[17px] md:leading-7
            "
          >
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-5 flex w-full max-w-[330px] items-center gap-2
              sm:max-w-[390px]
              md:mt-8 md:max-w-none md:w-auto md:gap-3
            "
          >
            <a
              className="
                cursor-pointer
                brand-gradient
                flex h-[42px] flex-1 items-center justify-center
                rounded-md px-3
                text-[12px] font-semibold text-white
                shadow-sm transition duration-200
                hover:shadow-md
                md:h-[46px] md:flex-none md:px-5 md:text-[13px]
              "
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="
                flex h-[42px] flex-1 items-center justify-center
                rounded-md border border-[#e2e8f0]
                bg-white px-3
                text-[11px] font-medium text-[#475569]
                transition duration-200
                hover:border-[#cbd5e1] hover:bg-gray-50
                md:h-[46px] md:min-w-[150px] md:flex-none
                md:px-5 md:text-[13px]
              "
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="
            flex items-center justify-center
            md:justify-end
          "
        >
          <img
            src={heroImage}
            alt="Development stack illustration"
            className="
              w-full max-w-[300px] object-contain
              sm:max-w-[340px]
              md:max-w-[400px]
              lg:max-w-[440px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;