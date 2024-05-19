import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { MdLogin, MdLogout } from "react-icons/md";

const Nav = () => {
  const { userLogout } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("night");
    } else {
      setTheme("light");
    }
  };
  const handleLogout = () => {
    userLogout()
      .then(() => {
        console.log("successfully logOut!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/queries">Queries</Link>
            </li>
            <li>
              <Link to="/recommend">Recommendations For Me</Link>
            </li>
            <li>
              <Link to="/my_queries">My Queries</Link>
            </li>
            <li>
              <Link to="/my_recommend">My recommendations</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="w-12 h-12 hidden lg:block">
            <img
            className="rounded-xl"
              src="https://i.ibb.co/JzX4St3/post-office-1019869-1280.jpg"
              alt=""
            />
          </div>
          <p className="text-3xl font-bold text-red-800">
            Post<span className="text-4xl font-bold text-purple-800">F</span>
            orum
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/queries">Queries</Link>
          </li>
          {
            user ? <li>
            <Link to="/recommend">Recommendations For Me</Link>
          </li> 
          : ''
          }
          {
            user ? <li>
            <Link to="/my_queries">My Queries</Link>
          </li>
          : ''
          }
          {
            user ? <li>
            <Link to="/my_recommend">My recommendations</Link>
          </li>
          : ''
          }
        </ul>
      </div>

      <div className="navbar-end">
        <label className="swap swap-rotate mr-2">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleTheme}
            className="theme-controller"
            value="synthwave"
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {/* <Link to='/login' className="btn">Login</Link> */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {
              user ? <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.photoURL}
              />
            </div>
            : 
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co/prcjd2h/blank-profile-picture-973460-1280.png"
              />
            </div>
            }
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/register" className="justify-between text-xl font-bold">
                Register
              </Link>
            </li>
            {user ? (
              <li>
                <Link
                  className="text-xl font-bold flex items-center"
                  to="/login"
                >
                  <div onClick={handleLogout} className="flex gap-1">
                    <p>Logout</p>
                    <p className="text-2xl text-red-600 font-bold mt-1">
                      <MdLogout />
                    </p>
                  </div>
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  className="text-xl font-bold flex items-center"
                  to="/login"
                >
                  <div className="flex gap-1">
                    <p>Login</p>
                    <p className="text-2xl text-green-500 font-bold mt-1">
                      <MdLogin />
                    </p>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
