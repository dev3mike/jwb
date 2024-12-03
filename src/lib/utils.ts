import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/*
{ label: "Green Pulse", value: "green_pulse" },
{ label: "Red", value: "red" },
{ label: "Grey", value: "grey" },
{ label: "Blue", value: "blue" },
{ label: "Gradient", value: "gradient" },
{ label: "Purple", value: "purple" },
{ label: "Pink", value: "pink" }
*/
export function getStatusThemeClassnames(theme: string) {
  switch (theme) {
    case "green_pulse":
      return { parent: "border border-green-500/30", icon: "w-[10px] h-[10px] green-pulse" };
    case "red":
      return {
        parent: "border border-red-500/40",
        icon: "w-[10px] h-[10px] bg-red-500/40",
      };
    case "grey":
      return {
        parent: "border dark:border-white/20",
        icon: "w-[10px] h-[10px] dark:bg-white/20",
      };
    case "blue":
      return {
        parent: "border border-blue-500/50",
        icon: "w-[10px] h-[10px] bg-blue-500/50",
      };
    case "gradient":
      return {
        parent: "status-bg-gradient",
        icon: "none mr-0",
      };
    case "purple":
      return {
        parent: "border border-purple-500/50",
        icon: "w-[10px] h-[10px] bg-purple-500/60",
      };
    case "pink":
      return {
        parent: "border border-pink-500/50",
        icon: "w-[10px] h-[10px] bg-pink-500/60",
      };
    default:
      return { parent: "border border-green-500/30", icon: "green-pulse" };
  }
}
