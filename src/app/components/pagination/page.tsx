import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components | Pagination",
  description: "Pagination component in Koffee UI 2",
};

export default function page() {
  return (
    <div className="mt-5">
      <h1 className="text-4xl font-semibold mb-5">Pagination</h1>
      <p className="mb-3">Pagination component only comes in 1 variant</p>

      <div className="kf-pagination">
        <button type="button" className="kf-btn-default">
          Previous
        </button>
        <button type="button" className="kf-btn-default kf-page-active">
          1
        </button>
        <button type="button" className="kf-btn-default">
          2
        </button>
        <button type="button" className="kf-btn-default">
          3
        </button>
        <button type="button" className="kf-btn-default">
          Next
        </button>
      </div>

      <h2 className="text-2xl font-semibold mt-5">Usage</h2>
      <span className="block text-sm text-gray-500 mb-5">
        Note: ensure Tailwind CSS has been setup
      </span>
      <div className="mockup-code rounded-md bg-black">
        <code className="px-5 text-gray-400 text-sm block mt-5">
          {`<!-- Pagination -->`}
        </code>
        <code className="px-5 text-sm block">
          <span className="text-white">{"<"}</span>
          <span className="text-red-400">{"div   "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-pagination"`}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"button   "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-btn-default"`}</span>
          <span className="text-white">{">"}</span>
          <span className="text-white">{"Previous"}</span>
          <span className="text-white">{"</"}</span>
          <span className="text-red-400">{"button"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"button   "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-btn-default kf-page-active"`}</span>
          <span className="text-white">{">"}</span>
          <span className="text-white">{"1"}</span>
          <span className="text-white">{"</"}</span>
          <span className="text-red-400">{"button"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"button   "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-btn-default"`}</span>
          <span className="text-white">{">"}</span>
          <span className="text-white">{"2"}</span>
          <span className="text-white">{"</"}</span>
          <span className="text-red-400">{"button"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"button   "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-btn-default"`}</span>
          <span className="text-white">{">"}</span>
          <span className="text-white">{"3"}</span>
          <span className="text-white">{"</"}</span>
          <span className="text-red-400">{"button"}</span>
          <span className="text-white">{">"}</span>
          <br />

          <span className="text-white ms-5">{"<"}</span>
          <span className="text-red-400">{"button   "}</span>
          <span className="text-yellow-400">{"className"}</span>
          <span className="text-white">{"="}</span>
          <span className="text-green-400">{`"kf-btn-default"`}</span>
          <span className="text-white">{">"}</span>
          <span className="text-white">{"Next"}</span>
          <span className="text-white">{"</"}</span>
          <span className="text-red-400">{"button"}</span>
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
