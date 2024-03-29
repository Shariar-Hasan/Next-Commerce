"use client"
import React, { useEffect, useState } from "react";

const useScrollTrack = (height) => {
  if (typeof window !== "undefined") {
    const [isScrollLimitReached, setIsScrollLimitReached] = useState(
      window.scrollY >= height
    );
    useEffect(() => {
      const handleChange = () => {
        if (window.scrollY >= height) {
          setIsScrollLimitReached(true);
        } else {
          setIsScrollLimitReached(false);
        }
      };
      window.addEventListener("scroll", handleChange);
      return () => {
        window.removeEventListener("scroll", handleChange);
      };
    }, []);
    return isScrollLimitReached;
  }
};

export default useScrollTrack;
