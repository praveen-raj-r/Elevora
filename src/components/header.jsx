import { Link } from "react-router-dom";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Header() {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" className="h-20" alt="Hirrd Logo" />
        </Link>
        {/* <Button variant="outline">Login</Button> */}

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </>
  );
}

export default Header;
