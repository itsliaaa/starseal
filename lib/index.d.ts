export type ShapeType = 'cross' | 'diamond' | 'heart' | 'hexagon' | 'octagon' | 'pentagon' | 'round' | 'star' | 'triangle';
export namespace Filter {
  export interface BlurOptions {
    sigma?: number;
    steps?: number;
  }
}
export interface ConfigureOptions {
  ffmpegPath?: string;
  tempPath?: string;
  timeout?: number;
}
export interface ShapeOptions {
  type: ShapeType;
  scale?: number | null;
}
export interface ExifFlags {
  ai?: boolean;
  lock?: boolean;
  premium?: boolean;
}
export interface BuilderOptions {
  blur?: Filter.BlurOptions | number;
  width?: number;
  height?: number;
  quality?: number;
  fps?: number;
  brightness?: number;
  contrast?: number;
  saturation?: number;
  gamma?: number;
  trimStart?: number | string;
  trimEnd?: number | string;
  background?: string;
  flags?: string;
  format?: string;
}
export interface OutputTypes {
  toBuffer(): Promise<Buffer>;
  toFile(newPath?: string): Promise<string>;
  toBase64(): Promise<string>;
  toStream(): Promise<Readable>;
  toDataURL(): Promise<string>;
}
export interface StickerOptions extends BuilderOptions, ExifFlags {
  shape?: ShapeType | ShapeOptions;
  id?: string;
  packName?: string;
  publisherName?: string;
  emojis?: string[] | string;
  accessibilityText?: string;
}
export interface StickerBuilder extends OutputTypes {
  shape(type: ShapeType, scale?: number | null): StickerBuilder;
  setPackName(text: string): StickerBuilder;
  setPublisherName(text: string): StickerBuilder;
  setEmojis(value: string | string[]): StickerBuilder;
  setAccessibilityText(text: string): StickerBuilder;
  withAi(value: boolean): StickerBuilder;
  withLock(value: boolean): StickerBuilder;
  withPremium(value: boolean): StickerBuilder;
  packName(text: string): StickerBuilder;
  publisherName(text: string): StickerBuilder;
  emojis(value: string | string[]): StickerBuilder;
  accessibilityText(text: string): StickerBuilder;
  ai(value: boolean): StickerBuilder;
  lock(value: boolean): StickerBuilder;
  premium(value: boolean): StickerBuilder;
  flags(options: ExifFlags): StickerBuilder;
  options(options: BuilderOptions): StickerBuilder;
}
export interface WebPReader {
  getData(): any;
  getExif(raw?: false | null): object;
  getExif(raw: true): Buffer;
  getFrame(index: number, raw?: false | null): Buffer;
  getFrame(index: number, raw: true): object;
  getAllFrames(raw?: false | null): Buffer[];
  getAllFrames(raw: true): object[];
}
export function configure(options: ConfigureOptions): boolean;
export function ffmpeg(
  inputPath: string,
  inputArgs?: string[],
  outputArgs: string[],
  extension: string
): Promise<string>;
declare function createSticker(
  bufferOrUrl: Buffer | string
): StickerBuilder;
declare function createSticker(
  bufferOrUrl: Buffer | string,
  options: StickerOptions
): OutputTypes;
export function readWebP(
  source: Buffer | string
): Promise<WebPReader>;
export { createSticker, createSticker as create, createSticker as default };