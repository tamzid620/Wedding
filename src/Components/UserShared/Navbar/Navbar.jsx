import { useState } from "react";
import logo from "../../../../public/icons/HomeLogo.jpg.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [galleryMenuOpen, setGalleryOpen] = useState(false);

  const toggleGalleryOpen = () => {
    setGalleryOpen(!galleryMenuOpen);
  };

  return (
    <div className="flex justify-between items-center px-3 ">
      <div>
        <img className="w-[100px]" src={logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-10 uppercase text-lg ">
          <div className="hover-hr">
            <li>Home</li>
            <hr className="border border-black bg-black  h-[2px]  w-[50px]" />
          </div>
          <div className="hover-hr">
            <li className="">Portfolio</li>
            <hr className="border border-black bg-black  h-[2px]  w-[95px]" />
          </div>
          <div className="hover-hr">
            <li onClick={toggleGalleryOpen} className="relative">
              Gallery
              {galleryMenuOpen && (
                <ul className="absolute bg-gray-300 mt-1 shadow-lg px-2 leading-10 w-[220px]">
                  <li>Standard Gallery</li>
                  <hr />
                  <li>Locked Gallery</li>
                </ul>
              )}
            </li>

            <hr className="border border-black bg-black  h-[2px]  w-[75px]" />
          </div>
          <div className="hover-hr">
            <li>Blog</li>
            <hr className="border border-black bg-black  h-[2px]  w-[50px]" />
          </div>
          <div className="hover-hr">
            <li>About Us</li>
            <hr className="border border-black bg-black  h-[2px]  w-[85px]" />
          </div>
          <div className="hover-hr">
            <li>Shop</li>
            <hr className="border border-black bg-black  h-[2px]  w-[50px]" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
