import { ScreenshotItem, PlayerStyle, DownloadOption, FeatureItem } from '../types';

export const LUNARTUNE_LOGO_URL = 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/assets/lunartune-icon-rounded.png';
export const LUNARTUNE_GITHUB_URL = 'https://github.com/cognitiveshadows03/LunarTune';
export const LUNARTUNE_TELEGRAM_URL = 'https://t.me/LunarTuneGC';
export const LUNARTUNE_VIRUSTOTAL_URL = 'https://www.virustotal.com/gui/file/c8f0d0424e5dd12be68515b85909a18353802a2e65ddd9efb3e3165a79bff9d9?nocache=1';

export const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'screenshot-1-home',
    title: 'Home Feed',
    titleBn: 'হোম ফিড',
    category: 'music',
    url: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/fastlane/metadata/android/en-US/images/phoneScreenshots/screenshot_1.jpg',
    subtitle: 'YouTube Music Recommendations',
    subtitleBn: 'ইউটিউব মিউজিক রিকমেন্ডেশন',
    description: 'Personalized quick picks, continuous radio mix, and customizable taste carousels without ads.',
    descriptionBn: 'বিজ্ঞাপনবিহীন ব্যক্তিগতকৃত গান, কন্টিনিউয়াস রেডিও মিক্স এবং পছন্দের ক্যারোসেল।'
  },
  {
    id: 'screenshot-2-player',
    title: 'Now Playing',
    titleBn: 'নাও প্লেয়িং',
    category: 'players',
    url: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/fastlane/metadata/android/en-US/images/phoneScreenshots/screenshot_2.jpg',
    subtitle: 'Album-Art Dynamic Colors',
    subtitleBn: 'অ্যালবাম আর্ট ডায়নামিক কালার',
    description: 'Up to 9 player styles and 8 background effects powered by responsive Material 3 design.',
    descriptionBn: 'ম্যাটেরিয়াল ৩ ডিজাইনে ৯টি প্লেয়ার স্টাইল এবং ৮টি ব্যাকগ্রাউন্ড এফেক্ট।'
  },
  {
    id: 'screenshot-3-lyrics',
    title: 'Live Synced Lyrics',
    titleBn: 'লাইভ সিঙ্কড লিরিক্স',
    category: 'players',
    url: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/fastlane/metadata/android/en-US/images/phoneScreenshots/screenshot_3.jpg',
    subtitle: 'Word-by-Word & AI Translation',
    subtitleBn: 'শব্দে শব্দে ও এআই অনুবাদ',
    description: 'Real-time syllable highlighting, AI lyrics translation, and romanization supported via BetterLyrics & SimpMusic.',
    descriptionBn: 'রিয়েল-টাইম শব্দে শব্দে কারাওকে হাইলাইট, এআই লিরিক্স অনুবাদ এবং রোমানাইজেশন।'
  },
  {
    id: 'screenshot-4-library',
    title: 'Music Library',
    titleBn: 'মিউজিক লাইব্রেরি',
    category: 'music',
    url: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/fastlane/metadata/android/en-US/images/phoneScreenshots/screenshot_4.jpg',
    subtitle: 'Playlists & Local Songs',
    subtitleBn: 'প্লেলিস্ট ও লোকাল গান',
    description: 'Seamlessly merges your signed-in YouTube Music playlists, liked songs, and offline local device files.',
    descriptionBn: 'ইউটিউব মিউজিক প্লেলিস্ট, পছন্দ করা গান এবং ডিভাইসের লোকাল গান একসাথে।'
  },
  {
    id: 'screenshot-5-search',
    title: 'Instant Search',
    titleBn: 'তাৎক্ষণিক সার্চ',
    category: 'video',
    url: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/fastlane/metadata/android/en-US/images/phoneScreenshots/screenshot_5.jpg',
    subtitle: 'Fast Catalog & Recognition',
    subtitleBn: 'দ্রুত ক্যাটালগ ও মিউজিক রেকগনিশন',
    description: 'Search tracks, albums, artists, or identify songs playing in the room around you.',
    descriptionBn: 'গান, অ্যালবাম ও শিল্পী সার্চ করুন অথবা চারপাশের গান রেকগনাইজ করুন।'
  },
  {
    id: 'screenshot-6-stats',
    title: 'Listening Stats',
    titleBn: 'শোনার পরিসংখ্যান',
    category: 'subscriptions',
    url: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/fastlane/metadata/android/en-US/images/phoneScreenshots/screenshot_6.jpg',
    subtitle: 'Play Counts & Insights',
    subtitleBn: 'প্লে সংখ্যা ও বিশদ তথ্য',
    description: 'Detailed on-device metrics for top tracks, listened artists, streaks, and Last.fm scrobbling.',
    descriptionBn: 'টপ ট্র্যাক, শিল্পী এবং লাস্ট.এফএম স্ক্রবলিংসহ বিস্তারিত পরিসংখ্যান।'
  },
  {
    id: 'screenshot-7-artist',
    title: 'Artist Discography',
    titleBn: 'শিল্পী ডিসকোগ্রাফি',
    category: 'music',
    url: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/fastlane/metadata/android/en-US/images/phoneScreenshots/screenshot_7.jpg',
    subtitle: 'Complete Catalogs & Singles',
    subtitleBn: 'সম্পূর্ণ ক্যাটালগ ও একক গান',
    description: 'Rich artist bio, popular releases, featured playlists, and radio queue launching.',
    descriptionBn: 'শিল্পীর বিস্তারিত তথ্য, জনপ্রিয় গান, অ্যালবাম এবং রেডিও কিউ।'
  },
  {
    id: 'screenshot-8-album',
    title: 'Album View',
    titleBn: 'অ্যালবাম ভিউ',
    category: 'players',
    url: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/fastlane/metadata/android/en-US/images/phoneScreenshots/screenshot_8.jpg',
    subtitle: 'Hi-Res Art & Tracklist',
    subtitleBn: 'হাই-রেজ আর্ট ও ট্র্যাকলিস্ট',
    description: 'Crystal-clear album artwork with lossless FLAC options and track duration metadata.',
    descriptionBn: 'উচ্চমানের অ্যালবাম আর্ট, ফ্ল্যাক অডিও কোয়ালিটি এবং ট্র্যাকলিস্ট তথ্য।'
  },
  {
    id: 'screenshot-9-year',
    title: 'Year in Music',
    titleBn: 'ইয়ার ইন মিউজিক',
    category: 'settings',
    url: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/fastlane/metadata/android/en-US/images/phoneScreenshots/screenshot_9.jpg',
    subtitle: 'Personalized Annual Recap',
    subtitleBn: 'ব্যক্তিগত বার্ষিক রিক্যাপ',
    description: 'Beautiful animated overview of your musical journey, favorite genres, and top discoveries.',
    descriptionBn: 'আপনার সঙ্গীত যাত্রার মনোমুগ্ধকর অ্যানিমেটেড বার্ষিক রিক্যাপ।'
  }
];

