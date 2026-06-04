
import React from "react";

import greenRect from "../assets/green-rect.png";
import zigzag from "../assets/zig-zag.png";
import rect from "../assets/rect.png";
import comma1 from "../assets/comma1.png";
import comma2 from "../assets/comma2.png";

import last1 from "../assets/last1.png";
import last2 from "../assets/last2.png";
import last3 from "../assets/last3.png";
import last4 from "../assets/last4.png";

import last5 from "../assets/last5.png";
import last6 from "../assets/last6.png";
import last7 from "../assets/last7.png";
import last8 from "../assets/last8.png";

const Testimonials = () => {
  return (
<section className="
w-full
bg-[#f5f5f5]
py-8 md:py-12
px-5 sm:px-8 md:px-12 lg:px-10
overflow-hidden
">
<div className="
max-w-[1400px]
mx-auto
relative
min-h-[500px]
lg:h-[500px]
flex
flex-col
items-center
justify-center
">
<div className="hidden lg:block absolute left-[120px] top-[40px] w-[180px] h-[500px]">
  <img
    src={last1}
    alt=""
    className="absolute top-[0px] left-[40px] w-[55px] h-[55px] rounded-full object-cover"
  />

  <img
    src={last2}
    alt=""
    className="absolute top-[90px] left-[20px] w-[130px] h-[130px] rounded-full object-cover"
  />

  <img
    src={last3}
    alt=""
    className="absolute top-[260px] left-[0px] w-[60px] h-[60px] rounded-full object-cover"
  />

  <img
    src={last4}
    alt=""
    className="absolute top-[320px] left-[80px] w-[90px] h-[90px] rounded-full object-cover"
  />

</div>

<div className="hidden lg:block absolute right-[120px] top-[40px] w-[180px] h-[500px]">
  <img
    src={last6}
    alt=""
    className="absolute top-[0px] right-[40px] w-[90px] h-[90px] rounded-full object-cover"
  />

  <img
    src={last5}
    alt=""
    className="absolute top-[100px] right-[90px] w-[70px] h-[70px] rounded-full object-cover"
  />

  <img
    src={last7}
    alt=""
    className="absolute top-[210px] right-[10px] w-[75px] h-[75px] rounded-full object-cover"
  />

  <img
    src={last8}
    alt=""
    className="absolute top-[300px] right-[30px] w-[150px] h-[150px] rounded-full object-cover"
  />

</div>

        {/* ================= CENTER CONTENT ================= */}

        <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center">

          {/* HEADING */}

          <h2
className="
text-center
text-[34px]
sm:text-[46px]
lg:text-[58px]
leading-[1]
text-black
font-normal
"            style={{ fontFamily: "Gerbil" }}
          >
            What our customer
<br />

<span className="relative inline-block">
  <img
    src={greenRect}
    alt=""
className="
absolute
left-[-8px]
top-[3px]
w-[90px]
h-[35px]
sm:w-[120px]
sm:h-[45px]
lg:w-[150px]
lg:h-[50px]
"  />

  <span className="relative z-10">
    says
  </span>
</span>

{" "}About{" "}

<span className="relative inline-block">
  Us

 <img
  src={zigzag}
  alt=""
  className="
absolute
left-[-100px]
sm:left-[-140px]
lg:left-[-169px]
bottom-[-10px]
w-[220%]
sm:w-[260%]
lg:w-[300%]
max-w-none
"
/>
</span>
          </h2>

          {/* TESTIMONIAL BOX */}

          <div className="relative mt-14">

            <img
              src={rect}
              alt=""
className="
w-[320px]
h-[240px]
sm:w-[420px]
sm:h-[260px]
lg:w-[520px]
lg:h-[290px]
"            />

          {/* OPENING DOUBLE QUOTES */}
<img
  src={comma1}
  alt=""
className="absolute top-5 left-2 w-5 sm:w-6 lg:w-8"/>

<img
  src={comma1}
  alt=""
className="absolute top-5 left-7 sm:left-8 lg:left-10 w-5 sm:w-6 lg:w-8"/>

{/* CLOSING DOUBLE QUOTES */}
<img
  src={comma2}
  alt=""
className="absolute bottom-5 right-2 w-5 sm:w-6 lg:w-8"/>

<img
  src={comma2}
  alt=""
className="absolute bottom-5 right-7 sm:right-8 lg:right-10 w-5 sm:w-6 lg:w-8"/>

            <p
              className="
absolute
inset-0
flex
items-center
justify-center
px-8
sm:px-10
lg:px-14
text-center
text-[12px]
sm:text-[14px]
lg:text-[15px]
leading-5
sm:leading-6
lg:leading-7
text-[#3d3d3d]
"
              style={{ fontFamily: "Satoshi" }}
            >
              Elementum delivered the site within the timeline
              as requested. In the end, the client found a 50%
              increase in traffic within days since its launch.
              They also had an impressive ability to use
              technologies that the company hadn't used,
              which have also proved to be easy to use and
              reliable.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;