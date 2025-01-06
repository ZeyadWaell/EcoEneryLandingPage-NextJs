export type LanguageCode = 
  | 'en' // English
  | 'ar' // Arabic
  | 'es' // Spanish
  | 'fr' // French
  | 'de' // German
  | 'zh' // Chinese
  | 'ja' // Japanese
  | 'ko' // Korean
  | 'ru' // Russian
  | 'hi' // Hindi
  | 'pt' // Portuguese
  | 'tr'; // Turkish

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
}