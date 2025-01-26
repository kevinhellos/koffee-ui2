import type { Metadata } from "next"
 
export const metadata: Metadata = {
  title: "About",
  description: "About Koffee UI 2",
}

export default function page() {

  const creatorsAndContributors = [
    {
      name: "Kevin",
      role: "Creator",
      photoUrl: "https://avatars.githubusercontent.com/u/126497052",
      githubLink: "https://github.com/kevinhellos"
    }
  ]

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-semibold mb-5">About</h1>
      <p>
        Koffee UI is built with the goal of providing a simple and customizable component library. <br />
        {"It's"} designed to be easy to use, quick to setup, flexible, and scalable.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-5">Koffee UI 2 vs Koffee UI 1</h2>
      <p>
        Koffee UI 2 takes a major leap forward in adopting the industry leading Tailwind CSS <br /> instead of a custom written
        CSS in Koffee UI 1.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-5">Creator & Contributors</h2>
      <div className="flex justify-center">

        {creatorsAndContributors.map((user, index) => (
          <div className="mx-auto" key={index}>
            <div className="border bg-white px-5 py-3 rounded-md shadow-md">
              <a href={user.githubLink} target="_blank">
                <img 
                  src={user.photoUrl}
                  width={70} 
                  alt={user.photoUrl}
                  className="rounded-full mb-2"
                />
                <span className="block text-sm">{user.name}</span>
                <span className="block text-xs font-semibold">{user.role}</span>
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
