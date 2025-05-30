import Link from "next/link";

import { Button } from "./ui/button";



// components

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container max-auto flex justify-between items-center">
            {/* LOGO */}
            <Link href="/">

            <h1 className="text-4xl font-semibold">
                Youness Bilgui <span className="text-accent">.</span>
            </h1>
            </Link>

            {/* DESKTOP NEV & Hire Me Button*/}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="/contact">
                <Button>Hire Me</Button>
                </Link>
            </div>

            {/* MOBILE NAV */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
            

            
        </div>
    </header>
  );
}

export default Header