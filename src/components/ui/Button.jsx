import React from "react";
import { useNavigate } from "react-router-dom";


export default function Button({
  children,
  variant = "solid",
  className = "",
  onClick,
  type = "button",
  to
}) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (to) navigate(to);
  };
  const base = "px-5 py-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer";

  const variants = {
    solid: `
      purple-gradient text-white 
      purple-gradient-hover
    `,
    outline: `
      border border-[#9333ea] purple-text
      hover:purple-gradient hover:text-white
    `,
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
