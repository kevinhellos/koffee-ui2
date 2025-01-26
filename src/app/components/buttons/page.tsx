import Link from "next/link";
import type { Metadata } from "next"
 
export const metadata: Metadata = {
  title: "Components | Buttons",
  description: "Buttons component in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">
        <h1 className="text-4xl font-semibold mb-5">Buttons</h1>
        <p className="mb-3">Variant:</p>

        <div className="flex gap-3">
          <button className="kf-btn-plain">Plain</button>
          <button className="kf-btn-default">Default</button>
          <button className="kf-btn-black">Black</button>
        </div>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>
        <div className="mockup-code rounded-md bg-black">

          <code className="px-5 text-gray-400 text-sm block">
            {`<!-- Button Plain -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"button   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-btn-plain"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"Plain"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"button"}</span>
            <span className="text-white">{">"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Button default -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"button   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-btn-default"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"Default"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"button"}</span>
            <span className="text-white">{">"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Button black -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"button   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-btn-black"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"Black"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"button"}</span>
            <span className="text-white">{">"}</span>
          </code>

        </div>

        <Link href="/components/card" className="mt-10 kf-btn-default block mb-10">
          Next: Card
        </Link>

      </div>
    )
  }
  