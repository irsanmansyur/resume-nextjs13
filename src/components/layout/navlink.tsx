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
      className={twMerge(
        "transition-colors duration-300 ease-linear p-2 hover:text-slate-900  dark:hover:text-slate-50",
        `${activeSegment === targetSegment ? "text-primary" : ""}`,
        className
      )}
    >
      {children}
    </Link>
  );
}
