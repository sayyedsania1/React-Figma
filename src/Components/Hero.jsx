
import guy1 from "../assets/guy-1.png";
import guy2 from "../assets/guy-2.png";
import guy3 from "../assets/guy-3.png";
import guy4 from "../assets/guy-4.png";
import guy5 from "../assets/guy-5.png";
import guy6 from "../assets/guy-6.png";
import guy7 from "../assets/guy-7.png";
import guy8 from "../assets/guy-8.png";

import zigZag from "../assets/zig-zag.png";
import redPg1 from "../assets/red-pg1.png";
import blackPg1 from "../assets/black-pg1.png";
import pinkRect from "../assets/pink-rect.png";
import greenRect from "../assets/green-rect.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[620px] md:min-h-[750px] bg-[#f5f5f5] overflow-hidden flex flex-col items-center pt-8 md:pt-12 pb-8 md:pb-12 select-none">

      {/* VECTORS - hidden on mobile */}
      <div className="hidden lg:flex absolute left-0 top-[45%] z-30 pointer-events-none flex-col gap-4 pl-4">
        <img
          src={redPg1}
          alt=""
          className="absolute object-contain pointer-events-none"
          style={{
            width: "720px",
            height: "255px",
            maxWidth: "300%",
            top: "-78.5px",
            left: "0.5px",
            zIndex: 30,
          }}
        />

        <img
          src={blackPg1}
          alt=""
          className="absolute object-contain pointer-events-none"
          style={{
            width: "647px",
            height: "251px",
            top: "-78.5px",
            left: "33.5px",
            maxWidth: "400%",
            zIndex: 30,
          }}
        />
      </div>

      {/* TEXT BLOCK */}
      <div className="w-full max-w-5xl px-4 md:px-6 text-center z-20 flex flex-col items-center">

        <h1
          className="relative text-[34px] sm:text-[48px] md:text-[68px] lg:text-[85px] leading-[1.15] md:leading-[112px] font-normal text-black"
          style={{ fontFamily: "Gerbil" }}
        >
          The{" "}

          <span className="relative inline-block whitespace-nowrap">
            thinkers
            <img
              src={zigZag}
              alt=""
              className="absolute left-0 right-0 -bottom-1 md:-bottom-2 w-full h-auto object-contain z-10"
            />
          </span>{" "}
          and <br className="hidden md:inline" />

          doers were{" "}

          <span className="relative inline-flex items-center justify-center px-2 md:px-4">
            <img
              src={pinkRect}
              alt=""
              className="absolute inset-0 w-full h-full object-contain z-10 scale-110"
            />
            <span className="relative z-20">changing</span>
          </span>{" "}

          <br className="hidden md:inline" />

          the{" "}

          <span className="relative inline-flex items-center justify-center px-2 md:px-4">
            <img
              src={greenRect}
              alt=""
              className="absolute inset-0 w-full h-full object-contain z-10 scale-110"
            />
            <span className="relative z-20">status</span>
          </span>{" "}

          Quo with
        </h1>

        <p
          className="mt-4 md:mt-8 max-w-3xl mx-auto text-[#5f5f5f] text-[14px] sm:text-[16px] md:text-[24px] leading-relaxed"
          style={{ fontFamily: "Satoshi" }}
        >
          We are a team of strategists, designers, communicators, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </p>
      </div>

      {/* IMAGE STRIP */}
      <div className="relative w-full max-w-[1400px] h-[180px] sm:h-[260px] md:h-[420px] mt-8 md:mt-16 mx-auto px-2 sm:px-4 md:px-8 z-20">

        {/* LEFT */}

        <div className="absolute left-[2%] bottom-[10%] z-10">
          <img
            src={guy1}
            alt=""
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-[180px] md:h-[180px] rounded-full object-cover border-2 md:border-[6px] border-[#f5f5f5] shadow-md"
          />
        </div>

        <div className="absolute left-[10%] bottom-[22%] z-20">
          <img
            src={guy2}
            alt=""
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-[180px] md:h-[180px] rounded-full object-cover border-2 md:border-[6px] border-[#f5f5f5] shadow-md"
          />
        </div>

        <div className="absolute left-[28%] top-[5%] z-10 hidden sm:block">
          <img
            src={guy3}
            alt=""
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[180px] md:h-[180px] rounded-full object-cover border-2 md:border-[6px] border-[#f5f5f5] shadow-md"
          />
        </div>

        <div className="absolute left-[36%] bottom-[0%] z-20 hidden sm:block">
          <img
            src={guy4}
            alt=""
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[180px] md:h-[180px] rounded-full object-cover border-2 md:border-[6px] border-[#f5f5f5] shadow-md"
          />
        </div>

        {/* RIGHT */}

        <div className="absolute right-[36%] top-[10%] z-10 hidden sm:block">
          <img
            src={guy5}
            alt=""
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[175px] md:h-[175px] rounded-full object-cover border-2 md:border-[6px] border-[#f5f5f5] shadow-md"
          />
        </div>

        <div className="absolute right-[26%] bottom-[10%] z-20 hidden sm:block">
          <img
            src={guy6}
            alt=""
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[180px] md:h-[180px] rounded-full object-cover border-2 md:border-[6px] border-[#f5f5f5] shadow-md"
          />
        </div>

        <div className="absolute right-[10%] top-[0%] z-10">
          <img
            src={guy7}
            alt=""
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-[180px] md:h-[180px] rounded-full object-cover border-2 md:border-[6px] border-[#f5f5f5] shadow-md"
          />
        </div>

        <div className="absolute right-[2%] bottom-[15%] z-20">
          <img
            src={guy8}
            alt=""
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-[180px] md:h-[180px] rounded-full object-cover border-2 md:border-[6px] border-[#f5f5f5] shadow-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;