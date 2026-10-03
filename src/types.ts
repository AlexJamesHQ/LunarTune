export type Language = 'en' | 'bn';

export interface ScreenshotItem {
  id: string;
  title: string;
  titleBn?: string;
  category: string;
  url: string;
  subtitle: string;
  subtitleBn?: string;
  description: string;
  descriptionBn?: string;
}

export interface PlayerStyle {
  id: string;
  name: string;
  nameBn?: string;
  tagline: string;
  taglineBn?: string;
  description: string;
  descriptionBn?: string;
  screenshotUrl: string;
  accentColor: string;
  features: string[];
}

export interface DownloadOption {
  abi: string;
  label: string;
  labelBn?: string;
  recommended?: boolean;
  filename: string;
  fileSize: string;
  downloadUrl: string;
  targetDevice: string;
  targetDeviceBn?: string;
  version?: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  titleBn?: string;
  description: string;
  descriptionBn?: string;
  tag: string;
}
