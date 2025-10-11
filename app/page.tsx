import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
        <Image
          src="/profile.jpg" 
          alt="Catherine Wang at Sydney Harbour"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          width={200}
          height={200}
          priority
        />
      

      <h1 className="mb-8 text-2xl font-medium">About Me</h1>
      

      <div className="prose prose-neutral dark:prose-invert">
        <p>Hi, I'm Catherine!</p>

        <p>
          I'm a Computer Science graduate from ANU with a strong interest in
          data analysis, business insights, and web development. Over the past
          few years, I've worked on projects ranging from building
          interactive art installations to redesigning real-world websites for
          local businesses. I've also gained hands-on experience in
          e-commerce analytics and forecasting, applying data-driven thinking to
          support smarter decisions. I thrive at the intersection of technology
          and user experience, whether it's turning raw data into
          meaningful stories, or crafting intuitive web interfaces that connect
          with people. I'm always eager to explore new technologies,
          collaborate with diverse teams, and create solutions that make a real
          impact. Feel free to browse my portfolio and reach out!
        </p>

        <ul>
          <li>
            <strong>What I do:</strong> Data Analysis, Business Analysis, Web Development.
          </li>
          <li>
            <strong>Stack:</strong> Python (Pandas/NumPy), SQL, Tableau,
            JavaScript/TypeScript, React/Next.js, HTML, CSS, P5.js, Java.
          </li>
          <li>
            <strong>Highlights:</strong> Boosted weekly GMV during a ByteDance
            project by identifying high-potential SKUs and optimizing campaign
            timing; Designed and developed an e-commerce booking system and an online customer-support (live chat) system.
          </li>
        </ul>

        <p>
          I'm exploring roles in <strong>data/business analytics</strong> and
          <strong> front-end/UX</strong>. Feel free to reach out via the icons below.
        </p>

        
      </div>
    </section>
  );
}
