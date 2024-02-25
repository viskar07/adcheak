import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function calculateFileSize(bitRate: number | undefined, durationMs: string | undefined): string {
  if (bitRate === undefined || durationMs === undefined) {
      return "MB";
  }
  const durationSec: number = parseFloat(durationMs) / 10000;
  const fileSizeBytes: number = bitRate * durationSec;

  const units: string[] = ['bytes', 'KB', 'MB', 'GB', 'TB'];
  let fileSize: number = fileSizeBytes;
  let unitIndex: number = 0;

  while (fileSize >= 1024 && unitIndex < units.length - 1) {
      fileSize /= 1024;
      unitIndex++;
  }

  return fileSize.toFixed(2) + ' ' + units[unitIndex];
}




export const isValidUrl = (url: string) => {
  try {
      const parseUrl = new URL(url);
      const hostname = parseUrl.hostname;
      
      if (hostname.includes('youtube.com')) {
          return true;
      }
  } catch {
      return false;
  }
}