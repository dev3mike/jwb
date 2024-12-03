
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export function Slider({perView, spacing, items, className}: {perView?: number, spacing: number, items: React.ReactNode[], className?: string}) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: perView ?? "auto",
            spacing,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
    });

    function next() {
        setCurrentSlide(old => old + 1);
        instanceRef.current?.next()
    }

    function prev() {
        console.log("currentSlide", currentSlide);
        if (currentSlide === 0) return
        setCurrentSlide(old => old - 1);
        instanceRef.current?.prev()
    }
    return (
        <div className={cn("slider-container overflow-hidden relative min-h-[50px]", className)}>
            <div className="flex absolute w-full justify-center items-center">
                {currentSlide > 0 && <ChevronLeft className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer" onClick={prev} />}
                <div ref={sliderRef} className="keen-slider w-full flex-1">
                    {items.map((item, index) => (
                        <div key={index} className="keen-slider__slide h-full">
                            {item}
                        </div>
                    ))}
                </div>
                {currentSlide < items.length - 1 && <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer" onClick={next} />}
            </div>
        </div>
    );
}
