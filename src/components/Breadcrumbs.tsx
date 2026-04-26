import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  textColor?: string;
  hoverColor?: string;
  activeColor?: string;
  className?: string;
}

export default function Breadcrumbs({
  textColor = "text-ink/60",
  hoverColor = "hover:text-primary",
  activeColor = "text-primary",
  className = "mb-8",
}: BreadcrumbsProps) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  const formatName = (name: string) => {
    let decoded = decodeURIComponent(name);
    // Clean up common slugs or ID cases
    if (decoded.length > 30) {
      decoded = decoded.substring(0, 30) + "...";
    }
    return decoded
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav
      className={`flex items-center text-[11px] md:text-[12px] font-bold uppercase tracking-[1px] overflow-x-auto whitespace-nowrap no-scrollbar ${className}`}
    >
      <Link
        to="/"
        className={`${textColor} ${hoverColor} transition-colors flex-shrink-0`}
      >
        Beranda
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const name = formatName(value);

        return (
          <React.Fragment key={to}>
            <ChevronRight
              size={14}
              className={`mx-2 ${textColor} opacity-50 flex-shrink-0`}
            />
            {isLast ? (
              <span className={`${activeColor} flex-shrink-0`}>{name}</span>
            ) : (
              <Link
                to={to}
                className={`${textColor} ${hoverColor} transition-colors flex-shrink-0`}
              >
                {name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
