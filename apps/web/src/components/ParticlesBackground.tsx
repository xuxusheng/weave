import { memo, useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export type ParticlePreset =
  | "links"
  | "firefly"
  | "bubbles"
  | "sea-anemone"
  | "fountain"
  | "triangles"
  | "hexagons"
  | "none";

const availablePresets: ParticlePreset[] = [
  "links",
  "firefly",
  "bubbles",
  "sea-anemone",
  "fountain",
  "triangles",
  "hexagons",
];

export function getRandomPreset(): ParticlePreset {
  return availablePresets[Math.floor(Math.random() * availablePresets.length)];
}

const presets = {
  none: null,
  links: {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 60,
        density: { enable: true, area: 800 },
      },
      color: {
        value: ["#6366f1", "#8b5cf6", "#a78bfa"],
      },
      shape: { type: "circle" as const },
      opacity: {
        value: { min: 0.3, max: 0.6 },
        animation: { enable: true, speed: 0.5, minimumValue: 0.1 },
      },
      size: {
        value: { min: 1, max: 3 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#6366f1",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none" as const,
        outModes: "bounce" as const,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" as const },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.4 } },
      },
    },
    detectRetina: true,
  },
  firefly: {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 40,
        density: { enable: true, area: 800 },
      },
      color: {
        value: ["#fbbf24", "#f59e0b", "#fcd34d"],
      },
      shape: { type: "circle" as const },
      opacity: {
        value: { min: 0.1, max: 0.8 },
        animation: {
          enable: true,
          speed: 1.5,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 2, max: 5 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: { min: 0.3, max: 1 },
        direction: "none" as const,
        random: true,
        outModes: "bounce" as const,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" as const },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    detectRetina: true,
  },
  bubbles: {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 30,
        density: { enable: true, area: 800 },
      },
      color: {
        value: ["#06b6d4", "#22d3ee", "#67e8f9"],
      },
      shape: { type: "circle" as const },
      opacity: {
        value: { min: 0.2, max: 0.5 },
      },
      size: {
        value: { min: 5, max: 15 },
      },
      move: {
        enable: true,
        speed: { min: 0.5, max: 1.5 },
        direction: "top" as const,
        straight: false,
        outModes: "out" as const,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "bubble" as const },
      },
      modes: {
        bubble: {
          distance: 200,
          size: 20,
          duration: 0.4,
          opacity: 0.8,
        },
      },
    },
    detectRetina: true,
  },
  "sea-anemone": {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 50,
        density: { enable: true, area: 800 },
      },
      color: {
        value: ["#ec4899", "#f472b6", "#f9a8d4"],
      },
      shape: { type: "circle" as const },
      opacity: {
        value: { min: 0.3, max: 0.7 },
      },
      size: {
        value: { min: 2, max: 4 },
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none" as const,
        outModes: "bounce" as const,
        path: {
          enable: true,
          delay: { value: 0 },
          options: {
            size: 5,
            draw: false,
            increment: 0.001,
          },
        },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "attract" as const },
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          speed: 1,
        },
      },
    },
    detectRetina: true,
  },
  fountain: {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 40,
        density: { enable: true, area: 800 },
      },
      color: {
        value: ["#10b981", "#34d399", "#6ee7b7"],
      },
      shape: { type: "circle" as const },
      opacity: {
        value: { min: 0.3, max: 0.6 },
        animation: { enable: true, speed: 0.3, minimumValue: 0.1 },
      },
      size: {
        value: { min: 2, max: 5 },
      },
      move: {
        enable: true,
        speed: { min: 1, max: 2 },
        direction: "top" as const,
        straight: false,
        outModes: {
          default: "destroy" as const,
          top: "none" as const,
        },
      },
    },
    emitters: {
      direction: "top" as const,
      rate: {
        quantity: 2,
        delay: 0.1,
      },
      position: {
        x: 50,
        y: 100,
      },
      size: {
        width: 50,
        height: 0,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" as const },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    detectRetina: true,
  },
  triangles: {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 30,
        density: { enable: true, area: 800 },
      },
      color: {
        value: ["#8b5cf6", "#a78bfa", "#c4b5fd"],
      },
      shape: {
        type: "polygon" as const,
        polygon: { nb_sides: 3 },
      },
      opacity: {
        value: { min: 0.2, max: 0.5 },
      },
      size: {
        value: { min: 3, max: 8 },
      },
      links: {
        enable: true,
        distance: 120,
        color: "#8b5cf6",
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none" as const,
        outModes: "bounce" as const,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" as const },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.3 } },
      },
    },
    detectRetina: true,
  },
  hexagons: {
    fullScreen: { enable: false },
    particles: {
      number: {
        value: 25,
        density: { enable: true, area: 800 },
      },
      color: {
        value: ["#06b6d4", "#22d3ee", "#67e8f9"],
      },
      shape: {
        type: "polygon" as const,
        polygon: { nb_sides: 6 },
      },
      opacity: {
        value: { min: 0.2, max: 0.5 },
      },
      size: {
        value: { min: 4, max: 10 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#06b6d4",
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none" as const,
        outModes: "bounce" as const,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "attract" as const },
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          speed: 0.8,
        },
      },
    },
    detectRetina: true,
  },
} satisfies Record<string, unknown>;

interface ParticlesBackgroundProps {
  preset: ParticlePreset;
  className?: string;
}

const ParticlesBackgroundImpl = memo(function ParticlesBackground({
  preset,
  className,
}: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    void initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  if (!init || preset === "none" || !presets[preset]) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className={className}
      particlesLoaded={particlesLoaded}
      options={presets[preset] as never}
    />
  );
});

export { ParticlesBackgroundImpl as ParticlesBackground };

export const presetLabels: Record<ParticlePreset, string> = {
  none: "无效果",
  links: "Links（粒子连线）",
  firefly: "Firefly（萤火虫）",
  bubbles: "Bubbles（气泡）",
  "sea-anemone": "Sea Anemone（海葵）",
  fountain: "Fountain（喷泉）",
  triangles: "Triangles（三角形）",
  hexagons: "Hexagons（六边形）",
};
