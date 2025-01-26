"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ index, name, href, js} : { index: number, name: string, href: string, js: boolean}) {

  const pathname = usePathname();

  return (
    <li className={`px-3 py-2 ${pathname === "/components/"+ name.toLocaleLowerCase() ? "bg-slate-100 rounded-sm font-medium" : ""} `} key={index}>
      <Link className="w-full kf-link" href={href}>
        {name}
      </Link>
      {js && <span className="border text-xs px-3 py-1 rounded-full ms-2">JS required</span>}
    </li>
  )
}
