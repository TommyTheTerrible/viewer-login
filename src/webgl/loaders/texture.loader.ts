import { type SamplerOptions, Texture, Sampler } from "four";
import type { TextureData } from "./texture.types";

export async function loadTexture(
   url: string,
   width: number,
   height: number,
   samplerOptions?: Partial<SamplerOptions>
) {
   const imageData = await fetch(url);
   const imageBlob = await imageData.blob();
   const bitmap = await createImageBitmap(imageBlob, 0, 0, width, height, {
      imageOrientation: "flipY",
   });

   return new Texture(
      bitmap,
      new Sampler({
         wrapS: "repeat",
         wrapT: "repeat",
         ...samplerOptions,
      })
   );
}

export async function loadTextures(texturesData: TextureData[]) {
   return Promise.all(
      texturesData.map(({ path, width = 5400, height = 2700, options }) =>
         loadTexture(`/${path}`, width, height, options)
      )
   );
}