export const PLAYER_STYLES: PlayerStyle[] = [
  {
    id: 'classic',
    name: 'Classic Modern',
    nameBn: 'ক্লাসিক মডার্ন',
    tagline: 'Refined Essential Controls',
    taglineBn: 'মার্জিত প্রয়োজনীয় কন্ট্রোল',
    description: 'The definitive daily music interface with smooth waveform timeline and quick transport controls.',
    descriptionBn: 'প্রতিদিনের গান শোনার জন্য মসৃণ টাইমলাইন ও দ্রুত নেভিগেশন সুবিধা।',
    screenshotUrl: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/fastlane/metadata/android/en-US/images/phoneScreenshots/screenshot_2.jpg',
    accentColor: '#6366f1',
    features: ['EBU R128 Loudness Normalization', 'Dynamic Palette Accent', 'Smooth Waveform Scrubber']
  },
  {
    id: 'lyrics-focused',
    name: 'Synced Lyrics View',
    nameBn: 'সিঙ্কড লিরিক্স ভিউ',
    tagline: 'Karaoke Letter-by-Letter',
    taglineBn: 'কারাওকে শব্দে শব্দে রূপ',
    description: 'Word-by-word synchronized lyrics with real-time translation and romanization powered by BetterLyrics.',
    descriptionBn: 'বেটারলিরিক্স চালিত শব্দে শব্দে সিঙ্কড লিরিক্স ও এআই অনুবাদ ভিউ।',
    screenshotUrl: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/fastlane/metadata/android/en-US/images/phoneScreenshots/screenshot_3.jpg',
    accentColor: '#ec4899',
    features: ['Word-by-word highlight', 'AI Translation support', 'Romanization enabled']
  },
  {
    id: 'material-expressive',
    name: 'Material 3 Expressive',
    nameBn: 'ম্যাটেরিয়াল ৩ এক্সপ্রেসাইভ',
    tagline: 'Adaptive Color Physics',
    taglineBn: 'এডাপ্টিভ কালার ফিজিক্স',
    description: 'Extracts real-time color tokens directly from album art to dynamically theme every surface.',
    descriptionBn: 'অ্যালবাম আর্ট থেকে রিয়েল-টাইম কালার টোকেন নিয়ে সম্পূর্ণ ইন্টারফেস রাঙিয়ে তোলে।',
    screenshotUrl: 'https://raw.githubusercontent.com/cognitiveshadows03/LunarTune/main/fastlane/metadata/android/en-US/images/phoneScreenshots/screenshot_8.jpg',
    accentColor: '#8b5cf6',
    features: ['Monochrome & FLAC badges', 'Dolby/Dirac EQ quick toggle', 'Spring physics transitions']
  }
];

