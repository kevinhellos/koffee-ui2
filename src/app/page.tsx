import { kfVersion } from "@/data";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center mt-[15vh]">

        <span className="kf-chip-default">
          version {kfVersion}
        </span>

        <h1 className="text-5xl font-semibold mt-5">
          Minimalist UI library
        </h1>
        <p className="mt-5 mb-5">
          Lightweight UI framework designed to streamline development of modern web interfaces. <br />
          Pre made styleable components built on top of <span className="font-semibold">Tailwind CSS</span>
        </p>

        <div className="justify-center flex">
          <Link href="/components"
            className="kf-btn-black mx-1"
          >
            Browse components
          </Link>

          <a 
            href="https://github.com/kevinhellos/koffee-ui2"
            target="_blank"
            className="kf-btn-default mx-1 flex"
          >
            <Github size={18} className="me-1"/>
            Github
          </a>
        </div>

      </div>
    </>
  );
}
