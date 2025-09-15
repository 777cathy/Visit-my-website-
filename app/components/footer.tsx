"use client";

import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/lib/config";

const YEAR = new Date().getFullYear();

function toHref(h?: string) {
  if (!h) return "";
  if (h.startsWith("http") || h.startsWith("mailto:")) return h;
  if (h.includes("@")) return `mailto:${h}`; 
  return h;
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href?: string;
  icon: React.ComponentType<any>;
  label: string;
}) {
  const finalHref = toHref(href);
  if (!finalHref) return null;

  const isMailto = finalHref.startsWith("mailto:");

  return (
    <a
      href={finalHref}
      aria-label={label}
      {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
      className="icon-btn"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.github} icon={FaGithub} label="GitHub" />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} label="Instagram" />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} label="LinkedIn" />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} label="Email" />
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      <a
        href={metaData.baseUrl || "/"}
        className="no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
      <SocialLinks />
    </small>
  );
}
