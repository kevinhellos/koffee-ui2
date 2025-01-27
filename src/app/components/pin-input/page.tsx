import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components | Pin input",
  description: "Pin input component in Koffee UI 2",
};

export default function page() {
  return (
    <div className="mt-5">
      <h1 className="text-4xl font-semibold mb-5">Pin input</h1>
      <p className="mb-3">Pin input component only comes in 1 variant</p>

      <div className="kf-pin-input">
        <input type="text" maxLength={1} pattern="[0-9]*(.[0-9]+)?"/>
        <input type="password" maxLength={1} pattern="[0-9]*(.[0-9]+)?"/>
        <input type="password" maxLength={1} pattern="[0-9]*(.[0-9]+)?"/>
        <input type="password" maxLength={1} pattern="[0-9]*(.[0-9]+)?"/>
      </div>

      <h2 className="text-2xl font-semibold mt-5">Usage</h2>
      <span className="block text-sm text-gray-500 mb-5">
        Note: ensure Tailwind CSS has been setup
      </span>
      <div className="mockup-code rounded-md bg-black">
        <code className="px-5 text-gray-400 text-sm block mt-5">
          {`<!-- Pin input -->`}
        </code>
        <code className="px-5 text-sm block">
          <span className="text-white">{"<"}</span>
          <span className="text-red-400">{"div   "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-pin-input"`}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"input   "}</span>
          <span className="text-yellow-400">{"type"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"password"  `}</span>
          <span className="text-yellow-400">{"maxLength"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-blue-400">{"{"}</span>
          <span className="text-white">{"1"}</span>
          <span className="text-blue-400">{"}"}</span>
          <span className="text-white">{"/>"}</span>
          <br />

          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"input   "}</span>
          <span className="text-yellow-400">{"type"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"password"  `}</span>
          <span className="text-yellow-400">{"maxLength"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-blue-400">{"{"}</span>
          <span className="text-white">{"1"}</span>
          <span className="text-blue-400">{"}"}</span>
          <span className="text-white">{"/>"}</span>
          <br />

          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"input   "}</span>
          <span className="text-yellow-400">{"type"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"password"  `}</span>
          <span className="text-yellow-400">{"maxLength"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-blue-400">{"{"}</span>
          <span className="text-white">{"1"}</span>
          <span className="text-blue-400">{"}"}</span>
          <span className="text-white">{"/>"}</span>
          <br />

          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"input   "}</span>
          <span className="text-yellow-400">{"type"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"password"  `}</span>
          <span className="text-yellow-400">{"maxLength"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-blue-400">{"{"}</span>
          <span className="text-white">{"1"}</span>
          <span className="text-blue-400">{"}"}</span>
          <span className="text-white">{"/>"}</span>
          <br />

          <span className="text-white">{"</"}</span>
          <span className="text-red-400">{"div"}</span>
          <span className="text-white">{">"}</span>
        </code>
      </div>

      <Link
        href="/components/radio"
        className="mt-10 kf-btn-default block mb-10"
      >
        Next: Radio
      </Link>
    </div>
  );
}
