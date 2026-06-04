import page21 from "../assets/page-2.1.png";
import page22 from "../assets/page-2.2.png";

import triangle from "../assets/triangle.png";
import curveVector from "../assets/curve-vector.png";
import arrow from "../assets/Arrow 4.png";
import rectangle from "../assets/rectangle.png";
import zigzag from "../assets/zig-zag.png";

const Features = () => {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 px-5 sm:px-8 md:px-12 lg:px-24 bg-[#f5f5f5] flex justify-center select-none">
            <div className="relative w-full max-w-[1400px] min-h-[1400px] lg:min-h-[900px]">
                {/* CURVE VECTOR */}
                <img
                    src={curveVector}
                    alt=""
                    className="
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[300px]
    sm:w-[500px]
    lg:w-[900px]
    z-0
    pointer-events-none
  "
                />

                {/* TOP LEFT CONTENT */}
                <div
                    className="
    relative lg:absolute
    top-auto lg:top-[40px]
    left-auto lg:left-[60px]
    w-full lg:w-[420px]
    z-10
    text-center lg:text-left
    mb-16 lg:mb-0
  "
                >
                    <div className="relative inline-block mb-4">
                        {/* Main Heading font updated to Gerbil */}
                        <h2
                            className="
text-[34px]
sm:text-[42px]
lg:text-[50px]
leading-tight
font-normal
text-black
tracking-tight
"
                            style={{ fontFamily: "Gerbil" }}
                        >
                            <span className="relative inline-block">
                                Tomorrow should
                                <img
                                    src={zigzag}
                                    alt=""
                                    className="absolute left-0 bottom-[-10px] w-[180px]"
                                />
                            </span>
                            <br />
                            be better than today
                        </h2>
                    </div>

                    {/* Body Paragraph font updated to Satoshi */}
                    <p
                        className="
text-[16px]
lg:text-[18px]
leading-7
lg:leading-8
text-gray-600
mb-8
"
                        style={{ fontFamily: "Satoshi" }}
                    >
                        We are a team of strategists, designers communicators, researchers.
                        Together, we believe that progress only happens when you refuse to
                        play things safe.
                    </p>

                    {/* Button label font updated to Satoshi */}
                    <button className="flex items-center gap-4 group cursor-pointer" style={{ fontFamily: "Satoshi" }}>
                        <span className="font-semibold text-black">Read More</span>
                        <img
                            src={arrow}
                            alt=""
                            className="
                w-16
                transition-all
                duration-300
                ease-in-out
                group-hover:translate-x-2
                group-hover:scale-110
              "
                        />
                    </button>
                </div>

                {/* TOP RIGHT IMAGE */}
                <div
                    className="
    relative lg:absolute
    top-auto lg:top-0
    right-auto lg:right-[80px]
    flex justify-center
    mb-20 lg:mb-0
    z-10
  "
                >
                    <div className="relative">
                        <img
                            src={page21}
                            alt=""
                            className="
        w-[250px]
        h-[250px]
        sm:w-[320px]
        sm:h-[320px]
        lg:w-[380px]
        lg:h-[380px]
        rounded-full
        object-cover
        relative
        z-10
      "
                        />

                        <img
                            src={rectangle}
                            alt=""
                            className="
        absolute
        top-6
        right-0
        w-16
        sm:w-20
        lg:w-24
        z-0
      "
                        />
                    </div>
                </div>

                {/* BOTTOM LEFT IMAGE */}
                <div
                    className="
    relative lg:absolute
    bottom-auto lg:bottom-0
    left-auto lg:left-[50px]
    flex justify-center
    mb-20 lg:mb-0
    z-20
  "
                >
                    <div className="relative">
                        <img
                            src={page22}
                            alt=""
                            className="
        w-[250px]
        h-[250px]
        sm:w-[320px]
        sm:h-[320px]
        lg:w-[380px]
        lg:h-[380px]
        rounded-full
        object-cover
        z-10
        relative
      "
                        />

                        <img
                            src={triangle}
                            alt=""
                            className="
        absolute
        -left-4
        lg:-left-8
        top-12
        w-14
        lg:w-24
      "
                        />

                        <img
                            src={triangle}
                            alt=""
                            className="
        absolute
        bottom-0
        right-4
        lg:right-10
        w-14
        lg:w-24
        z-20
      "
                        />
                    </div>
                </div>

                {/* BOTTOM RIGHT CONTENT */}
                <div
                    className="
    relative lg:absolute
    right-auto lg:right-[50px]
    bottom-auto lg:bottom-[80px]
    w-full lg:w-[500px]
    z-10
    text-center lg:text-left
  "
                >
                    <div className="relative inline-block mb-4">
                        {/* Bottom Heading font updated to Gerbil */}
                        <h2
                            className="
text-[34px]
sm:text-[42px]
lg:text-[50px]
leading-tight
font-normal
text-black
tracking-tight mb-2
"              style={{ fontFamily: "Gerbil" }}
                        >
                            See how we can
                            <br />
                            help you progress
                        </h2>
                        <img
                            src={zigzag}
                            alt=""
                            className="absolute left-0 bottom-[-10px] w-[180px]"
                        />
                    </div>

                    {/* Bottom Paragraph font updated to Satoshi */}
                    <p
                        className="
text-[16px]
lg:text-[18px]
leading-7
lg:leading-8
text-gray-600
mb-8
"
                        style={{ fontFamily: "Satoshi" }}
                    >
                        We add a layer of fearless insights and action that allows
                        changemakers to accelerate their progress in areas such as brand,
                        design, digital, comms and social research.
                    </p>

                    {/* Bottom Button label font updated to Satoshi */}
                    <button className="
flex
items-center
justify-center
lg:justify-start
gap-4
group
cursor-pointer
" style={{ fontFamily: "Satoshi" }}>
                        <span className="font-semibold text-black">Read More</span>
                        <img
                            src={arrow}
                            alt=""
                            className="
                w-16
                transition-all
                duration-300
                ease-in-out
                group-hover:translate-x-2
                group-hover:scale-110
              "
                        />
                    </button>
                </div>
            </div>

            {/* TABLET */}
            <div className="hidden md:block lg:hidden">
                Tablet Layout
            </div>

            {/* MOBILE */}
            <div className="hidden">
                Mobile Layout
            </div>
        </section>
    );
};

export default Features;