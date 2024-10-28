import { useState } from "react";
import logo from "../assets/logo.png"
import { navItems } from "../constants";
import { Menu, X} from "lucide-react";

const Navbar = () => {
  const [mobilemenu ,setMobileMenu] = useState(false);

const toggleNavbar = () => {
  setMobileMenu(!mobilemenu)
}


  return (
<nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
  <div className="container px-4 mx-auto relative text-sm">
    <div className="flex justify-between items-center">
      <div className="flex items-center flex-shrink-0">
        <img className="h-10 w-10 mr-2" src={logo} alt="logo"  />
        <span className="text-xl tracking-tight ">VirCode</span>
      </div>
      <ul className="hidden lg:flex ml-14 space-x-12">
      {navItems.map((item, index)=> (
        <li key={index}>
          <a className="hover:text-orange-500" href={item.href}>{item.label}</a>
        </li>
      ))}
      </ul>
      <div className="hidden lg:flex justify-center space-x-12 item-center">
        <button className="py-2 px-3 border rounded-md ml-12 hover:bg-orange-500 hover:text-black transition duration-500 " href="#">Sign in</button>
        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:text-black transition duration-500" href="#">Create An account</button>
      </div>
      <div className="lg:hidden md-flex flex-col justify-end">
        <button onClick={toggleNavbar}>
          {mobilemenu? <X/> : <Menu />}
        </button>
      </div>
    </div>
  </div>
  {mobilemenu && (
    <div className=" fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden transition duration-500 ">
      <ul className="transition duration-500">
        {navItems.map((item, index) => (
          <li key={index} className="py-4">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex  justify-center items-center p-3 ">
        <button className="py-2 px-3 border rounded-md  hover:bg-orange-500 hover:text-black transition duration-500 mr-8  " href="#">Sign in</button>
        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md" href="#">Create An account</button>
      </div>
    </div>
  )}
</nav>
  )
}

export default Navbar
