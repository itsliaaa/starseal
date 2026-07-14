# 🎨 @itsliaaa/starseal

[![Logo](https://files.catbox.moe/47bhgu.png)](https://www.npmjs.com/package/@itsliaaa/starseal)

<p align="center">
   A lightweight WhatsApp sticker maker with a fluent API.
   <br><br>
   <a href="https://www.npmjs.com/package/@itsliaaa/starseal">
      <img src="https://img.shields.io/npm/v/@itsliaaa/starseal?style=for-the-badge&logo=npm"/>
   </a>
   <a href="https://www.npmjs.com/package/@itsliaaa/starseal">
      <img src="https://img.shields.io/npm/dm/@itsliaaa/starseal?style=for-the-badge&logo=npm"/>
   </a>
   <a href="https://github.com/itsliaaa/starseal">
      <img src="https://img.shields.io/github/stars/itsliaaa/starseal?style=for-the-badge&logo=github"/>
   </a>
   <a href="LICENSE">
      <img src="https://img.shields.io/badge/license-Apache--2.0-blue?style=for-the-badge"/>
   </a>
   <a href="https://nodejs.org">
      <img src="https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&labelColor=green&logoColor=white&style=for-the-badge"/>
   </a>
   <a href="#">
      <img src="https://img.shields.io/badge/ESM-only?logo=javascript&labelColor=yellow&logoColor=black&style=for-the-badge"/>
   </a>
</p>

☕ For donation: [Saweria](https://saweria.co/itsliaaa)

### 📋 Table of Contents

- [📥 Installations](#-installations)
   - [📄 Via `package.json`](#-via-packagejson)
   - [⌨️ Via terminal](#%EF%B8%8F-via-terminal)
   - [🧩 Import (ESM & CJS)](#-import-esm--cjs)
- [📄 Quick Start](#-quick-start)
- [⚙️ Options](#%EF%B8%8F-options)
   - [📎 Fluent API](#-fluent-api)
   - [📋 Object API](#-object-api)
   - [💡 Notes](#-notes)
- [⚙️ Configuration](#%EF%B8%8F-configuration)
- [📋 Requirements](#-requirements)
- [🚀 Try the Bot](#-try-the-bot)
- [📣 Credits](#-credits)

### 📥 Installations

#### 📄 Via `package.json`

```json
# NPM
"dependencies": {
   "@itsliaaa/starseal": "latest"
}

# GitHub
"dependencies": {
   "@itsliaaa/starseal": "github:itsliaaa/starseal"
}
```

#### ⌨️ Via terminal

```bash
# NPM
npm i @itsliaaa/starseal@latest

# GitHub
npm i @itsliaaa/starseal@github:itsliaaa/starseal
```

#### 🧩 Import (ESM & CJS)

```javascript
// --- ESM
import { create } from '@itsliaaa/starseal'

// --- CJS (tested and working on Node.js 24 ✅)
const { create } = require('@itsliaaa/starseal')
```

### 📄 Quick Start

```javascript
import { create } from '@itsliaaa/starseal'

const stickerBuffer = await create(bufferOrUrl)
   .packName('My Sticker Pack 🎨')
   .publisherName('Lia Wynn ✨')
   .toBuffer()

// Send with your Baileys instance 
// sock.sendMessage(jid, {
//    sticker: stickerBuffer
// })
```

### ⚙️ Options

Starseal supports two configuration styles:
- Fluent API: chain methods for better readability.
- Object API: pass all options in a single configuration object.

#### 📎 Fluent API

```javascript
import { create } from '@itsliaaa/starcore'

const stickerBuffer = await create(bufferOrUrl)
   .shape(
      'round',
      1.0 // Scale, but its optional
   )
   .id('ABCDEFG') // ID sticker but its optional
   .packName('My Sticker Pack 🎨')
   .publisherName('Lia Wynn ✨')
   .emojis('🎨, ✨, ❤️') // String or array is supported.
   .accessibilityText('This sticker was made using Starseal!')
   .flags({
      ai: true,
      lock: false,
      premium: true
   })
   .options({
      width: 512, height: 512,
      flags: 'bilinear',
      format: 'yuva420p',
      brightness: 0.1,
      contrast: 0.05,
      saturation: 0.2,
      gamma: 0.03,
      blur: { sigma: 5, steps: 1 }, // Add gaussian blur
      // Animated WebP options
      fps: 24, // Maximum frame rate
      trimStart: '00:00:00', // Start timestamp
      trimEnd: '00:00:05' // End timestamp
   })
   .toBuffer() // Or: ".toFile('./my-sticker.webp')", ".toBase64()", ".toStream()", ".toDataURL()"
```

- ⬜ Available Shapes:

```typescript
type ShapeType =
  | 'cross'
  | 'diamond'
  | 'heart'
  | 'hexagon'
  | 'octagon'
  | 'pentagon'
  | 'round'
  | 'star'
  | 'triangle';
```

#### 📋 Object API

```javascript
import { create } from '@itsliaaa/starcore'

const myOptions = {
   shape: 'heart', // Or "{ type: 'heart', scale: 2.2 }"
   id: 'ABCDEFG',
   packName: 'My Sticker Pack 🎨',
   publisherName: 'Lia Wynn ✨',
   emojis: ['🎨', '✨', '❤️'],
   accessibilityText: 'This sticker was made using Starseal!',
   ai: false,
   lock: true,
   premium: false,
   width: 512,
   height: 512,
   flags: 'bilinear',
   format: 'yuva420p',
   brightness: 0.1,
   contrast: 0.05,
   saturation: 0.2,
   gamma: 0.03,
   blur: 2, // Number of blur steps, or "{ sigma, steps }"
   fps: 24,
   trimStart: '00:00:00',
   trimEnd: '00:00:05'
}

const stickerBuffer = await create(bufferOrUrl, myOptions)
   .toBuffer()
```

### 💡 Notes

- `emojis` accepts either:
   - A comma-separated string ('🎨, ✨, ❤️').
   - And, array (['🎨', '✨', '❤️']).
- `.toBuffer()` returns a `Buffer`.
- `.toFile(path)` writes the sticker to disk and returns the output path.
- `.toBase64()` returns a `base64` string.
- `.toDataURL()` returns a `data:` URL string (`data:image/webp;base64,...`).
- `.toStream()` returns a `Readable` stream.


- `ai: true`: Marks the sticker as AI-generated, displaying an AI logo and a **"Create AI Sticker"** button.
- `lock: true`: Prevents other users from saving the sticker.
- `premium: true`: Marks the sticker as premium, sending it as a premium sticker and displaying a diamond logo.

### ⚙️ Configuration

Starseal can be configured globally before creating stickers.

```javascript
import { configure } from '@itsliaaa/starseal'
import { tmpdir } from 'node:os'

configure({
   ffmpegPath: 'ffmpeg',
   tempPath: tmpdir(),
   timeout: 30_000
})
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ffmpegPath` | `string` | `'ffmpeg'` | Path to the FFmpeg executable. |
| `tempPath` | `string` | `os.tmpdir()` | Directory used for temporary files. |
| `timeout` | `number` | `30000` | Maximum FFmpeg execution time in milliseconds. |

### 📋 Requirements

To process stickers, **FFmpeg must be installed** and accessible from your system's `PATH`.

Verify your installation:

```bash
ffmpeg -version
```

If FFmpeg is installed in a custom location, specify it using `configure()`:

```javascript
configure({
  ffmpegPath: '/path/to/ffmpeg'
})
```

### 🚀 Try the Bot

A fast, lightweight, and modular WhatsApp bot built with [@itsliaaa/baileys](https://www.npmjs.com/package/@itsliaaa/baileys).
Perfect for managing groups, moderating chats, and adding fun with quiz games and handy tools.

👉🏻 [@itsliaaa/starseed](https://github.com/itsliaaa/starseed#readme)

A lightweight framework built on top of Baileys for WhatsApp bot development.

👉🏻 [@itsliaaa/starcore](https://github.com/itsliaaa/starcore#readme)

### 📣 Credits

<!-- Please do not replace my name with yours. It's disrespectful. -->

**This project is created and maintained by [Lia Wynn](https://github.com/itsliaaa)**

Please do not remove or alter the original credits, copyright notices, or attributions.