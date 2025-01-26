// import Link from "next/link";
import type { Metadata } from "next"
import Bar from "@/koffee-ui2/components/Bar";
import Pageclient from "./page.client";
import { Lightbulb } from "lucide-react";
 
export const metadata: Metadata = {
  title: "Components | Dialog",
  description: "Dialof component in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">
        <h1 className="text-4xl font-semibold mb-5">Dialog</h1>
        <p className="mb-3">Dialof (also known as Modal) component only comes in 1 variant</p>

        <Pageclient/>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>

        <Bar variant="blue" className="mb-5">
          <span className="font-medium flex"><Lightbulb size={18} className="me-2 mb-3"/>Note:</span>
          <ul className="list-disc ms-5">
            <li>JavaScript is required to trigger Dialog</li>
            <li>For Next JS, the <span className="font-medium">{`"use client"`}</span> directive will be required as this needs to be a client component</li>
          </ul>
        </Bar>

        <div className="mockup-code rounded-md bg-black mb-10">

          <code className="px-5 text-gray-400 text-sm block">
            {`//  Dialog reference`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-purple-400">{"const "}</span>
            <span className="text-orange-400">{"dialogRef"}</span>
            <span className="text-cyan-400">{" = "}</span>
            <span className="text-blue-400">{"useRef"}</span>
            <span className="text-pink-400">{"<"}</span>
            <span className="text-yellow-400">{"HTMLDialogElement"}</span>
            <span className="text-pink-400">{">"}</span>
            <span className="text-pink-400">{"("}</span>
            <span className="text-orange-400">{"null"}</span>
            <span className="text-pink-400">{")"}</span>
            <span className="text-white">{";"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`// Showing the modal`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-red-400">{"dialogRef"}</span>
            <span className="text-white">{"?."}</span>
            <span className="text-red-400">{"current"}</span>
            <span className="text-white">{"?."}</span>
            <span className="text-blue-400">{"showModal"}</span>
            <span className="text-purple-400">{"()"}</span>
            <span className="text-white">{";"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`// Hiding the modal`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-red-400">{"dialogRef"}</span>
            <span className="text-white">{"?."}</span>
            <span className="text-red-400">{"current"}</span>
            <span className="text-white">{"?."}</span>
            <span className="text-blue-400">{"close"}</span>
            <span className="text-purple-400">{"()"}</span>
            <span className="text-white">{";"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Dialog -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"dialog   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-dialog"`}</span>
            <span className="text-white">{">"}</span>
            <br />

              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"div   "}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"kf-dialog-title"`}</span>
              <span className="text-white">{">"}</span>
              <span className="text-white">{"Dialog title"}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"div"}</span>
              <span className="text-white">{">"}</span>
              <br />

              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"p   "}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"mb-5"`}</span>
              <span className="text-white">{">"}</span>
              <span className="text-white">{"Lorem ipsum dolor sit amet consectetur adipisicing elit..."}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"p"}</span>
              <span className="text-white">{">"}</span>
              
              <code className="px-5 text-gray-400 text-sm block mt-5">{`<!-- Rest of the code -->`}</code>
            <br />
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"dialog"}</span>
            <span className="text-white">{">"}</span>
          </code>

        </div>

        {/* <Link href="/components/" className="mt-10 kf-btn-default block mb-10">
          Next:
        </Link> */}

      </div>
    )
  }
  