import Link from "next/link";
import type { Metadata } from "next"
import { FlaskConical } from "lucide-react";
import Pageclient from "./page.client";
 
export const metadata: Metadata = {
  title: "Components | Select",
  description: "Select component in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">

        <div className="kf-bar-purple mb-5">
        <span className="font-medium flex">
          <FlaskConical size={18} className="me-2 mb-3"/>
          Experimental
        </span>
          <ul className="list-disc ms-5">
            <li>Select component is curently in experimental mode</li>
          </ul>
        </div>

        <h1 className="text-4xl font-semibold mb-5">Select</h1>
        <p className="mb-3">Select component only comes in 1 variant</p>

        <Pageclient/>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>

        <a href="https://github.com/kevinhellos/koffee-ui2/blob/main/experimental/select.md" className="kf-btn-black" target="_blank">
          View codes in Github
        </a>


        <Link href="/components/form" className="mt-10 kf-btn-default block mb-10">
          Next: Form
        </Link>

      </div>
    )
  }
  