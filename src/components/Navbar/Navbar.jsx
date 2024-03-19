import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
  ];
  const [open, setOpen]= useState(false);
  return (
    <nav className="bg-rose-700 p-6 md:p-0">
      <div className="text-3xl md:hidden " onClick={() => setOpen(!open)}>
        {open === true ? <IoMdClose></IoMdClose> : <RiMenu2Line></RiMenu2Line>}
      </div>
      <ul
        className={`lg:flex absolute duration-1000 md:static bg-rose-700 p-8
      ${open ? "top-16" : "-top-96"}`}
      >
        {routes.map((route) => (
          <li
            className="md:mr-12 md:mt-0 hover:bg-white p-2"
            key={route.id}
          >
            {route.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
