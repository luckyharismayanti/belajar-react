import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = () => {


  
  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <a href="#" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-500 mr-3 sm:h-10" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white ">Tailwind React</span>
      </a>
      <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            {/* Menu Home */}
            <NavLink exact to ='/' className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded 
            md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 
            md:dark:bg-transparent" aria-current="page">Home</NavLink>
          </li>
          <li>
            <NavLink exact to ='/Services' className="block py-2 pl-3 pr-4 text-gray-700 rounded
             hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
             md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700
              dark:hover:text-white md:dark:hover:bg-transparent"
              activeClassName="bg-blue-500">Services</NavLink>
          </li>
          <li>
            <NavLink exact to ='/Pricing' className="block py-2 pl-3 pr-4 text-gray-700 rounded
             hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700
              md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700
               dark:hover:text-white md:dark:hover:bg-transparent">Pricing</NavLink>
          </li>
          <li>
            <NavLink Exact to ='/Contact' className="block py-2 pl-3 pr-4 text-gray-700 rounded
             hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
             md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700
              dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
          </li>
          <li>
            <NavLink Exact to ='/Login' className="block py-2 pl-3 pr-4 text-gray-700 rounded
             hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
             md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700
              dark:hover:text-white md:dark:hover:bg-transparent">Login</NavLink>
          </li>
          <li>
            <NavLink Exact to ='/Hook' className="block py-2 pl-3 pr-4 text-gray-700 rounded
             hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
             md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700
              dark:hover:text-white md:dark:hover:bg-transparent">Hook React</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}


export default navbar

// ketika tab di klik/ aktive dia beruba warna atau menjadi biru tulisannya
// className={({ isActive })} => {
//   return (
//     "text-gray-700 rounded md:border-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparant" +
//     (isActive
//       ? " bg-blue-700 text-white md:p-2 dark:text-white"
//       : "")
//   );
//   // console.log(item, href, isActive);
//     }
    


// HASIL AI BUAT NAMBAHIN isActive
// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   const isActive = (path, match, location) => {
//     if (!match) {
//       return false;
//     }

//     return match.url === path;
//   };

//   return (
//     <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//       <div className="container flex flex-wrap items-center justify-between mx-auto">
//         <a href="/" className="flex items-center">
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="h-500 mr-3 sm:h-10"
//             alt="Flowbite Logo"
//           />
//           <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white ">
//             Tailwind React
//           </span>
//         </a>
//         <button
//           data-collapse-toggle="navbar-multi-level"
//           type="button"
//           className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-multi-level"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-6 h-6"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </button>
//         <div
//           className="hidden w-full md:block md:w-auto"
//           id="navbar-multi-level"
//         >
//           <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               {/* Menu Home */}
//               <NavLink
//                 exact
//                 to="/"
//                 className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded 
//                   md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 
//                   md:dark:bg-transparent"
//                 isActive={isActive.bind(this, "/")}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 exact
//                 to="/Services"
//                 className="block py-2 pl-3 pr-4 text-gray-700 rounded
//                    hover:bg-gray-100 md:hover:bg</li>
//                            </ul>
//                          </div>
//                        </div>
//                      </nav>
                     
//                      )
//                    }