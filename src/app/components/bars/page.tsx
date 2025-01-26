import Link from "next/link";
import type { Metadata } from "next"
 
export const metadata: Metadata = {
  title: "Components | Bars",
  description: "Bars component in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">
        <h1 className="text-4xl font-semibold mb-5">Bars</h1>
        <p className="mb-3">Variant:</p>

        <div className="block">
          <div className="kf-bar-red w-full mb-3">This is a red bar</div>
          <div className="kf-bar-green w-full mb-3">This is a red bar</div>
          <div className="kf-bar-blue w-full mb-3">This is a red bar</div>
          <div className="kf-bar-yellow w-full mb-3">This is a red bar</div>
        </div>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>
        <div className="mockup-code rounded-md bg-black">

          <code className="px-5 text-gray-400 text-sm block">
            {`<!-- Bar red -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"div   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-bar-red"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"This is a red bar"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"div"}</span>
            <span className="text-white">{">"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Bar green -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"div   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-bar-green"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"This is a green bar"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"div"}</span>
            <span className="text-white">{">"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Bar blue -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"div   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-bar-blue"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"This is a blue bar"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"div"}</span>
            <span className="text-white">{">"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Bar yellow -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"div   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-bar-yellow"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"This is a yellow bar"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"div"}</span>
            <span className="text-white">{">"}</span>
          </code>

        </div>

        <Link href="/components/buttons" className="mt-10 kf-btn-default block mb-10">
          Next: Buttons
        </Link>

      </div>
    )
  }
  