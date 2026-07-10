export default createSticker;
export interface ConfigureOptions {
  [key: string]: unknown;
}
export interface StickerOptions {
  [key: string]: unknown;
}
export interface StickerBuilder {
  shape(type: string, scale?: number | null): StickerBuilder;
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
  toFile(path: string): Promise<string>;
}
export function configure(options: ConfigureOptions): boolean;
export function createSticker(
  bufferOrUrl: Buffer | string
): StickerBuilder;
export function createSticker(
  bufferOrUrl: Buffer | string,
  options: StickerOptions
): Promise<Buffer | string>;
export function ffmpeg(
  inputPath: string,
  inputArgs?: string[],
  outputArgs: string[],
  extension: string
): Promise<string>;