export const DOWNLOAD_OPTIONS: DownloadOption[] = [
  {
    abi: 'arm64-v8a',
    label: 'arm64-v8a Recommended',
    labelBn: 'arm64-v8a প্রস্তাবিত',
    recommended: true,
    filename: 'LunarTune-arm64-v8a.apk',
    fileSize: '19.8 MB',
    downloadUrl: 'https://github.com/cognitiveshadows03/LunarTune/releases/latest',
    targetDevice: 'Modern 64-bit phones - all devices released since 2017. Highest speed & lowest battery consumption.',
    targetDeviceBn: '২০১৭ সালের পর তৈরি প্রায় সব আধুনিক ৬৪-বিট ফোনের জন্য সেরা ও দ্রুততম।'
  },
  {
    abi: 'universal',
    label: 'Universal APK',
    labelBn: 'ইউনিভার্সাল APK',
    recommended: false,
    filename: 'LunarTune-universal.apk',
    fileSize: '34.2 MB',
    downloadUrl: 'https://github.com/cognitiveshadows03/LunarTune/releases/latest',
    targetDevice: 'Contains both 64-bit and 32-bit architectures. Recommended if you are unsure which ABI your phone uses.',
    targetDeviceBn: 'সব ডিভাইসে চলে। আপনার ফোনের প্রসেসর সম্পর্কে নিশ্চিত না থাকলে এটি ডাউনলোড করুন।'
  },
  {
    abi: 'armeabi-v7a',
    label: 'armeabi-v7a 32-bit',
    labelBn: 'armeabi-v7a ৩২-বিট',
    recommended: false,
    filename: 'LunarTune-armeabi-v7a.apk',
    fileSize: '17.4 MB',
    downloadUrl: 'https://github.com/cognitiveshadows03/LunarTune/releases/latest',
    targetDevice: 'Legacy 32-bit devices and older budget Android phones running Android 8.0+.',
    targetDeviceBn: 'পুরোনো ৩২-বিট প্রসেসরযুক্ত অ্যান্ড্রয়েড ফোনের জন্য উপযুক্ত।'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    icon: 'Radio',
    title: 'Ad-Free Background Playback',
    titleBn: 'বিজ্ঞাপনবিহীন ব্যাকগ্রাউন্ড প্লেব্যাক',
    description: 'Uninterrupted music streaming with the screen off or while using other apps. Zero quota limits and zero subscription fees.',
    descriptionBn: 'স্ক্রিন বন্ধ রেখে বা অন্য অ্যাপ ব্যবহারের সময়ও নিরবচ্ছিন্নভাবে গান উপভোগ করুন।',
    tag: 'Playback'
  },
  {
    icon: 'ShieldCheck',
    title: 'Privacy-Focused & Fast',
    titleBn: 'গোপনীয় ও সুপার ফাস্ট',
    description: 'Built for high performance with instant startup. Works fully logged out or with YouTube Music accounts via encrypted credentials.',
    descriptionBn: 'কোনো অ্যাকাউন্ট ছাড়াই বা একাধিক ইউটিউব অ্যাকাউন্ট দিয়ে সুরক্ষিতভাবে ব্যবহারযোগ্য।',
    tag: 'Privacy'
  },
  {
    icon: 'Sparkles',
    title: 'Material 3 Expressive Design',
    titleBn: 'ম্যাটেরিয়াল ৩ এক্সপ্রেসাইভ ডিজাইন',
    description: 'Fluid Material Design 3 interface with album-art powered dynamic color palettes and responsive layouts across all screen sizes.',
    descriptionBn: 'অ্যালবাম আর্ট অনুযায়ী স্বয়ংক্রিয় কালার থিমিং এবং আধুনিক ম্যাটেরিয়াল ৩ ইন্টারফেস।',
    tag: 'Design'
  },
  {
    icon: 'Mic2',
    title: 'Live Synced & AI Lyrics',
    titleBn: 'লাইভ সিঙ্কড ও এআই লিরিক্স',
    description: 'Syllable-by-syllable real-time karaoke lyrics highlighting, romanization, and AI-assisted lyrics translation powered by BetterLyrics.',
    descriptionBn: 'শব্দে শব্দে কারাওকে লিরিক্স এবং বেটারলিরিক্স চালিত এআই অনুবাদ ও রোমানাইজেশন।',
    tag: 'Lyrics'
  },
  {
    icon: 'Layers',
    title: '9 Player Styles & 8 Backgrounds',
    titleBn: '৯টি প্লেয়ার স্টাইল ও ৮টি ব্যাকগ্রাউন্ড',
    description: 'Switch between 9 distinct player layouts and 8 ambient background styles to match your aesthetic preferences.',
    descriptionBn: 'আপনার পছন্দ অনুযায়ী ৯টি ভিন্ন প্লেয়ার ডিজাইন এবং ৮টি ব্যাকগ্রাউন্ড শৈলীর মাঝে নির্বাচন করুন।',
    tag: 'Customization'
  },
  {
    icon: 'FastForward',
    title: 'Dolby & Dirac Equalizer Presets',
    titleBn: 'ডলবি ও ডিরাক ইকুয়ালাইজার প্রিসেট',
    description: 'Integrated EBU R128 loudness normalization, tempo & pitch controls, seamless crossfade, and spatial audio support from Vivi Music.',
    descriptionBn: 'ইবিইউ লাউডনেস নরমালাইজেশন, টেম্পো ও পিচ নিয়ন্ত্রণ এবং প্রিমিয়াম ইকুয়ালাইজার প্রিসেট।',
    tag: 'Audio'
  },
  {
    icon: 'Users',
    title: 'Spotify Playlist Import & Sync',
    titleBn: 'স্পটিফাই প্লেলিস্ট ইমপোর্ট ও সিঙ্ক',
    description: 'Migrate your Spotify playlists effortlessly. Includes Last.fm scrobbling, ListenBrainz sync, and Discord Rich Presence integration.',
    descriptionBn: 'স্পটিফাই প্লেলিস্ট সরাসরি ইম্পোর্ট করুন এবং লাস্ট.এফএম ও ডিসকর্ড স্ট্যাটাস সিঙ্ক করুন।',
    tag: 'Sync & Social'
  },
  {
    icon: 'Download',
    title: 'Local Music & Offline Cache',
    titleBn: 'লোকাল মিউজিক ও অফলাইন ক্যাশ',
    description: 'Plays device-stored local audio tracks alongside YouTube streaming with smart caching for instant playback.',
    descriptionBn: 'ডিভাইসের নিজস্ব লোকাল গান বাজানো এবং স্মার্ট ক্যাশিংয়ের মাধ্যমে দ্রুত প্লেব্যাক সুবিধা।',
    tag: 'Storage'
  },
  {
    icon: 'Film',
    title: 'Monochrome Lossless FLAC Source',
    titleBn: 'মনোক্রোম লসলেস ফ্ল্যাক অডিও',
    description: 'Optional support for Monochrome lossless FLAC streaming for audiophiles seeking true studio-quality sound resolution.',
    descriptionBn: 'সত্যিকারের স্টুডিও কোয়ালিটির জন্য অপশনাল মনোক্রোম লসলেস FLAC স্ট্রিমিং সাপোর্ট।',
    tag: 'Audiophile'
  }
];
