"use client";
import { useState } from "react";
import Link from "next/link";

// Define your navigation structure with custom styling for Sign In/Sign Up buttons
const navItems = [
  {
    label: "Feature",
    submenu: [
      {
        label: "PDF Tools",
        submenu: [
          { label: "Merge PDF", href: "/pdf/merge" },
          { label: "Split PDF", href: "/pdf/split" },
          { label: "Compress PDF", href: "/pdf/compress" },
        ],
      },
      {
        label: "Exam Resources",
        submenu: [
          { label: "Exam Preparation", href: "/exam/preparation" },
          { label: "Past Exam Papers", href: "/exam/pastpapers" },
          { label: "Study Guides", href: "/exam/studyguides" },
        ],
      },
      { label: "Future Modules", href: "/feature/future" },
    ],
  },
  { label: "About", href: "/about" },
  {
    label: "SignIn",
    href: "/signin",
    className:
      "px-4 py-2 rounded-sm text-blue-500 hover:bg-blue-50 hover:text-blue-600 transition duration-300 shadow-sm",
  },
  {
    label: "SignUp",
    href: "/signup",
    className:
      "px-4 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600 transition duration-300 shadow-sm",
  },
];

// ===== Desktop Menu Components =====

const DesktopMenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      {item.submenu ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {item.label}
          </button>
          {open && (
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1">
                {item.submenu.map((subItem, idx) =>
                  subItem.submenu ? (
                    <DesktopSubMenuItem key={idx} item={subItem} />
                  ) : (
                    <Link
                      key={idx}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.href}
          className={item.className ? item.className : "text-gray-700 hover:text-gray-900"}
        >
          {item.label}
        </Link>
      )}
    </div>
  );
};

const DesktopSubMenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center"
      >
        {item.label}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-full top-0 mt-0 ml-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
          <div className="py-1">
            {item.submenu.map((child, idx) => (
              <Link
                key={idx}
                href={child.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ===== Mobile Menu Components =====

const MobileMenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gray-200">
      {item.submenu ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex justify-between items-center"
          >
            {item.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {open && (
            <div className="pl-4">
              {item.submenu.map((subItem, idx) =>
                subItem.submenu ? (
                  <MobileSubMenuItem key={idx} item={subItem} />
                ) : (
                  <Link
                    key={idx}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {subItem.label}
                  </Link>
                )
              )}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.href}
          className={item.className ? item.className : "block px-4 py-2 text-gray-700 hover:bg-gray-100"}
        >
          {item.label}
        </Link>
      )}
    </div>
  );
};

const MobileSubMenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex justify-between items-center"
      >
        {item.label}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {open && (
        <div className="pl-4">
          {item.submenu.map((child, idx) => (
            <Link
              key={idx}
              href={child.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// ===== Main Navbar Component =====

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              FileFusion
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            {navItems.map((item, idx) => (
              <DesktopMenuItem key={idx} item={item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item, idx) => (
              <MobileMenuItem key={idx} item={item} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
