import { UserType } from "@/interfaces";
import { NavLink } from "./navlink";
import RightMenu from "./right-menu";
import NavLayout from "./navigate.layout";
import { DarkModeToggle } from "../darkmode";

type Props = { user: UserType };
export const Navbar = ({ user, ...props }: Props) => {
  return (
    <header className="font-bold fixed top-0 left-0 right-0 z-50 py-1 md:py-5 border-b md:border-b-0 border-default bg-slate-200/20 md:!bg-transparent dark:bg-slate-900/50 backdrop-blur">
      <div className="container flex flex-row justify-between items-center">
        <div className="flex items-center justify-between">
          <NavLink targetSegment="/" href="/" className="flex gap-2 items-center">
            <span className="font-bolder text-2xl uppercase tracking-widest text-primary "> {user.name.split(" ")[0]}</span>
          </NavLink>
        </div>
        <NavLayout />
        <div className="flex gap-3">
          <DarkModeToggle />
          <RightMenu />
        </div>
      </div>
    </header>
  );
};
