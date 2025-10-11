// app/Experience/page.tsx
import Image from "next/image";
import Link from "next/link";

type Exp = {
  company: string;
  role: string;
  period: string;           // e.g. "Jun. 2025 – Present"
  location?: string;
  bullets: string[];        // 职责/成果要点
  tech?: string[];          // 标签（可选）
  link?: string;            // 公司站点/案例链接（可选）
  logo?: string;            // 小 Logo 的站点路径（可选，如 "/express-repair.png"）
};

const experiences: Exp[] = [
  {
    company: "Express Repair",
    role: "Web Developer",
    period: "06.2025 - Present",
    location: "Canberra, Australia",
    bullets: [
      "Built the company website end-to-end (IA, UI, performance)",
      "Designed and implemented a customer booking system",
      "Added an online live-chat support system to improve response time",
      "Integrated Google Maps (Places/Embed) to show location and live Google reviews",
      "Optimized SEO (meta/OG, sitemap, structured data) and performed regular maintenance",
    ],
    tech: ["WordPress", "CSS", "JavaScript", "Live Chat", "Google Maps", "SEO"],
    link: "https://expressrepairact.com.au/",
    // 如需显示 Logo：把图片放到 public/ 下，然后写成以 / 开头的路径
    logo: "/companies/express-logo.webp",
  },

  {
    company:"Dub Dub Data",
    role: "Digital Marketing & Data Analyst Intern",
    period: "06.2025 - 07.2025 (2-week virtual internship)",
    location: "Remote, Australia",
    bullets: [
  "Delivered a concise competitor/market review and strategy brief aligned to client objectives.",
  "Synthesized public signals into actionable recommendations on messaging, segmentation, and digital visibility."
],
    tech: ["Excel", "Data Analysis", "Reporting", "Market Research", "Competitor Analysis", "Stakeholder Communication"],
    logo: "/companies/DubDubData.png",
  },

  {
  company: "ANU Tech Launcher",
  role: "Full-stack Developer",
  period: "06.2024 - 06.2025 (Semester project)",
  location: "Canberra, Australia",
  bullets: [
    "Built an interactive installation that responds to audience input, with a JavaScript UI and a Node.js bridge to a MicroPython microcontroller.",
    "Programmed the microcontroller (MicroPython) to read sensors and drive LEDs/actuators; defined a simple message protocol for reliable, low-latency control.",
    "Implemented the integration layer in Node.js (event loop, serial/WebSocket messaging) and structured the codebase with Git feature branches and code reviews.",
    "Worked in Scrum: sprint planning, stand-ups, backlog grooming, and stakeholder demos; incorporated feedback into iterative releases.",
  ],
  tech: ["JavaScript", "Node.js", "MicroPython", "Sensors/Actuators", "Scrum", "Agile", "Git", "Stakeholder Communication"],
  logo: "/companies/TechLauncher.png"
},
  

  {
  company: "ByteDance(Tiktok/Douyin)",
  role: "E-commerce Business Analyst",
  period: "08.2022 - 04.2023",
  location: "Shanghai, China",
  bullets: [
    "Analyzed TikTok Mall user behavior and platform metrics to surface product-performance gaps and growth opportunities.",
    "Built and maintained merchant/category KPI dashboards (Excel & internal BI), establishing a weekly reporting cadence.",
    "Segmented users by behavior/engagement and led the end-to-end design and rollout of a new product-operations strategy; authored SOPs and standardized workflows to improve iteration speed and cross-team alignment.",
    "Coordinated with Product, R&D, and Operations to prioritize data-informed features and experiments.",
    "Contributed to the department achieving Top-1 GMV with data-backed recommendations."
  ],
  tech: ["Business Analysis", "Excel", "Internal BI", "User Segmentation", "SOP/Operations", "Cross-functional collaboration"],
  logo: "/companies/Douyin.png",
},

{
  company: "MINISO",
  role: "E-commerce Business Analyst",
  period: "07.2021 - 09.2021",               
  location: "Guangzhou, China",         
  bullets: [
    "Performed market, competitor, and customer-review analysis to identify product gaps, positioning, and pricing benchmarks.",
    "Built demand forecasts and trend trackers to inform the product roadmap and launch calendar.",
    "Translated product and consumer data (sales, search, reviews, clickstream) into actionable insights for assortment, pricing, and digital campaigns.",
    "Supported new product launches by defining target segments, success metrics, and channel/creative recommendations for digital campaigns.",
    "Delivered concise dashboards and readouts that accelerated data-informed decisions across product and marketing."
  ],
  tech: ["Excel", "Python", "Competitive Analysis", "Cross-functional collaboration"],
  logo: "/companies/Miniso.png"
}


];

export const metadata = {
  title: "Experience",
  description: "Work & project experience of Catherine Wang",
};

// 可选的小标题行： </Experience> + 渐变分割线（不需要就删掉调用处）
function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="font-mono text-sm opacity-70">&lt;/{children}&gt;</span>
      {/* <span className="h-px flex-1 bg-gradient-to-r from-pink-300/60 via-sky-300/60 to-transparent dark:from-pink-400/40 dark:via-sky-400/40" /> */}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-black/10 dark:border-white/10 px-2 py-1 text-xs">
      {children}
    </span>
  );
}

function ExperienceItem(e: Exp) {
  return (
    <li className="relative border-l border-neutral-200 pl-6 dark:border-neutral-800">
      {/* 时间线小圆点 */}
      <span className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-neutral-900 dark:bg-neutral-200" />

      {/* 整条经历：两列 grid（左 1fr，右固定宽度） */}
      <div className="md:grid md:grid-cols-[minmax(0,1fr)_240px] md:gap-x-6 md:items-start">
        {/* 左列：明确放到第1行第1列 */}
        <div className="min-w-0 md:col-start-1 md:row-start-1">
          <h3 className="text-xl md:text-2xl font-semibold leading-tight">
            {e.role} <span className="opacity-60">·</span> {e.company}
          </h3>

          <div className="mt-1 text-sm opacity-70">
            {e.period}
            {e.location ? ` · ${e.location}` : ""}
            {e.link ? (
              <>
                {" "}
                ·{" "}
                <Link
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  Go to the website :)
                </Link>
              </>
            ) : null}
          </div>

          <ul className="mt-3 list-disc pl-5 space-y-2 text-[15px] md:text-base">
            {e.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          {e.tech?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {e.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 dark:border-white/10 px-2 py-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {/* 右列：logo —— 明确放到第1行第2列，并固定在右上角 */}
        {e.logo ? (
          <Link
            href={e.link || "#"}
            target={e.link ? "_blank" : "_self"}
            className="hidden md:block md:col-start-2 md:row-start-1 md:place-self-start md:justify-self-end"
          >
            <div className="relative w-[200px] h-[100px] xl:w-[220px] xl:h-[110px]">
              <Image
                src={e.logo}
                alt={e.company}
                fill
                className="object-contain rounded-lg border border-black/10 dark:border-white/10 shadow-sm"
                sizes="(min-width:1280px) 220px, (min-width:768px) 200px, 0px"
              />
            </div>
          </Link>
        ) : null}
      </div>
    </li>
  );
}



export default function ExperiencePage() {
  return (
    <section>

      <h1 className="mb-8 text-2xl font-medium">Experience</h1>
      <ol className="space-y-10">
        {experiences.map((e) => (
          <ExperienceItem key={`${e.company}-${e.period}`} {...e} />
        ))}
      </ol>
    </section>
  );
}
