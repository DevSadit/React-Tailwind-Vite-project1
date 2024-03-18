import { RiMenu2Line } from "react-icons/ri";
const Navbar = () => {
  let routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
  ];
  return (
    <nav>
      <div className="text-2xl">
        <RiMenu2Line></RiMenu2Line>
      </div>
      <ul className="flex">
        {routes.map((route) => (
          <li className="mr-12" key={route.id}>
            {route.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
