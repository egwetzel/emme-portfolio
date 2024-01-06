import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isHome }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {isHome ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:emmeportfolio@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")}>Home</Button>
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:emmeportfolio@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className={'header h-16 sticky top-0 z-10 bg-white'}>
        <div
          className={`mt-10 hidden flex-row items-center justify-between ${
            theme === "light" && "bg-white"
          } dark:text-white tablet:flex`}
        >
          <h1
            onClick={() => router.push("/")}
            className="font-medium cursor-pointer mob:p-2 laptop:p-0"
          >
            {name}
          </h1>
          {isHome ? (
            <div className="flex">
              <Button onClick={handleWorkScroll}>Work</Button>
              <Button onClick={handleAboutScroll}>About</Button>
              {showResume && (
                <Button onClick={() => router.push("/resume")} classes="first:ml-1">
                  Resume
                </Button>
              )}
              <Button onClick={() => window.open("mailto:emmeportfolio@gmail.com")}>
                Contact
              </Button>
            </div>
          ) : (
            <div className="flex">
              <Button onClick={() => router.push("/")}>Home</Button>
              {showResume && (
                <Button onClick={() => router.push("/resume")} classes="first:ml-1">
                  Resume
                </Button>
              )}
              <Button onClick={() => window.open("mailto:emmeportfolio@gmail.com")}>
                Contact
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
