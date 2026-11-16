import { describe, expect, it } from "vitest";
import {
  APP_STORE_CLICK_EVENT,
  buildAppStoreClickEventProps,
  isAppStoreHref,
} from "./appStoreLink";
import { APP_STORE_URL } from "@/lib/config";

describe("appStoreLink", () => {
  it("uses a stable custom event name", () => {
    expect(APP_STORE_CLICK_EVENT).toBe("app_store_click");
  });

  it("builds event props with placement and page_path", () => {
    expect(buildAppStoreClickEventProps("hero", "/pricing")).toEqual({
      placement: "hero",
      page_path: "/pricing",
    });
  });

  it("recognises the configured App Store URL", () => {
    expect(isAppStoreHref(APP_STORE_URL)).toBe(true);
  });

  it("recognises legacy markdown App Store URLs for this app", () => {
    expect(
      isAppStoreHref(
        "https://apps.apple.com/gb/app/graftmate/id6811976725",
      ),
    ).toBe(true);
  });

  it("rejects other hosts and unrelated App Store listings", () => {
    expect(isAppStoreHref("https://example.com/app")).toBe(false);
    expect(
      isAppStoreHref("https://apps.apple.com/app/id1234567890"),
    ).toBe(false);
    expect(isAppStoreHref(undefined)).toBe(false);
  });
});