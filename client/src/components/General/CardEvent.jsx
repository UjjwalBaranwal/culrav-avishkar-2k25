import React from "react";

const Card = ({ title, image, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-2 bg-[#0a0a1a]/80 border border-[#ffffff22] backdrop-blur-md"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#4f00ff33] via-[#00ffff22] to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#085757aa] via-[#b100ff88] to-[#0b6464aa] " />
      </div>
      <div className="absolute bottom-6 left-0 right-0 text-center z-10 px-4 transition-all duration-700 group-hover:opacity-0 group-hover:translate-y-4">
        <h2 className="text-[#f3e9ef] font-extrabold text-2xl tracking-widest  transition-all duration-500 group-hover:text-[#c084fc]">
          {title}
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-center text-center translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
        <div className="bg-[#000000cc] backdrop-blur-md px-6 py-4 w-full rounded-t-2xl">
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 w-[50%] bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
      </div>
    </div>
  );
};

export default Card;
