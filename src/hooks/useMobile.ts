import { useState, useEffect, useCallback } from "react";

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  const handleResize = useCallback(() => {
    const newIsMobile = window.innerWidth < breakpoint;
    setIsMobile(newIsMobile);
  }, [breakpoint]);

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 150);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [handleResize]);

  return isMobile;
}

// Utility function for debouncing
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), wait);
  };
}
