"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { twMerge } from "tailwind-merge";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  targetSegment: string | null;
  href: string;
};
export function NavLink({ children, targetSegment, className, ...props }: Props) {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <Link
      {...props}
      className={twMerge("hover:text-primary transition-colors duration-300 ease-linear p-2", className, `${activeSegment === targetSegment ? "text-primary" : ""}`)}
    >
      {children}
    </Link>
  );
}
