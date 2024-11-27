"use client";

import Navbar from "./Navbar";
import React, { useEffect } from "react";



interface NavbarinProps {
  locale: string;
}

const Navbarin: React.FC<NavbarinProps> = ({ locale }) => {
  useEffect(() => {
    const debounce = (fn: Function) => {
      let frame: number;
      return (...params: any[]) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };

    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };

    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true,
    });

    storeScroll();

    return () => {
      document.removeEventListener("scroll", debounce(storeScroll));
    };
  }, []);

  return (
    <>
      <Navbar locale={locale} />
    </>
  );
};

export default Navbarin;
