//
import React from 'react';
import twistArrow from "../assets/twistarrow.png";
import semiCircle from "../assets/semicircle.png";

const Footer = () => {
  return (
<footer className="
w-full
bg-[#e1f2e5]
py-14 md:py-20 lg:py-24
flex
flex-col
items-center
overflow-hidden
select-none
">
      {/* MASTER CONTAINER */}
<div className="
w-full
max-w-[1599px]
px-5
sm:px-8
md:px-12
lg:px-24
">
        {/* ================= NEWSLETTER ================= */}
        <div 
 className="
  relative
  w-full
  max-w-[904px]
  mx-auto
  flex
  flex-col
  items-center
  justify-center
  text-center
  px-4
  min-h-[250px]
  md:min-h-[300px]
"          style={{ height: "300px" }}
        >


          {/* SEMICIRCLE */}
          <img
  src={semiCircle}
  alt=""
  className="
  absolute
  right-[-40px]
  md:right-[-80px]
  lg:right-[-100px]
  top-[20%]
  w-[70px]
  md:w-[110px]
  lg:w-[140px]
  h-auto
  object-contain
  pointer-events-none
"
/>

          {/* TEXT */}
          <h2 
           className="
  text-[42px]
  sm:text-[58px]
  md:text-[72px]
  lg:text-[84px]
  leading-tight
  font-normal
  text-black
  tracking-tight
"
  style={{ fontFamily: "Gerbil" }}
          >
            Subscribe to <br />
            our newsletter
          </h2>

          <p 
              className="
  mt-4
  text-[#3a5240]
  text-[15px]
  md:text-[18px]
  font-medium
  max-w-[500px]
"
  style={{ fontFamily: "Satoshi" }}
          >
            To make your stay special and even more memorable
          </p>

          <button 
            className="
  mt-8
  px-7 md:px-10
  py-3 md:py-4
  bg-black
  text-white
  text-[14px]
  md:text-[16px]
  font-semibold
  rounded-full
  hover:bg-[#1a1a1a]
  transition-colors
  duration-200
  cursor-pointer
"
  style={{ fontFamily: "Satoshi" }}
          >
            Subscribe Now
          </button>

        </div>

        {/* ================= DIVIDER ================= */}
<div className="w-full h-[1px] bg-[#b8d5bf] mt-12 md:mt-20 mb-12 md:mb-16" />
        {/* ================= GRID (FIXED ALIGNMENT) ================= */}
<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-10
md:gap-12
text-left
">
          <div>
            <h4 className="text-black text-[20px] font-bold mb-2 tracking-tight" style={{ fontFamily: "Gerbil" }}>Company</h4>
            <div className="space-y-3 text-[#3a5240] text-[16px]" style={{ fontFamily: "Satoshi" }}>
              <p className="cursor-pointer hover:text-black transition-colors duration-150">Home</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-150">Studio</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-150">Service</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-150">Blog</p>
            </div>
          </div>

          <div>
            <h4 className="text-black text-[20px] font-bold mb-2 tracking-tight" style={{ fontFamily: "Gerbil" }}>Terms & Policies</h4>
            <div className="space-y-3 text-[#3a5240] text-[16px]" style={{ fontFamily: "Satoshi" }}>
              <p className="cursor-pointer hover:text-black transition-colors duration-150">Privacy Policy</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-150">Terms & Conditions</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-150">Explore</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-150">Accessibility</p>
            </div>
          </div>

          <div>
            <h4 className="text-black text-[20px] font-bold mb-2 tracking-tight" style={{ fontFamily: "Gerbil" }}>Follow Us</h4>
            <div className="space-y-3 text-[#3a5240] text-[16px]" style={{ fontFamily: "Satoshi" }}>
              <p className="cursor-pointer hover:text-black transition-colors duration-150">Instagram</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-150">LinkedIn</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-150">Youtube</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-150">Twitter</p>
            </div>
          </div>

          <div>
            <h4 className="text-black text-[20px] font-bold mb-2 tracking-tight" style={{ fontFamily: "Gerbil" }}>Contact</h4>
            <div className="space-y-3 text-[#3a5240] text-[16px]" style={{ fontFamily: "Satoshi" }}>
              <p>
                1490w Fulton stg, STE <br />
                20 Chicago, IL 60857.
              </p>
              <p className="text-black font-medium">1123) 456789000</p>
              <p className="cursor-pointer hover:text-black transition-colors duration-150">info@elementum.com</p>
            </div>
          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div
  className="
  text-center
  text-[#55755b]
  text-[13px]
  md:text-[14px]
  mt-14
  md:mt-24
"
  style={{ fontFamily: "Satoshi" }}
>
          ©2023 Elementum. All rights reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;