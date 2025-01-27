import Link from "next/link";
import type { Metadata } from "next"
import Pageclient from "./page.client";
 
export const metadata: Metadata = {
  title: "Components | Collapsible",
  description: "Collapsible component in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">
        <h1 className="text-4xl font-semibold mb-5">Collapsible</h1>
        <p className="mb-3">Collapsible component only comes in 1 variant</p>

        <Pageclient/>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>
        <div className="mockup-code rounded-md bg-black">

        <code className="px-5 text-gray-400 text-sm block mt-5">
          {`<!-- Collapsible -->`}
        </code>
        <code className="px-5 text-sm block">
          <span className="text-white">{"<"}</span>
          <span className="text-red-400">{"div   "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-collapsible"`}</span>
          <span className="text-white">{">"}</span>
          
          <br />
          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"div  "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-collapsible-header"`}</span>
          <span className="text-white">{">"}</span>
          
          <br />
          <span className="text-white ms-10">Click me</span><br />
          <span className="text-white ms-5">{"</"}</span>
          <span className="text-red-400">{"div"}</span>
          <span className="text-white">{">"}</span>
          
          <br />

          <code className="px-5 text-gray-400 text-sm block mt-5">
          {`<!-- Adding the kf-collapsible-active class will show the collapsible -->`}
          </code>

          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"div  "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-collapsible-body kf-collapsible-active"`}</span>
          <span className="text-white">{">"}</span>
          
          <br />
          <span className="text-white ms-14">{"Lorem ipsum dolor sit amet consectetur adipisicing elit..."}</span> 
          <span className="text-white">{""}</span>
          
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

        <Link href="/components/colors" className="mt-10 kf-btn-default block mb-10">
          Next: Colors
        </Link>

      </div>
    )
  }
  