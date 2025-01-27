import Link from "next/link";
import type { Metadata } from "next"
 
export const metadata: Metadata = {
  title: "Components | Form",
  description: "Form component in Koffee UI 2",
}

export default function page() {
    return (
      <div className="mt-5">
        <h1 className="text-4xl font-semibold mb-5">Form</h1>
        <p className="mb-3">Form component only comes in 1 variant. Form comes with predefined classes for validation.</p>

        <form className="kf-form max-w-md">
          <h2 className="text-2xl mb-3">Login</h2>
          <span className="text-sm text-gray-500">Please sign in to continue</span>
          <input type="text" className="w-full mt-3 kf-form-error" placeholder="Email" />
          <span className="kf-form-validation mb-5">Email is required</span>

          <input type="password" className="w-full kf-form-error" placeholder="Password" />
          <span className="kf-form-validation mb-5">Password is required</span>
          <button className="kf-btn-black">Submit</button>
        </form>

        <h2 className="text-2xl font-semibold mt-5">Usage</h2>
        <span className="block text-sm text-gray-500 mb-5">Note: ensure Tailwind CSS has been setup</span>
        <div className="mockup-code rounded-md bg-black">

          <code className="px-5 text-gray-400 text-sm block">
            {`<!-- Form -->`}
          </code>
          <code className="px-5 text-sm block">
            <span className="text-white">{"<"}</span>
            <span className="text-red-400">{"form   "}</span>
            <span className="text-yellow-400">{"className"}</span>
            <span className="text-white">{"="}</span>
            <span className="text-green-400">{`"kf-form max-w-m"`}</span>
            <span className="text-white">{">"}</span>
            <br />

              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"h2   "}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"text-2xl mb-3"`}</span>
              <span className="text-white">{">"}</span>
              <span className="text-white">{"Login"}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"h2"}</span>
              <span className="text-white">{">"}</span>
              <br />

              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"span   "}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"text-sm text-gray-500"`}</span>
              <span className="text-white">{">"}</span>
              <span className="text-white">{"Please sign in to continue"}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"span"}</span>
              <span className="text-white">{">"}</span>
              <br />

              <br />
              <code className="px-5 text-gray-400 text-sm block">
                {`<!-- Apply kf-form-error on input field to indicate error -->`}
              </code>
              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"input   "}</span>
              <span className="text-yellow-400">{"type"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"text"  `}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              
              <span className="text-green-400">{`"w-full mt-3 kf-form-error"  `}</span>
              <span className="text-yellow-400">{"placeholder"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"Email"  `}</span>
              <span className="text-white">{"/>"}</span>
              <br />

              <br />
              <code className="px-5 text-gray-400 text-sm block">
                {`<!-- Apply kf-form-validation on span field to display error message -->`}
              </code>
              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"span   "}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"kf-form-validation mb-5"`}</span>
              <span className="text-white">{">"}</span>
              <span className="text-white">{"Email is required"}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"span"}</span>
              <span className="text-white">{">"}</span>
              <br />

              <br />
              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"input   "}</span>
              <span className="text-yellow-400">{"type"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"password"  `}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"w-full mt-3 kf-form-error"  `}</span>
              <span className="text-yellow-400">{"placeholder"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"Password"  `}</span>
              <span className="text-white">{"/>"}</span>
              <br />

              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"span   "}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"kf-form-validation mb-5"`}</span>
              <span className="text-white">{">"}</span>
              <span className="text-white">{"Password is required"}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"span"}</span>
              <span className="text-white">{">"}</span>
              <br />

              <br />
              <span className="text-white ms-5">{"<"}</span>
              <span className="text-red-400">{"button   "}</span>
              <span className="text-yellow-400">{"className"}</span>
              <span className="text-white">{"="}</span>
              <span className="text-green-400">{`"kf-btn-black"`}</span>
              <span className="text-white">{">"}</span>
              <span className="text-white">{"Submit"}</span>
              <span className="text-white">{"</"}</span>
              <span className="text-red-400">{"button"}</span>
              <span className="text-white">{">"}</span>
              <br />

            <br />
            <span className="text-white">{"</"}</span>
            <span className="text-red-400">{"div"}</span>
            <span className="text-white">{">"}</span>
          </code>

        </div>

        <Link href="/components/inputs" className="mt-10 kf-btn-default block mb-10">
          Next: Inputs
        </Link>

      </div>
    )
  }
  