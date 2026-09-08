import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#07080d",
          backgroundImage:
            "radial-gradient(circle at 18% 8%, rgba(99,102,241,0.38) 0%, transparent 46%), radial-gradient(circle at 88% 82%, rgba(34,211,238,0.24) 0%, transparent 44%)",
          color: "#f2f4f9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #818cf8, #22d3ee)",
              color: "#08090f",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            BD
          </div>
          <div style={{ fontSize: 24, color: "#a2acc4" }}>{site.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ marginTop: 18, fontSize: 36, color: "#818cf8" }}>{site.role}</div>
          <div
            style={{
              marginTop: 22,
              fontSize: 27,
              color: "#a2acc4",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            IA aplicada · Arquitecturas RAG · APIs REST en Java, Go y Python · Optimización
            multiobjetivo
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {["LangChain", "FAISS", "FastAPI", "Spring Boot", "Next.js", "PostgreSQL", "Docker"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.05)",
                  fontSize: 22,
                  color: "#d7dce8",
                }}
              >
                {tag}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    size,
  );
}
