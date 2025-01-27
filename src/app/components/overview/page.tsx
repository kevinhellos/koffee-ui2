import Link from "next/link";
import type { Metadata } from "next"
import { components } from "@/data";
import { Lightbulb } from "lucide-react";
import Pageclient from "./page.client";
 
export const metadata: Metadata = {
  title: "Overview",
  description: "Koffee UI 2 components overview",
}

export default function page() {
  return (
    <div className="mt-5">
      <h1 className="text-4xl font-semibold mb-5">Overview</h1>
      <p>
        Koffee UI 2 provides many ready to use <u>class based</u> components.{" "}
        <br />
        These components can be customized by adding custom Tailwind classes in
        its className property.
      </p>

      <div className="kf-bar-blue mb-5 mt-5">
        <span className="font-medium flex"><Lightbulb size={18} className="me-2 mb-3"/>Tip</span>
        <ul className="list-disc ms-5">
          <li>The Koffee UI 2 Team recommends using a React based framework (Next JS, Remix, etc...) instead of vanilla HTML</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-5">Components</h2>
      <span className="block text-sm text-gray-500 mb-5">
        Available as of Jan 26 2025
      </span>
      <ul className="list-disc ms-5">
        {components.map((item, index) => (
          <li key={index}>
            {item.name}
          </li>
        ))}
      </ul>

      <Pageclient/>

      <Link href="/components/bars" className="mt-10 kf-btn-default block mb-10">
        Next: Bars
      </Link>
    </div>
  );
}
