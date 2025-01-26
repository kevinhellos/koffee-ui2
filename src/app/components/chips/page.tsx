import Link from "next/link";
import type { Metadata } from "next"
 
export const metadata: Metadata = {
  title: "Components | Chips",
  description: "Chips component in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">
        <h1 className="text-4xl font-semibold mb-5">Chips</h1>
        <p className="mb-3">Variant:</p>

        <div className="inline">
          <span className="kf-chip-default me-2">Default</span>
          <span className="kf-chip-black me-2">Black</span>
          <span className="kf-chip-red me-2">Danger</span>
        </div>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>
        <div className="mockup-code rounded-md bg-black">

          <code className="px-5 text-gray-400 text-sm block">
            {`<!-- Chip default -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"span   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-chip-default"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"Default"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"span"}</span>
            <span className="text-white">{">"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Chip black -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"span   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-chip-black"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"Black"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"span"}</span>
            <span className="text-white">{">"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Chip red -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"span   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-chip-red"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"Red"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"span"}</span>
            <span className="text-white">{">"}</span>
          </code>

        </div>

        <Link href="/components/dialog" className="mt-10 kf-btn-default block mb-10">
          Next: Dialog
        </Link>

      </div>
    )
  }
  