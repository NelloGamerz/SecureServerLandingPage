import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const alt = "VilSend — device-to-device file transfer for teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#030407",
          padding: "72px",
          color: "#EEF2F8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#1558C9",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 34, letterSpacing: 2 }}>{SITE_NAME}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.1 }}>Move files faster.</div>
          <div style={{ fontSize: 46, lineHeight: 1.2, color: "#D4FF24" }}>
            Device to device. Encrypted end to end.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#8B94A3",
            letterSpacing: 1,
          }}
        >
          {SITE_URL.replace("https://", "")}
        </div>
      </div>
    ),
    size
  );
}
