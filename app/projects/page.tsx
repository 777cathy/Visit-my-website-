// app/projects/page.tsx  —— Skills 页面
"use client";

import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTableau,
  SiMysql,
  SiPandas,
  SiGit,
  SiNodedotjs,
  SiAndroidstudio,
} from "react-icons/si";

// 小卡片
function SkillCard({
  icon: Icon,
  label,
  color,
}: { icon: IconType; label: string; color?: string }) {
  return (
    <div
      className="group relative rounded-2xl bg-white dark:bg-neutral-900/60 
                 shadow-sm ring-1 ring-black/5 dark:ring-white/10
                 p-5 flex items-center justify-center
                 transition hover:shadow-md hover:-translate-y-0.5"
      title={label} // 简单做法：浏览器原生 tooltip
    >
      <Icon
        className="text-3xl md:text-4xl"
        style={color ? { color } : undefined}
      />
      {/* 自定义气泡（如果你想比原生更好看） */}
      <div className="pointer-events-none absolute -bottom-9 opacity-0 group-hover:opacity-100 
                      bg-black text-white text-xs px-2 py-1 rounded-md transition">
        {label}
      </div>
    </div>
  );
}

// 数据配置：给每个图标一个品牌色（可按需改）
const LANGUAGES = [
  { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { label: "Java", icon: FaJava, color: "#007396" },
  { label: "Python", icon: SiPython, color: "#3776AB" },
  { label: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { label: "CSS3", icon: SiCss3, color: "#1572B6" },
];

const FRONTEND = [
  { label: "React", icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { label: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
];

const DATA = [
  { label: "Pandas", icon: SiPandas, color: "#150458" },
  { label: "Tableau", icon: SiTableau, color: "#E97627" },
  { label: "MySQL", icon: SiMysql, color: "#4479A1" },
];

const TOOLING = [
  { label: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { label: "Git", icon: SiGit, color: "#F05032" },
  { label: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
];

function Section({
  title,
  items,
}: {
  title: string;
  items: { label: string; icon: IconType; color?: string }[];
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xs tracking-wider text-neutral-500 dark:text-neutral-400">
        {title}
      </h2>
      <div
        className="grid gap-4 md:gap-6
                   grid-cols-[repeat(auto-fit,minmax(72px,1fr))]"
      >
        {items.map((it) => (
          <SkillCard key={it.label} icon={it.icon} label={it.label} color={it.color} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <section className="space-y-10 md:space-y-12">
      <h1 className="mb-8 text-2xl font-medium">Skills</h1>

      <Section title="LANGUAGES" items={LANGUAGES} />
      <Section title="FRONTEND" items={FRONTEND} />
      <Section title="DATA / ANALYTICS" items={DATA} />
      <Section title="TOOLING" items={TOOLING} />
    </section>
  );
}
