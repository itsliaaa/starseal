export type ShapeType = 'cross' | 'diamond' | 'heart' | 'hexagon' | 'octagon' | 'pentagon' | 'round' | 'star' | 'triangle';
export type OutputType = 'base64' | 'buffer' | 'dataUrl' | 'file' | 'stream';
export interface ConfigureOptions {
  ffmpegPath?: string;
  tempPath?: string;
  timeout?: number;
}
export interface ShapeOptions {
  type: ShapeType;
  scale?: number | null;
}
export interface StickerOptions {
  shape?: ShapeType | ShapeOptions;
  id?: string;
  packName?: string;
  publisherName?: string;
  emojis?: string[] | string;
  accessibilityText?: string;
  ai?: boolean;
  lock?: boolean;
  premium?: boolean;
  outputType?: OutputType;
  outputFile?: string;
}
export interface StickerBuilder {
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
  toBuffer(): Promise<Buffer>;
  toFile(path?: string): Promise<string>;
  toBase64(): Promise<string>;
  toStream(): Promise<Readable>;
  toDataURL(): Promise<string>;
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
): Promise<Buffer | string>;
export { createSticker, createSticker as create, createSticker as default };