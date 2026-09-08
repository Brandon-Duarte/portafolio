/**
 * Grafo decorativo de agentes interconectados para el hero.
 * Todo es SVG estatico + animaciones CSS: no necesita JavaScript en el cliente.
 */

const CX = 270;
const CY = 210;
const R = 126;
const ORBIT_R = 196;

type AgentNode = {
  id: string;
  label: string;
  angle: number;
  /** La etiqueta se ancla segun el lado del grafo para no pisar el nodo. */
  anchor: "start" | "middle" | "end";
  dx: number;
  dy: number;
};

const NODES: AgentNode[] = [
  { id: "embeddings", label: "Embeddings", angle: -90, anchor: "middle", dx: 0, dy: -30 },
  { id: "vector-store", label: "Vector store", angle: -18, anchor: "start", dx: 26, dy: 4 },
  { id: "llm", label: "LLM", angle: 54, anchor: "middle", dx: 0, dy: 36 },
  { id: "guardrails", label: "Guardrails", angle: 126, anchor: "middle", dx: 0, dy: 36 },
  { id: "retriever", label: "Retriever", angle: 198, anchor: "end", dx: -26, dy: 4 },
];

const r1 = (n: number) => Math.round(n * 10) / 10;

function polar(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: r1(CX + radius * Math.cos(rad)), y: r1(CY + radius * Math.sin(rad)) };
}

const points = NODES.map((node) => ({ ...node, ...polar(node.angle, R) }));

/** Radios de los nodos al orquestador. */
const spokes = points.map((p) => `M ${CX} ${CY} L ${p.x} ${p.y}`);

/** Arcos entre nodos consecutivos, curvados hacia afuera. */
const arcs = points.map((p, i) => {
  const next = points[(i + 1) % points.length];
  const nextAngle = i === points.length - 1 ? NODES[0].angle + 360 : NODES[i + 1].angle;
  const control = polar((NODES[i].angle + nextAngle) / 2, R * 1.2);
  return `M ${p.x} ${p.y} Q ${control.x} ${control.y} ${next.x} ${next.y}`;
});

export default function AgentNetwork() {
  return (
    <svg
      viewBox="0 0 540 440"
      role="img"
      aria-label="Diagrama de agentes de IA interconectados: embeddings, vector store, LLM, guardrails y retriever alrededor de un orquestador."
      className="h-auto w-full max-w-[540px]"
    >
      <defs>
        <linearGradient id="an-link" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent-2)" />
        </linearGradient>
        <radialGradient id="an-core-glow">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.32" />
          <stop offset="70%" stopColor="var(--accent)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Halo del nucleo */}
      <circle cx={CX} cy={CY} r="115" fill="url(#an-core-glow)" />

      {/* Orbita exterior en rotacion lenta */}
      <circle
        className="an-orbit"
        cx={CX}
        cy={CY}
        r={ORBIT_R}
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.2"
        strokeWidth="1"
        strokeDasharray="2 12"
      />

      {/* Malla entre agentes */}
      {arcs.map((d, i) => (
        <path
          key={`arc-${i}`}
          d={d}
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      ))}

      {/* Radios hacia el orquestador */}
      {spokes.map((d, i) => (
        <path
          key={`spoke-${i}`}
          d={d}
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      ))}

      {/* Pulsos de datos viajando por cada radio */}
      {spokes.map((d, i) => (
        <path
          key={`pulse-${i}`}
          className="an-flow"
          d={d}
          pathLength={100}
          fill="none"
          stroke="url(#an-link)"
          strokeWidth="1.6"
          strokeLinecap="round"
          style={{ animationDelay: `${i * 0.62}s` }}
        />
      ))}

      {/* Pulsos mas lentos por la malla exterior */}
      {arcs.map((d, i) => (
        <path
          key={`arc-pulse-${i}`}
          className="an-flow an-flow-slow"
          d={d}
          pathLength={100}
          fill="none"
          stroke="var(--accent-2)"
          strokeOpacity="0.8"
          strokeWidth="1.4"
          strokeLinecap="round"
          style={{ animationDelay: `${1.1 + i * 0.9}s` }}
        />
      ))}

      {/* Agentes */}
      {points.map((p, i) => (
        <g key={p.id}>
          <circle
            className="an-ping"
            cx={p.x}
            cy={p.y}
            r="17"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            style={{ animationDelay: `${i * 0.72}s` }}
          />
          <circle
            cx={p.x}
            cy={p.y}
            r="17"
            fill="var(--bg)"
            stroke="var(--accent)"
            strokeOpacity="0.45"
            strokeWidth="1"
          />
          <circle cx={p.x} cy={p.y} r="4" fill="var(--accent)" />
          <text
            x={p.x + p.dx}
            y={p.y + p.dy}
            textAnchor={p.anchor}
            className="fill-[var(--fg-subtle)] font-mono text-[11px]"
          >
            {p.label}
          </text>
        </g>
      ))}

      {/* Orquestador */}
      <circle
        className="an-core"
        cx={CX}
        cy={CY}
        r="42"
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      <circle
        cx={CX}
        cy={CY}
        r="34"
        fill="var(--bg)"
        stroke="var(--accent)"
        strokeOpacity="0.7"
        strokeWidth="1.2"
      />
      <text
        x={CX}
        y={CY + 4}
        textAnchor="middle"
        className="fill-[var(--accent)] font-mono text-[11px] tracking-[0.12em]"
      >
        AGENTE
      </text>
    </svg>
  );
}
