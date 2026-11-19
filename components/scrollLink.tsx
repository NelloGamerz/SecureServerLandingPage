"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type ScrollLinkProps = ComponentProps<typeof Link>;

export function ScrollLink({ href, onClick, ...props }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    if (e.defaultPrevented) return;

    const hrefString = typeof href === "string" ? href : href.pathname ?? "";

    const hash = hrefString.includes("#")
      ? hrefString.substring(hrefString.indexOf("#"))
      : "";

    if (!hash) return;

    const target = document.querySelector(hash);

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}