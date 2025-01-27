import Link from "next/link";
import type { Metadata } from "next"
 
export const metadata: Metadata = {
  title: "Components | Inputs",
  description: "Inputs component in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">
        <h1 className="text-4xl font-semibold mb-5">Inputs</h1>
        <p className="mb-3">The <span className="font-medium">.kf-input</span> class can be applied in many elements (input, select, textarea, etc...)</p>

        <div className="block">
          <input type="text" className="kf-input block mb-3" placeholder="Enter name"/>
          <select className="kf-input mb-3">
            <option value="">Choose option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>
        <div className="mockup-code rounded-md bg-black">

          <code className="px-5 text-gray-400 text-sm block">
            {`<!-- Input -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"input   "}</span>
            <span className="text-yellow-400">{"type"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"text"  `}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-input"  `}</span>
            <span className="text-yellow-400">{"placeholder"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"Enter name"  `}</span>
            <span className="text-white">{"/>"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Select -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"select   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-input"`}</span>
            <span className="text-white">{">"}</span><br />
            <code className="px-5 text-gray-400 text-sm mt-5">{`<!-- Rest of the code -->`}</code><br />
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"select"}</span>
            <span className="text-white">{">"}</span>
          </code>

        </div>

        <Link href="/components/links" className="mt-10 kf-btn-default block mb-10">
          Next: Links
        </Link>

      </div>
    )
  }
  