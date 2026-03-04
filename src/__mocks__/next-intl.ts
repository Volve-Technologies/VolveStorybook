export const useTranslations = (_namespace?: string) => {
  return (key: string, _values?: Record<string, unknown>) => key;
};

export const useLocale = () => 'en';
export const useNow = () => new Date();
export const useFormatter = () => ({
  dateTime: (date: Date) => date.toLocaleDateString(),
  number: (n: number) => n.toString(),
  relativeTime: (date: Date) => date.toLocaleDateString(),
});
