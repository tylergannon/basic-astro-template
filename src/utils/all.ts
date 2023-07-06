import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

/** */
export function getFormattedDate(date?: string | undefined) {
  return date
    ? new Date(date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '';
}

export async function getFavicons(src: ImageMetadata) {
  const images = await Promise.all(
    [16, 32, 180].map((width) => getImage({ src, width })),
  );
  return {
    sm: images[0],
    md: images[1],
    touch: images[2],
  };
}
