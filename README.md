<p align="center">
  <img src="https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/app/src/main/res/drawable/lunartune.png" width="160" height="160" alt="LunarTune Logo" />
</p>

<h1 align="center">LunarTune</h1>

<p align="center">
  <b>A revamped, high-performance, privacy-focused YouTube Music client for Android with expressive Material 3 styling.</b>
</p>

<p align="center">
  <a href="https://github.com/cognitiveshadows03/LunarTune/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-GPL--3.0-blue.svg?style=for-the-badge" alt="GPL 3.0 License" />
  </a>
  <a href="https://github.com/cognitiveshadows03/LunarTune/releases">
    <img src="https://img.shields.io/github/v/release/cognitiveshadows03/LunarTune?style=for-the-badge&color=FFE600&labelColor=000000" alt="Latest Release" />
  </a>
  <a href="https://t.me/LunarTuneGC">
    <img src="https://img.shields.io/badge/Telegram-Community-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram Community" />
  </a>
  <a href="https://www.virustotal.com/gui/file/f42cf0fdf8e62f0ba136c1e57c6fa7ddcb6b38c227eb0c8411d95ee2a74c1ebc">
    <img src="https://img.shields.io/badge/VirusTotal-100%25%20Clean-brightgreen?style=for-the-badge" alt="VirusTotal Clean" />
  </a>
</p>

---

## 🌟 Overview

**LunarTune** is a modern, privacy-respecting YouTube Music streaming client built from the ground up for Android using Jetpack Compose and Material 3 design guidelines. It brings ad-free listening, lossless audio fallback, rich synced lyrics, and unmatched visual customization right into your hands.

---

## ✨ Features

- 🎨 **Material 3 Dynamic Expressive Theming**: Adapts seamlessly to your album art or system wallpaper.
- 🎵 **Up to 9 Player Styles**: Customize player layouts from classic cards to modern full-screen waveforms.
- 🚫 **Zero Ads & Background Playback**: Enjoy uninterrupted music with screen off or while multitasking.
- 🎤 **Live Syllable-Synced Lyrics**: Accurate real-time lyrics with Romanization & Translation support.
- 🎛️ **Dolby / Dirac Equalizer Presets**: Fine-tune your sound with built-in hardware audio enhancements.
- 📦 **Spotify & Playlist Import**: Easily migrate your favorite playlists in a few clicks.
- 💎 **Monochrome Lossless Streaming**: High-resolution audio support (up to 24-bit/96kHz FLAC).
- 📊 **Listening Stats & Periodic Recap**: Detailed listening graphs and top artist breakdowns.
- 📱 **Fast & Battery Friendly**: Minimal background battery drain and low memory footprint.

---

## 📥 Downloads

Download the latest APK build suited for your processor architecture:

| Architecture | Target Devices | Release Link |
| :--- | :--- | :--- |
| **`arm64-v8a`** *(Recommended)* | Modern 64-bit Android smartphones & tablets | [Download APK](https://github.com/cognitiveshadows03/LunarTune/releases) |
| **`armeabi-v7a`** | Legacy 32-bit Android phones and devices | [Download APK](https://github.com/cognitiveshadows03/LunarTune/releases) |
| **`Universal`** | Compatible across all supported Android architectures | [Download APK](https://github.com/cognitiveshadows03/LunarTune/releases) |

---

## 🛠️ Tech Stack & Architecture

- **Language**: Kotlin 100%
- **UI Toolkit**: Jetpack Compose & Material 3 Expressive
- **Media Engine**: AndroidX Media3 / ExoPlayer
- **Network**: Ktor / Retrofit + OkHttp
- **Local Storage**: Room SQLite database with EncryptedSharedPreferences
- **Dependency Injection**: Hilt / Dagger

---

## 🚀 Building from Source

```bash
# Clone the repository
git clone https://github.com/cognitiveshadows03/LunarTune.git
cd LunarTune

# Build Debug APK
./gradlew assembleDebug

# Build Release APK
./gradlew assembleRelease
```

---

## 👥 Authors & Maintainers

- **cognitiveshadows03** ([GitHub](https://github.com/cognitiveshadows03)) — Lead Developer & Maintainer
- **Alex James** ([GitHub](https://github.com/AlexJamesHQ)) — Project Partner

### Acknowledgments

- Built upon the foundations of [ArchiveTune](https://github.com/rukamori/ArchiveTune) by [Rukamori](https://github.com/rukamori).
- Dedicated to the open-source Android music community.

---

## 📄 License

LunarTune is free and open-source software licensed under the **[GNU General Public License v3.0 (GPLv3)](LICENSE)**.
