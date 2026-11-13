import { TEMPLATE_DOWNLOADS_ENABLED } from "@/lib/config";

export type TemplateDownload = {
  label: string;
  href: string;
  placeholder?: boolean;
};

/** Hide placeholder downloads until `NEXT_PUBLIC_TEMPLATE_DOWNLOADS=true`. */
export function getVisibleTemplateDownloads<T extends TemplateDownload>(
  downloads: T[],
): T[] {
  if (TEMPLATE_DOWNLOADS_ENABLED) {
    return downloads;
  }
  return downloads.filter((download) => !download.placeholder);
}
