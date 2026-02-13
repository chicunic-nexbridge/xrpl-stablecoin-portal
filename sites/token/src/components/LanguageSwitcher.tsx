import { useI18n } from "@/i18n";
import { LOCALE_LABELS, type Locale } from "@/i18n/config";

const locales = Object.keys(LOCALE_LABELS) as Locale[];

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
      className="h-8 rounded-md border border-input bg-transparent px-2 text-xs shadow-xs"
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {LOCALE_LABELS[l]}
        </option>
      ))}
    </select>
  );
}
