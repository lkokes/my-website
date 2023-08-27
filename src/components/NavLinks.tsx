import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const navItems = [
    { text: "Home", link: "/home" },
    { text: "About me", link: "/about_me" },
    { text: "Portfolio", link: "/portfolio" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <div className="ml-10 flex items-baseline space-x-4">
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          className="text-slate-500 hover:text-sky-950 rounded-md px-3 py-2 text-sm font-medium"
        >
          {item.text}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
