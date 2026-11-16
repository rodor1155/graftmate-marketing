import { afterEach, describe, expect, it, vi } from "vitest";
import { ANALYTICS_CONSENT_STORAGE_KEY } from "./analyticsConsent";

const trackMock = vi.fn();

vi.mock("@vercel/analytics", () => ({
  track: (...args: unknown[]) => trackMock(...args),
}));

describe("trackAppStoreClick", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    trackMock.mockClear();
    vi.unstubAllGlobals();
  });

  it("does not send events when analytics consent is missing or denied", async () => {
    const { trackAppStoreClick } = await import("./trackAppStoreClick");

    const storage = new Map<string, string>();
    vi.stubGlobal("localStorage", {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => {
        storage.set(key, value);
      },
    });
    vi.stubGlobal("window", {
      location: { pathname: "/pricing" },
      localStorage: globalThis.localStorage,
    } as unknown as Window);

    trackAppStoreClick("pricing");
    storage.set(ANALYTICS_CONSENT_STORAGE_KEY, "denied");
    trackAppStoreClick("pricing");

    expect(trackMock).not.toHaveBeenCalled();
  });

  it("sends Vercel Analytics and GA4 when consent is granted", async () => {
    const { trackAppStoreClick } = await import("./trackAppStoreClick");
    const gtag = vi.fn();

    const storage = new Map<string, string>([
      [ANALYTICS_CONSENT_STORAGE_KEY, "granted"],
    ]);
    vi.stubGlobal("localStorage", {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => {
        storage.set(key, value);
      },
    });
    vi.stubGlobal("window", {
      location: { pathname: "/guides/how-to-write-a-quote" },
      localStorage: globalThis.localStorage,
      gtag,
    } as unknown as Window);

    trackAppStoreClick("guide-content");

    expect(trackMock).toHaveBeenCalledWith("app_store_click", {
      placement: "guide-content",
      page_path: "/guides/how-to-write-a-quote",
    });
    expect(gtag).toHaveBeenCalledWith("event", "app_store_click", {
      placement: "guide-content",
      page_path: "/guides/how-to-write-a-quote",
    });
  });
});