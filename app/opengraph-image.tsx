import { ImageResponse } from "next/og";

export const alt = "Meridian. Brand and web design for mortgage professionals.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f0f0f",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, color: "#e8e4da" }}>
          Meridian<span style={{ color: "#c9a961" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              color: "#e8e4da",
              lineHeight: 1.1,
              maxWidth: 920,
            }}
          >
            Brand and web design for mortgage professionals.
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#8a857a", marginTop: 28 }}>
            meridianmtg.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
