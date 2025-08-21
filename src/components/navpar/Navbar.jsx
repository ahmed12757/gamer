import { useState } from "react";
import logo from "../../images/freetogame-logo (1).png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  let [minucase, setminucase] = useState(false);
  const duration = 500;
  const navigate = useNavigate();

  // 🔑 نشيك على التوكن
  const token = localStorage.getItem("token");

  // دالة تسجيل الخروج
  const handleLogout = () => {
    localStorage.removeItem("token"); // نمسح التوكن
    navigate("/login"); // نوديه صفحة تسجيل الدخول
  };

  return (
    <>
      <nav
        style={{ transition: `all ${duration}ms` }}
        className={`bg-primary-300 shadow-sm fixed top-0 right-0 left-0 shadow-primary-500 
        overflow-hidden md:overflow-visible flex md:items-center py-0 z-50 text-gray-300
        ${minucase ? "h-[160px] md:h-[55px]" : "h-[55px]"}`}
      >
        <div className="container mx-auto px-2">
          <div className="max-w-screen-xl flex flex-col md:flex-row gap-y-5 mx-auto p-1">
            {/* logo */}
            <div className="flex justify-between items-center gap-x-1 mr-2">
              <a
                href="#"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src={logo} className="w-full" alt="Flowbite Logo" />
              </a>
              <div
                onClick={() => setminucase(!minucase)}
                className="text-xl md:hidden"
              >
                {minucase ? (
                  <i className="fa-solid fa-x"></i>
                ) : (
                  <i className="fa-solid fa-bars"></i>
                )}
              </div>
            </div>

            {/* links */}
            <div className="flex justify-between md:gap-4 items-center  space-y-6 md:space-y-0 w-full flex-col md:flex-row">
              <div className="flex items-center text-gray-400 gap-3 justify-between flex-col w-full md:flex-row md:w-fit ms-auto">
                <div className="w-full md:w-fit flex">
                  <ul className="flex w-full md:w-fit gap-2 flex-col md:flex-row md:items-center items-start ">
                    {!token ? (
                      <>
                        {/* لو مفيش توكن → Login + Register */}
                        <li>
                          <NavLink
                            to="login"
                            className={({ isActive }) =>
                              `hover:text-gray-50 mx-3 duration-300 cursor-pointer ${
                                isActive ? "text-gray-50" : ""
                              }`
                            }
                          >
                            Login
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="signup"
                            className={({ isActive }) =>
                              `hover:text-gray-50 flex justify-center items-center rounded-lg 
                              border border-blue-500 px-4 py-1 md:py-[13px] 
                              hover:border-gray-50 duration-300 cursor-pointer text-blue-500 
                              ${isActive ? "text-gray-50" : ""}`
                            }
                          >
                            Join Free
                          </NavLink>
                        </li>
                      </>
                    ) : (
                      <>
                        {/* لو فيه توكن → Logout */}
                        <li>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
                          >
                            <i className="fa-solid fa-right-from-bracket"></i>
                            Logout
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
