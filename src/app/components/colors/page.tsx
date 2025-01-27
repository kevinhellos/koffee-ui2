import Link from "next/link";
import type { Metadata } from "next"
 
export const metadata: Metadata = {
  title: "Components | Colors",
  description: "Colors in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">
        <h1 className="text-4xl font-semibold mb-5">Colors</h1>
        <p className="mb-3">
          Koffee UI 2 comes with various predefined and preset colors. <br />
          These colors can be applied in elements by just adding the class <span className="font-medium">.kf-bg-{"<color>"}</span>
        </p>

        <div className="flex gap-3">
          <div className="kf-bg-red py-2 px-3 mb-3">This is a red div</div>
          <div className="kf-bg-green py-2 px-3 mb-3">This is a green div</div>
          <div className="kf-bg-blue py-2 px-3 mb-3">This is a blue div</div>
          <div className="kf-bg-yellow py-2 px-3 mb-3">This is a yellow div</div>
          <div className="kf-bg-purple py-2 px-3 mb-3">This is a purple div</div>
        </div>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>
        <div className="mockup-code rounded-md bg-black">

          <code className="px-5 text-gray-400 text-sm block">
            {`<!-- Bg red -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"div   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-bg-red"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"This is a red div"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"div"}</span>
            <span className="text-white">{">"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Bg green -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"div   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-bg-green"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"This is a green div"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"div"}</span>
            <span className="text-white">{">"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Bg blue -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"div   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-bg-blue"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"This is a blue div"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"div"}</span>
            <span className="text-white">{">"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Bg yellow -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"div   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-bg-yellow"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"This is a yellow div"}</span>
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"div"}</span>
            <span className="text-white">{">"}</span>
          </code>

          <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Bg purple -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"div   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-bg-purple"`}</span>
            <span className="text-white">{">"}</span>
            <span className="text-white">{"This is a purple div"}</span>
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
  