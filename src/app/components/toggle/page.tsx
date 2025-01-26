import Link from "next/link";
import type { Metadata } from "next"
 
export const metadata: Metadata = {
  title: "Components | Toggle",
  description: "Toggle component in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">
        <h1 className="text-4xl font-semibold mb-5">Toggle</h1>
        <p className="mb-3">Toggle component only comes in 1 variant</p>

        <div className="block">
          <label className="kf-toggle">
            <input type="checkbox" className="peer" defaultValue="" />
            <div className="peer peer-checked:after:translate-x-8 peer-checked:after:border-white peer-checked:bg-black"></div>
          </label>
        </div>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>
        <div className="mockup-code rounded-md bg-black">

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Toggle -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"label   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-toggle"`}</span>
            <span className="text-white">{">"}</span><br />

            <code className="px-5 text-sm block">
              <span className="text-white">{"<"}</span>
              <span className="text-red-400">{"input   "}</span>
              <span className="text-yellow-400">{"type"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"checkbox"  `}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"kf-input"  `}</span>
              <span className="text-yellow-400">{"defaultValue"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`""  `}</span>
              <span className="text-white">{"/>"}</span><br />

              <span className="text-white">{"<"}</span>
              <span className="text-red-400">{"div   "}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"peer peer-checked:after:translate-x-8 peer-checked:after:border-white peer-checked:bg-black"`}</span>
              <span className="text-white">{">"}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"div"}</span>
              <span className="text-white">{">"}</span>
            </code>

            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"label"}</span>
            <span className="text-white">{">"}</span>
          </code>

        </div>

        <Link href="/components/upload-file" className="mt-10 kf-btn-default block mb-10">
          Next: Upload File
        </Link>

      </div>
    )
  }
  