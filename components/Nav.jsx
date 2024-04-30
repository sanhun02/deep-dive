"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";

const navList = [
  { name: "Home", path: "/" },
  { name: "Jobs", path: "/jobs" },
  { name: "Categories", path: "/categories" },
];

const Nav = ({ providers }) => {
  const pathName = usePathname();
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <header>
      <nav className="flex justify-between px-5 py-3  lg:px-12">
        <div>
          <p className="font-extrabold italic text-xl lg:text-2xl">DEEPDIVE</p>
        </div>

        {/* Mobile Nav */}
        <div className="flex relative lg:hidden">
          {toggleDropdown ? (
            <div className="flex flex-col">
              <div
                className="hover:cursor-pointer"
                onClick={() => setToggleDropdown(false)}
              >
                <Image
                  src={"/assets/icons/close.svg"}
                  alt="close menu"
                  width={30}
                  height={30}
                />
              </div>

              <div className="absolute -right-2 px-2 top-full w-[95vw] md:w-[97vw] bg-white-100 items-end mt-3 pb-4">
                <ul className="flex flex-col justify-end items-end gap-6 text-md">
                  {session?.user && (
                    <li className="font-medium text-primary cursor-pointer">
                      My Profile
                    </li>
                  )}

                  {navList.map((nav, i) => (
                    <Link
                      key={i}
                      href={`${nav.path}`}
                      onClick={() => setToggleDropdown(false)}
                    >
                      <li>{nav.name}</li>
                    </Link>
                  ))}

                  {session?.user ? (
                    <li
                      className="hover:cursor-pointer"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                    >
                      Log Out
                    </li>
                  ) : (
                    <>
                      {providers &&
                        Object.values(providers).map((provider, i) => (
                          <li
                            key={i}
                            className="font-medium text-primary cursor-pointer"
                            onClick={() => signIn(provider.id)}
                          >
                            Sign In
                          </li>
                        ))}
                    </>
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <Image
              src={"/assets/icons/menu.svg"}
              alt="menu"
              width={30}
              height={30}
              onClick={() => setToggleDropdown(true)}
            />
          )}
        </div>

        {/* Desktop Nav */}
        <div className="lg:flex hidden">
          <ul className="flex gap-14 text-lg">
            {navList.map((nav, i) => (
              <Link key={i} href={`${nav.path}`}>
                <li
                  className={
                    pathName === nav.path
                      ? "text-primary font-medium cursor-pointer"
                      : "opacity-70 hover:opacity-100 cursor-pointer"
                  }
                >
                  {nav.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {session?.user ? (
          <div className="lg:flex hidden">
            <button
              className="text-white-100 text-lg bg-primary px-4 py-1.5 cursor-pointer rounded-md hover:opacity-90"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider, i) => (
                <div key={i} className="lg:flex hidden">
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="text-white-100 text-md font-medium cursor-pointer bg-primary px-4 py-1.5 rounded-md hover:opacity-90"
                  >
                    Sign In
                  </button>
                </div>
              ))}
          </>
        )}
      </nav>
    </header>
  );
};

export default Nav;
