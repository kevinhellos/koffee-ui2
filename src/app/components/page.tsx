import Bar from "@/koffee-ui2/components/Bar";
import Link from "next/link";
import type { Metadata } from "next"
 
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

      <h2 className="text-2xl font-semibold mt-5">Components</h2>
      <span className="block text-sm text-gray-500 mb-5">
        Available as of Jan 26 2025
      </span>
      <ul className="list-disc ms-5">
        <li>Bars</li>
        <li>Buttons</li>
        <li>Card</li>
        <li>Dialog</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-5">Getting started</h2>
      <Bar variant="yellow" className="w-fit">
        Ensure you have setup{" "}
        <a className="underline" href="https://tailwindcss.com/">
          Tailwind CSS
        </a>{" "}
        for your project.
      </Bar>
      <ol className="list-decimal ms-5">
        <li>
          Add the <span className="font-medium">koffee-ui2.css</span> file into
          your project first.
        </li>
        <li>Start using the class name on your elements</li>
      </ol>

      <Link href="/components/bars" className="mt-10 kf-btn-default block">
        Next: Bars
      </Link>
    </div>
  );
}
