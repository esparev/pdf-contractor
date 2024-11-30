import { useQuery } from '@tanstack/react-query';
import { getDictionary } from '@app/app/dictionaries';
import { Locale } from '@app/i18n';

export const useGetDictionary = (lang: Locale) => {
  return useQuery({ queryKey: ['dictionary', lang], queryFn: () => getDictionary(lang) });
};
