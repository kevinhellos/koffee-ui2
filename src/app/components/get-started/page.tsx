import Link from "next/link";
import type { Metadata } from "next"
import { components } from "@/data";
 
export const metadata: Metadata = {
  title: "Get started",
  description: "Get started using Koffee UI 2",
}

export default function page() {
  return (
    <div className="mt-5">
      <h1 className="text-4xl font-semibold mb-5">Get started</h1>
      <div className="kf-bar-yellow mb-3">
        Ensure you have setup{" "}
        <a className="underline" href="https://tailwindcss.com/" target="_blank">
          Tailwind CSS
        </a>{" "}
        for your project.
      </div>
      <ol className="list-decimal ms-5">
        <li>
          Add the <span className="font-medium">koffee-ui2.css</span> file into
          your project first.
        </li>
        <li>Start using the class name on your elements</li>
      </ol>

      <Link href="/components/bars" className="mt-10 kf-btn-default block mb-10">
        Next: Bars
      </Link>
    </div>
  );
}
