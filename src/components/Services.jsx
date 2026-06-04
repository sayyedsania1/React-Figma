
import React from 'react';
import arrowRight from "../assets/Arrow 4.png";
import greenRect from "../assets/green-rect.png";
import zigzag from "../assets/zig-zag.png";
import curve from "../assets/curve-vector.png";

const Services = () => {
  return (
<section className="
w-full
bg-[#f5f5f5]
pt-8 md:pt-10
pb-8 md:pb-10
px-5 sm:px-8 md:px-12 lg:px-24
overflow-hidden
select-none
flex
flex-col
items-center
">
      <div className="
w-full
max-w-[1618px]
mx-auto
flex
flex-col
min-h-fit
lg:min-h-[620px]
">

        {/* ================= TOP HEADING ================= */}
<div className="relative w-full flex flex-col items-start mb-8 md:mb-10">
          <h2
className="
relative
z-10
text-[42px]
sm:text-[55px]
md:text-[70px]
leading-tight
md:leading-[105px]
"            style={{ fontFamily: "Gerbil" }}
          >
            What we{" "}

            <span className="relative inline-block">
              <img
                src={greenRect}
                alt=""
className="
absolute
w-[110px]
h-[70px]
sm:w-[150px]
sm:h-[95px]
md:w-[200px]
md:h-[125px]
z-10
object-contain
scale-110
"              />
              <span className="relative z-20 px-2">can</span>
            </span>

            <br />

            <span className="relative inline-block">
              offer you!

              <img
                src={zigzag}
                alt=""
className="
absolute
left-0
bottom-[-6px]
w-[120px]
sm:w-[150px]
md:w-[180px]
"              />
            </span>
          </h2>

          {/* CURVE VECTOR */}
          <img
            src={curve}
            alt=""
           className="
absolute
top-[-20px]
right-[-120px]
w-[250px]
sm:w-[400px]
md:w-[550px]
lg:w-[654px]
pointer-events-none
z-0
"
          />

        </div>

        {/* ================= SERVICES LIST ================= */}
        <div className="w-full flex flex-col">

          {/* ROW 1 */}
          <div className="
w-full
min-h-[110px]
py-6
border-t
border-b
border-[#dbdbdb]
flex
flex-col
md:flex-row
md:items-center
gap-4
md:gap-12
group
hover:bg-[#eaeaea]
transition-colors
duration-200
">

            <div
className="
w-full
md:w-[200px]
text-[#5f5f5f]
text-[14px]
md:text-[15px]
leading-snug
pl-0
md:pl-2
"              style={{ fontFamily: "Satoshi" }}
            >
              Office of multiple
              <br />
              interest content
            </div>

            <div
className="
flex-1
text-black
text-[28px]
sm:text-[36px]
md:text-[50px]
font-normal
tracking-tight
"              style={{ fontFamily: "Gerbil" }}
            >
              Collaborative & partnerships
            </div>

<div className="self-start md:self-center md:pr-4">       
           <img
                src={arrowRight}
                alt="Go"
className="
w-12
md:w-16
h-1.5
opacity-100
group-hover:translate-x-2
transition-all
duration-300
"              />
            </div>

          </div>

          {/* ROW 2 */}
          <div className="
w-full
min-h-[110px]
py-6
border-t
border-b
border-[#dbdbdb]
flex
flex-col
md:flex-row
md:items-center
gap-4
md:gap-12
group
hover:bg-[#eaeaea]
transition-colors
duration-200
">

            <div
className="
w-full
md:w-[200px]
text-[#5f5f5f]
text-[14px]
md:text-[15px]
leading-snug
pl-0
md:pl-2
"              style={{ fontFamily: "Satoshi" }}
            >
              The hanger US Air force
              <br />
              digital experimental
            </div>

            <div
className="
flex-1
text-black
text-[28px]
sm:text-[36px]
md:text-[50px]
font-normal
tracking-tight
"              style={{ fontFamily: "Gerbil" }}
            >
              We talk about our weight
            </div>

<div className="self-start md:self-center md:pr-4">
                  <img
                src={arrowRight}
                alt="Go"
className="
w-12
md:w-16
h-1.5
opacity-100
group-hover:translate-x-2
transition-all
duration-300
"              />
            </div>

          </div>

          {/* ROW 3 */}
          <div className="
w-full
min-h-[110px]
py-6
border-t
border-b
border-[#dbdbdb]
flex
flex-col
md:flex-row
md:items-center
gap-4
md:gap-12
group
hover:bg-[#eaeaea]
transition-colors
duration-200
">

            <div
className="
w-full
md:w-[200px]
text-[#5f5f5f]
text-[14px]
md:text-[15px]
leading-snug
pl-0
md:pl-2
"              style={{ fontFamily: "Satoshi" }}
            >
              Delta faucet content,
              <br />
              social, digital
            </div>

            <div
className="
flex-1
text-black
text-[28px]
sm:text-[36px]
md:text-[50px]
font-normal
tracking-tight
"              style={{ fontFamily: "Gerbil" }}
            >
              Piloting digital confidence
            </div>

<div className="self-start md:self-center md:pr-4">
                  <img
                src={arrowRight}
                alt="Go"
className="
w-12
md:w-16
h-1.5
opacity-100
group-hover:translate-x-2
transition-all
duration-300
"              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;