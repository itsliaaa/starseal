export default createSticker;
export interface ConfigureOptions {
  [key: string]: unknown;
}
export interface StickerOptions {
  [key: string]: unknown;
}
export interface StickerBuilder {
  setRound(scale: number): StickerBuilder;
  setPackName(text: string): StickerBuilder;
  setPublisherName(text: string): StickerBuilder;
  setEmojis(value: string | string[]): StickerBuilder;
  setAccessibilityText(text: string): StickerBuilder;
  withAi(value: boolean): StickerBuilder;
  withLock(value: boolean): StickerBuilder;
  withPremium(value: boolean): StickerBuilder;
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
  outputArgs?: string[],
  extension: string
): Promise<string>;