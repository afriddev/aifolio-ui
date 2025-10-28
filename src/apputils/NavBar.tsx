/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { AnimateWithType } from "@/apputils/MotionUtils";

function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef<any>(null);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function handleNavigate(path: any) {
    navigate(path);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleOutsideClick(event: any) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <header className="w-full sticky bg-background flex items-center justify-center top-0 z-[200] h-[10vh]">
      <AnimateWithType type="smoothFade" className="px-5 lg:px-20 py-4 w-full flex items-center justify-between">
        <div
          onClick={() => handleNavigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <AnimateWithType type="scaleIn">
            <img src="/home/logo-1.png" className="w-48" alt="Logo" />
          </AnimateWithType>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <AnimateWithType type="smoothFade">
            <div onClick={() => handleNavigate("/")} className="font-medium hover:bg-muted rounded px-4 py-2 cursor-pointer transition">
              Docs
            </div>
          </AnimateWithType>
          <AnimateWithType type="smoothFade">
            <div onClick={() => handleNavigate("/about")} className="font-medium hover:bg-muted rounded px-4 py-2 cursor-pointer transition">
              About Us
            </div>
          </AnimateWithType>
          <AnimateWithType type="smoothFade">
            <div onClick={() => handleNavigate("/pricing")} className="font-medium hover:bg-muted rounded px-4 py-2 cursor-pointer transition">
              Pricing
            </div>
          </AnimateWithType>
          <AnimateWithType type="smoothFade">
            <div onClick={() => handleNavigate("/models")} className="font-medium hover:bg-muted rounded px-4 py-2 cursor-pointer transition">
              Models
            </div>
          </AnimateWithType>
        </div>

        <div className="hidden lg:flex gap-4">
          <AnimateWithType type="scaleIn">
            <Button variant="default" onClick={() => handleNavigate("/contact")}>Contact Us</Button>
          </AnimateWithType>
          <AnimateWithType type="scaleIn">
            <Button variant="default" onClick={() => handleNavigate("/login")}>Login</Button>
          </AnimateWithType>
        </div>

        <AnimateWithType type="smoothFade" className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </AnimateWithType>
      </AnimateWithType>

      <div
        ref={sidebarRef}
        className={`fixed top-[10vh] left-0 h-[90vh] w-64 bg-background shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-[201]`}
      >
        <div className="flex flex-col p-4 gap-4">
          <AnimateWithType type="pulse" >
            <div onClick={() => handleNavigate("/")} className="font-medium hover:bg-muted rounded px-4 py-2 cursor-pointer transition">
              Docs
            </div>
          </AnimateWithType>
          <AnimateWithType type="pulse" >
            <div onClick={() => handleNavigate("/about")} className="font-medium hover:bg-muted rounded px-4 py-2 cursor-pointer transition">
              About Us
            </div>
          </AnimateWithType>
          <AnimateWithType type="pulse" >
            <div onClick={() => handleNavigate("/pricing")} className="font-medium hover:bg-muted rounded px-4 py-2 cursor-pointer transition">
              Pricing
            </div>
          </AnimateWithType>
          <AnimateWithType type="pulse" >
            <div onClick={() => handleNavigate("/models")} className="font-medium hover:bg-muted rounded px-4 py-2 cursor-pointer transition">
              Models
            </div>
          </AnimateWithType>
          <AnimateWithType type="scaleIn">
            <Button variant="default" onClick={() => handleNavigate("/contact")}>Contact Us</Button>
          </AnimateWithType>
          <AnimateWithType type="scaleIn">
            <Button variant="default" onClick={() => handleNavigate("/login")}>Login</Button>
          </AnimateWithType>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 md:hidden z-[200]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default NavBar;
