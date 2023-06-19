"use client";

import classNames from "@/utils/className";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, activeClassName, href, ...props }) => {
  const path = usePathname();
  const active = path.startsWith(href);
  const classes = classNames(props.className, active && activeClassName);

  if (classes) {
    props.className = classes;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
