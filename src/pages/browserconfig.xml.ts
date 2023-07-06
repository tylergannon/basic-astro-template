import { getAppData } from '$/appConfig';
import type { GetImageResult } from 'astro';
import { getImage } from 'astro:assets';

export async function get() {
  const { favicon: src } = await getAppData();
  const images = (await Promise.all(
    [70, 150, 310].map((width) => getImage({ src, width, format: 'png' })),
  )) as [GetImageResult, GetImageResult, GetImageResult];

  const body = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="${images[0].src}"/>
      <square150x150logo src="${images[1].src}"/>
      <square310x310logo src="${images[2].src}"/>
      <TileColor>#FFFFFF</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;
  return { body };
}
