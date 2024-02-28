import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function downloadVideo(link: string, fileName:string): void {
  const anchor = document.createElement('a');
  anchor.href = link;
  anchor.download = fileName;

  anchor.click();
}




