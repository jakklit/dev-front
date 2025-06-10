import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function getStrapiURL(path: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  return new URL(path, url).toString()
}
