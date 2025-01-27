import { kfVersion } from "@/data";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar px-5 border-b">
            <div className="flex-1">
                <Link href="/" className="lg:text-2xl text-lg font-semibold">
                    Koffee UI 2
                </Link>
                <div className="lg:block text-xs ms-3 text-gray-500 sm:hidden">
                    V{kfVersion}
                </div>
            </div>
            <div className="flex-none">
                <ul className="px-3 menu-horizontal gap-3">
                    <li>
                        <div className="kf-dropdown">
                            <button type="button">More</button>
                            <div className="kf-dropdown-content">
                                <Link className="kf-link" href="/components">Components</Link>
                                <a href="https://github.com/kevinhellos/koffee-ui2" target="_blank" className="kf-link">
                                    Github
                                </a>
                            </div>
                        </div>
                    </li>
                    {/* <li><a className="kf-link">Releases</a></li> */}
                    <li>
                        <Link className="kf-link" href="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;