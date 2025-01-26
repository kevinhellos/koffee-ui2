import Link from "next/link";
import type { Metadata } from "next"
 
export const metadata: Metadata = {
  title: "Components | Card",
  description: "Card component in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">
        <h1 className="text-4xl font-semibold mb-5">Card</h1>
        <p className="mb-3">Card component only comes in 1 variant</p>

        <div className="kf-card">
          <span className="kf-card-title">Card title</span>
          <p className="kf-card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>
        <div className="mockup-code rounded-md bg-black">

          <code className="px-5 text-gray-400 text-sm block">
            {`<!-- Card -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"div   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-card"`}</span>
            <span className="text-white">{">"}</span>
            <br />

              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"div   "}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"kf-card-title"`}</span>
              <span className="text-white">{">"}</span>
              <span className="text-white">{"Card title"}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"div"}</span>
              <span className="text-white">{">"}</span>
              <br />

              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"div   "}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"kf-card-content"`}</span>
              <span className="text-white">{">"}</span>
              <span className="text-white">{"Lorem ipsum dolor sit amet consectetur adipisicing elit."}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"div"}</span>
              <span className="text-white">{">"}</span>

            <br />
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"div"}</span>
            <span className="text-white">{">"}</span>
          </code>

        </div>

        <Link href="/components/dialog" className="mt-10 kf-btn-default block mb-10">
          Next: Dialog
        </Link>

      </div>
    )
  }
  