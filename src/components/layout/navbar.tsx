import { UserType } from "@/interfaces";
import { NavLink } from "./navlink";
import RightMenu from "./right-menu";
import NavLayout from "./navigate.layout";
import { DarkModeToggle } from "../darkmode";

type Props = { user: UserType };
export const Navbar = ({ user, ...props }: Props) => {
  return (
    <header className="bg-slate-800 md:bg-transparent container flex flex-col md:flex-row justify-between md:items-center font-bold fixed top-0 left-0 right-0 z-50 py-3 md:py-5 border-b md:border-b-0 border-primary">
      <div className="flex items-center justify-between">
        <NavLink targetSegment="/" href="/" className="flex gap-2 items-center">
          <span className="font-bolder text-3xl uppercase"> {user.name.split(" ")[0]}</span>
        </NavLink>
        <div className="flex gap-2 items-center">
          <DarkModeToggle />
          <RightMenu />
        </div>
      </div>
      <NavLayout />
    </header>
  );
};
