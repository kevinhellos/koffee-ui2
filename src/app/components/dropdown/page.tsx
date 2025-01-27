import Link from "next/link";
import type { Metadata } from "next"
 
export const metadata: Metadata = {
  title: "Components | Dropdown",
  description: "Dropdown component in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">
        <h1 className="text-4xl font-semibold mb-5">Dropdown</h1>
        <p className="mb-3">Dropdown component only comes in 1 variant</p>

        <div className="kf-dropdown">
          <button className="kf-dropdown-btn">Dropdown</button>
          <div className="kf-dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>
        <div className="mockup-code rounded-md bg-black">

          <code className="px-5 text-gray-400 text-sm block">
            {`<!-- Dropdown -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"div   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-dropdown"`}</span>
            <span className="text-white">{">"}</span>
            <br />

            <span className="text-white ms-5">{"<"}</span>
            <span className="text-red-400">{"button   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-dropdown-btn"`}</span>
            <span className="text-white">{">Dropdown"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"button"}</span>
            <span className="text-white">{">"}</span>
            <br />

              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"div   "}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"kf-dropdown-content"`}</span>
              <span className="text-white">{">"}</span>
              <br />
              <span className="text-white ms-10">{"<"}</span>
              <span className="text-red-400">{"a   "}</span>
              <span className="text-yellow-400">{"href"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"#"`}</span>
              <span className="text-white">{">Link 1"}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"a"}</span>
              <span className="text-white">{">"}</span>
              <br />
              <span className="text-white ms-10">{"<"}</span>
              <span className="text-red-400">{"a   "}</span>
              <span className="text-yellow-400">{"href"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"#"`}</span>
              <span className="text-white">{">Link 2"}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"a"}</span>
              <span className="text-white">{">"}</span>
              <br />
              <span className="text-white ms-10">{"<"}</span>
              <span className="text-red-400">{"a   "}</span>
              <span className="text-yellow-400">{"href"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"#"`}</span>
              <span className="text-white">{">Link 3"}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"a"}</span>
              <span className="text-white">{">"}</span>
              <br />

              <span className="text-white ms-5">{"</"}</span>
              <span className="text-red-400">{"div"}</span>
              <span className="text-white">{">"}</span>
            <br />
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"div"}</span>
            <span className="text-white">{">"}</span>
          </code>

        </div>

        <Link href="/components/form" className="mt-10 kf-btn-default block mb-10">
          Next: Form
        </Link>

      </div>
    )
  }
  