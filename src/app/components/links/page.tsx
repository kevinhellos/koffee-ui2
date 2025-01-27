import Link from "next/link";
import type { Metadata } from "next"
 
export const metadata: Metadata = {
  title: "Components | Links",
  description: "Links component in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">
        <h1 className="text-4xl font-semibold mb-5">Links</h1>
        <p className="mb-3">Variant:</p>

        <div className="flex gap-3">
          <a href="#" className="kf-link-default">Default</a>
          <a href="#" className="kf-link-plain">Plain</a>
        </div>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>
        <div className="mockup-code rounded-md bg-black">

          <code className="px-5 text-gray-400 text-sm block">
            {`<!-- Link default -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"a   "}</span>
            <span className="text-yellow-400">{"href"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"#"  `}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{'"'}</span>
            <span className="text-green-400">{`kf-link-default"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"Default"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"a"}</span>
            <span className="text-white">{">"}</span>
          </code>
          <br />

          <code className="px-5 text-gray-400 text-sm block">
            {`<!-- Link plain -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"a   "}</span>
            <span className="text-yellow-400">{"href"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"#"  `}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{'"'}</span>
            <span className="text-green-400">{`kf-link-plain"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"Plain"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"a"}</span>
            <span className="text-white">{">"}</span>
          </code>

        </div>

        <Link href="/components/pagination" className="mt-10 kf-btn-default block mb-10">
          Next: Pagination
        </Link>

      </div>
    )
  }
  