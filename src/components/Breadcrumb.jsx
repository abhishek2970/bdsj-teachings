"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Breadcrumb = () => {
  const pathname = usePathname();

  // ✅ Hide breadcrumb on home page
  if (pathname === "/") return null;

  // ✅ Split path into parts: "/subjects/math/pre-algebra" -> ["subjects", "math", "pre-algebra"]
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // ✅ Convert slug to Title Case (ex: "pre-algebra" -> "Pre Algebra")
  const formatLabel = (text) => {
    return text
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  let fullPath = "";

  return (
    <nav className="text-sm mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide py-2">
      <ul className="flex items-center space-x-2">
        {/* Home link */}
        <li>
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            Home
          </Link>
        </li>

        {/* Loop over segments */}
        {pathSegments.map((segment, index) => {
          fullPath += `/${segment}`;
          const isLast = index === pathSegments.length - 1;
          return (
            <React.Fragment key={index}>
              <li className="text-gray-500">/</li>
              <li>
                {!isLast ? (
                  <Link
                    href={fullPath}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {formatLabel(segment)}
                  </Link>
                ) : (
                  <span className="text-gray-700 font-semibold">
                    {formatLabel(segment)}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
