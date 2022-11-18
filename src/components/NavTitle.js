import { NavLink } from "react-router-dom";

const NavTitle = () => {
    return (
            <nav>
              <div className="pl-24 bg-skin-nav h-16">
                <div className="container-fluid w-full flex flex-wrap items-center">
                  <NavLink to='/'>
                    <h1 className=" absolute text-3xl font-bold text-transparent top-3 bg-gradient-to-r from-skin-titleGradientOne to-skin-titleGradientTwo bg-clip-text">Chey's Software</h1>
                    {/* fluid,full,fast    panel */}
                  </NavLink>
                </div>
              </div>
            </nav>
    )
};
 export default NavTitle;