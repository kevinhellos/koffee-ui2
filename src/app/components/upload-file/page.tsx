import type { Metadata } from "next"
 
export const metadata: Metadata = {
  title: "Components | Upload File",
  description: "Upload File component in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">
        <h1 className="text-4xl font-semibold mb-5">Upload File</h1>
        <p className="mb-3">Upload File component only comes in 1 variant</p>

        <div className="kf-file">
          <label htmlFor="file">Upload file</label>
          <input type="file" name="file" id="file" />
        </div>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>
        <div className="mockup-code rounded-md bg-black">
        <code className="px-5 text-gray-400 text-sm block mt-5">
            {`<!-- Upload File -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"div   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-file"`}</span>
            <span className="text-white">{">"}</span>
            <br />

              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"label   "}</span>
              <span className="text-yellow-400">{"for"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"file"`}</span>
              <span className="text-white">{">"}</span>
              <span className="text-white">{"Upload file"}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"label"}</span>
              <span className="text-white">{">"}</span>
              <br />

              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"input   "}</span>
              <span className="text-yellow-400">{"type"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"file"   `}</span>
              <span className="text-yellow-400">{"name"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"file"   `}</span>
              <span className="text-yellow-400">{"id"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"file"   `}</span>
              <span className="text-white">{"/>"}</span>
              
            <br />
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"div"}</span>
            <span className="text-white">{">"}</span>
          </code>
        </div>

      </div>
    )
  }
  