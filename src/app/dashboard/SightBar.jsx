import NavLink from "@/Components/Navlink/NavLink";
import Link from "next/link";

const links = [
  { path: "/dashboard", title: "Dashboard" },
  { path: "/dashboard/add-product", title: "Add-product" },
  { path: "/dashboard/manage-product", title: "manage-product" },
  { path: "/", title: "Home" },
];

const SightBar = () => {
  return (
    <div className="bg-[#2C3E50] w-60 p-10 h-[100vh] ">
      <h2 className="text-2xl font-bold text-white mb-10">Dashboard</h2>
      <ul className="text-white grid gap-6 ">
        {links.map(({ path, title }) => (
          <NavLink activeClassName="text-red-500" href={path} key={title}>
            {" "}
            <li className="border-2 p-2 border-white rounded-md">{title} </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default SightBar;
