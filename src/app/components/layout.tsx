import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {

    const components = [
        {
            name: "Overview",
            href: "/components",
            js: false
        },
        {
            name: "Bars",
            href: "/components/bars",
            js: false
        },
        {
            name: "Buttons",
            href: "/components/buttons",
            js: false
        },
        {
            name: "Card",
            href: "/components/card",
            js: false
        },
        {
            name: "Dialog",
            href: "/components/dialog",
            js: true
        }
    ];

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-white">
                <label
                    htmlFor="my-drawer-2"
                    className="kf-btn-default drawer-button lg:hidden flex ms-10 mt-5"
                >
                    <Menu size={18} className="me-2" />
                    Menu
                </label>
                <div className="px-10">{children}</div>
            </div>
            <div className="drawer-side">
                <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
                ></label>
                <ul className="border-r bg-white border-t-0 text-base-content min-h-full w-64 p-4">
                    {components.map((c, index: number) => (
                        <Sidebar
                            key={index}
                            index={index}
                            name={c.name}
                            href={c.href}
                            js={c.js}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}