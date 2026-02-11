import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import ModeToggle from "./ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { BellIcon, Ghost, HomeIcon, User2Icon } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/nextjs";

async function DesktopNavbar() {
  const user = await currentUser();
  return (
    <div className="hidden md:flex items-center space-x-4">
      <ModeToggle />

      <Button variant={"ghost"}>
        <Link href={"/"} className="flex items-center gap-2">
          <HomeIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Home</span>

        </Link>
      </Button>

      {user ? (
        <>
          <Button variant={"ghost"} >
            <Link href={"/notifications"} className="flex items-center gap-2">
              <BellIcon className="w-4 h-4" />
              <span className="hidden lg:inline">Notifications</span>
            </Link>
          </Button>
          <Button variant={"ghost"} className="flex items-center gap-2">
            <Link
              href={`/profile/${user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]}`}
              className="flex items-center gap-2"
            >
              <User2Icon className="w-4 h-4" />
              <span className="hidden lg:inline">Profile</span>
            </Link>
          </Button>
          <UserButton/>
        </>
      ) : (
        <>
          <SignInButton mode="modal">
            <Button variant={"default"}>Sign In</Button>
          </SignInButton>
        </>
      )}
    </div>
  );
}

export default DesktopNavbar;
