import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar px-5 border-b">
            <div className="flex-1">
                <Link href="/" className="text-2xl font-semibold">
                    Koffee UI 2
                </Link>
            </div>
            <div className="flex-none">
                <ul className="px-3 menu-horizontal gap-3">
                    <li>
                        <Link className="kf-link" href="/components">Components</Link>
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