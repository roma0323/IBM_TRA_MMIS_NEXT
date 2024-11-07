import React, { useState, useImperativeHandle, forwardRef } from "react";
import SlideNavigation from "@/components/SlideNavigation";

interface SlideNavigationContainerProps {
  totalSlides: number;
  visibleSlides: number;
  slideWidthPercentage: number;
  children: React.ReactNode;
}

export interface SlideNavigationContainerRef {
  handleMouseEnter: (direction: "left" | "right") => void;
  canMoveLeft: boolean;
}

const SlideNavigationContainer = forwardRef<SlideNavigationContainerRef, SlideNavigationContainerProps>(
  function SlideNavigationContainer(
    { totalSlides, visibleSlides, slideWidthPercentage, children },
    ref
  ) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMouseEnter = (direction: "left" | "right") => {
      setCurrentIndex((prevIndex) => {
        if (direction === "left") {
          return prevIndex === 0 ? 0 : prevIndex - 1;
        } else if (direction === "right") {
          return prevIndex >= totalSlides - visibleSlides
            ? prevIndex
            : prevIndex + 1;
        }
        return prevIndex;
      });
    };

    const canMoveLeft = currentIndex > 0;
    const canMoveRight = currentIndex < totalSlides - visibleSlides;

    useImperativeHandle(ref, () => ({
      handleMouseEnter,
      canMoveLeft,
    }));

    return (
      <div className="relative p-6 size-full overflow-hidden">
        <div
          className="flex h-full gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * slideWidthPercentage}%)` }}
        >
          {children}
        </div>
        <SlideNavigation
          direction="left"
          onClick={handleMouseEnter}
          isVisible={canMoveLeft}
        />
        <SlideNavigation
          direction="right"
          onClick={handleMouseEnter}
          isVisible={canMoveRight}
        />
      </div>
    );
  }
);

export default SlideNavigationContainer;