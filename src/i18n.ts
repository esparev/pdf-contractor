import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';
import { usePathname } from 'next/navigation';
import { match } from '@formatjs/intl-localematcher';
import { Locales } from '@app/types/i18n/i18n.definitions';

export const i18n = {
  defaultLocale: Locales.EN,
  locales: [Locales.EN, Locales.ES],
} as const;

export type Locale = (typeof i18n)['locales'][number];

/**
 * The function `getLocale` determines the preferred locale based on the request headers and available
 * locales.
 * @param {NextRequest} request - The `request` parameter in the `getLocale` function is of type
 * `NextRequest`. It is used to extract headers from the incoming request in order to determine the
 * preferred language/locale for the user. The function then uses the Negotiator library to parse the
 * headers and determine the best matching locale based on
 * @returns The function `getLocale` returns a string representing the locale based on the languages
 * extracted from the request headers using the Negotiator library. If a matching locale is found in
 * the provided list of locales (`i18n.locales`), that locale is returned. If no matching locale is
 * found, the default locale (`i18n.defaultLocale`) is returned.
 */
export function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(i18n.locales as unknown as string[]);
  const locale = match(languages, i18n.locales, i18n.defaultLocale);

  return locale;
}

export const useLocaleFromBrowser = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  return locale;
};
