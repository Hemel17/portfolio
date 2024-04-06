import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 text-xl font-vt">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center hover:text-white transition-colors text-secondary"
              : "flex items-center hover:text-white transition-colors text-primary"
          }
        >
          _home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 text-xl font-vt">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "flex items-center hover:text-white transition-colors text-secondary"
              : "flex items-center hover:text-white transition-colors text-primary"
          }
        >
          _about
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 text-xl font-vt">
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? "flex items-center hover:text-white transition-colors text-secondary"
              : "flex items-center hover:text-white transition-colors text-primary"
          }
        >
          _portfolio
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 text-xl font-vt">
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "flex items-center hover:text-white transition-colors text-secondary"
              : "flex items-center hover:text-white transition-colors text-primary"
          }
        >
          _skills
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 text-xl font-vt">
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive
              ? "flex items-center hover:text-white transition-colors text-secondary"
              : "flex items-center hover:text-white transition-colors text-primary"
          }
        >
          _resume
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 text-xl font-vt">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "flex items-center hover:text-white transition-colors text-secondary"
              : "flex items-center hover:text-white transition-colors text-primary"
          }
        >
          _contact
        </NavLink>
      </Typography>
    </ul>
  );
};

const NavbarSimple = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto w-[95%] px-6 py-3" color="transparent">
      <div className="flex items-center justify-between text-white">
        <Typography className="mr-4 cursor-pointer py-1.5 font-vt tracking-wide text-2xl">
          <NavLink to="/">
            <p className="flex gap-3">
              <span>{"// "}</span>
              <p className="flex flex-col">
                <span>hemel </span>
                <span className="text-secondary text-xl">web_dev</span>
              </p>
            </p>
          </NavLink>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav} className="bg-blue-gray-800">
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavbarSimple;
