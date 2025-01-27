import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components | Radio",
  description: "Radio component in Koffee UI 2",
};

export default function page() {
  return (
    <div className="mt-5">
      <h1 className="text-4xl font-semibold mb-5">Radio</h1>
      <p className="mb-3">Radio component only comes in 1 variant</p>

      <div className="kf-radio-group">
        <div>
          <label className="kf-radio-label">
            <input type="radio" name="radio" defaultChecked={true} />
            <span>Option 1</span>
          </label>
          <label className="kf-radio-label">
            <input type="radio" name="radio" />
            <span>Option 2</span>
          </label>
          <label className="kf-radio-label">
            <input type="radio" name="radio" />
            <span>Option 3</span>
          </label>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-5">Usage</h2>
      <span className="block text-sm text-gray-500 mb-5">
        Note: ensure Tailwind CSS has been setup
      </span>
      <div className="mockup-code rounded-md bg-black">
        <code className="px-5 text-gray-400 text-sm block mt-5">
          {`<!-- Radio -->`}
        </code>
        <code className="px-5 text-sm block">
          <span className="text-white">{"<"}</span>
          <span className="text-red-400">{"div   "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-radio-group"`}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"div"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-10">{"<"}</span>
          <span className="text-red-400">{"label   "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-radio-label"  `}</span>
          <span className="text-yellow-400">{"defaultChecked"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-blue-400">{`{`}</span>
          <span className="text-white">{"true"}</span>
          <span className="text-blue-400">{`}`}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-16">{"<"}</span>
          <span className="text-red-400">{"input   "}</span>
          <span className="text-yellow-400">{"type"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"radio"  `}</span>
          <span className="text-yellow-400">{"name"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"radio"  `}</span>
          <span className="text-white">{"/>"}</span>
          <br />

          <span className="text-white ms-20">{"<"}</span>
          <span className="text-red-400">{"span"}</span>
          <span className="text-white">{">"}</span>
          Option 1
          <span className="text-white">{"</"}</span>
          <span className="text-red-400">{"span"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-10">{"</"}</span>
          <span className="text-red-400">{"label"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-5">{"</"}</span>
          <span className="text-red-400">{"div"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"div"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-10">{"<"}</span>
          <span className="text-red-400">{"label   "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-radio-label"`}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-16">{"<"}</span>
          <span className="text-red-400">{"input   "}</span>
          <span className="text-yellow-400">{"type"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"radio"  `}</span>
          <span className="text-yellow-400">{"name"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"radio"  `}</span>
          <span className="text-white">{"/>"}</span>
          <br />

          <span className="text-white ms-20">{"<"}</span>
          <span className="text-red-400">{"span"}</span>
          <span className="text-white">{">"}</span>
          Option 2
          <span className="text-white">{"</"}</span>
          <span className="text-red-400">{"span"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-10">{"</"}</span>
          <span className="text-red-400">{"label"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-5">{"</"}</span>
          <span className="text-red-400">{"div"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"div"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-10">{"<"}</span>
          <span className="text-red-400">{"label   "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-radio-label"`}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-16">{"<"}</span>
          <span className="text-red-400">{"input   "}</span>
          <span className="text-yellow-400">{"type"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"radio"  `}</span>
          <span className="text-yellow-400">{"name"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"radio"  `}</span>
          <span className="text-white">{"/>"}</span>
          <br />

          <span className="text-white ms-20">{"<"}</span>
          <span className="text-red-400">{"span"}</span>
          <span className="text-white">{">"}</span>
          Option 3
          <span className="text-white">{"</"}</span>
          <span className="text-red-400">{"span"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-10">{"</"}</span>
          <span className="text-red-400">{"label"}</span>
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

      <Link
        href="/components/toggle"
        className="mt-10 kf-btn-default block mb-10"
      >
        Next: Toggle
      </Link>
    </div>
  );
}
