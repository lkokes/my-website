import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-emerald-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:block ml-10">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
