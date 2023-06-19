import Link from "next/link";
import NavLink from "../Navlink/NavLink";

const navitem = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/profile", title: "Profile" },
  { path: "/blog", title: "Blog" },
  { path: "/dashboard", title: "Dashboard" },
];

const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto pt-2 items-center ">
      <Link href="/">
        <h2 className="text-3xl font-extrabold hover:bg-slate-200 p-2 rounded-md cursor-pointer">
          First Next Js
        </h2>
      </Link>
      <ul className=" flex gap-4">
        {navitem.map(({ path, title }) => (
          <li  key={title}>
            <NavLink activeClassName="text-blue-500" href={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
