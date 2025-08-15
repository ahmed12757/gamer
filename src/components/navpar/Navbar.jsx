import { useState } from "react";
import logo from "../../images/freetogame-logo (1).png";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  let [freeActive, setFreeActive] = useState(false);
  let [BroserActive, setBroserActive] = useState(false);
  let [minucase, setminucase] = useState(false);
  let [minucaseFree, setminucaseFree] = useState(false);
  let [minucaseBrowser, setminucaseBrowser] = useState(false);
  const duration = 500;
  const duration2 = 400;
  return (
    <>
      <nav
        style={{
          transition: `all ${duration}ms `,
        }}
        className={`bg-primary-300 shadow-sm fixed top-0 right-0 left-0   shadow-primary-500 overflow-hidden md:overflow-visible   flex md:items-center  py-0 z-50 text-gray-300 ${
          minucase
            ? ` ${minucaseFree ? `h-[640px]` : `h-[440px]`} ${
                minucaseBrowser ? `h-[640px]` : `h-[440px]`
              } md:h-[55px] `
            : "h-[55px]"
        }  `}
      >
        <div className={" container mx-auto px-2"}>
          <div className="max-w-screen-xl  flex flex-col md:flex-row gap-y-5 mx-auto p-1">
            {/* logo */}
            <div className="flex justify-between items-center gap-x-1 mr-2">
              <a
                href="#"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src={logo} className="w-full" alt="Flowbite Logo" />
              </a>
              <div
                onClick={() => {
                  setminucase(!minucase);
                  console.log(minucase);
                }}
                className=" text-xl md:hidden"
              >
                {minucase ? (
                  <i className="fa-solid fa-x"></i>
                ) : (
                  <i className="fa-solid fa-bars"></i>
                )}
              </div>
            </div>

            <div className=" flex justify-between  md:gap-4 items-center space-y-6 md:space-y-0 w-full flex-col md:flex-row">
              {/* ---------------------------- */}

              <div className="flex items-center text-gray-400  gap-3 justify-between flex-col w-full md:flex-row md:w-fit ms-auto">
                {/* search & inventory & games */}

                {/*  */}
                <div className="w-full md:w-fit flex">
                  <ul className="flex w-full  md:w-fit gap-2 flex-col md:flex-row   md:items-center items-start ">
                    <li>
                      <ul className="flex w-full md:w-fit gap-3 md:gap-1 flex-col md:flex-row  md:items-center items-start ">
                        <li
                          onClick={() => {
                            setFreeActive(false);
                            setBroserActive(false);
                          }}
                          className={`hover:text-gray-50 mx-3 hover:transition-colors hover:duration-300 duration-300 cursor-pointer`}
                        >
                          <NavLink
                            to={`login`}
                            className={({ isActive }) => {
                              return `${isActive ? ` text-gray-50` : ``}`;
                            }}
                          >
                            Login
                          </NavLink>
                        </li>
                        <li
                          onClick={() => {
                            setFreeActive(false);
                            setBroserActive(false);
                          }}
                          className=" "
                        >
                          <NavLink
                            className={({ isActive }) => {
                              return `hover:text-gray-50   flex justify-center content-center items-center rounded-lg border-[.5px] border-blue-500 px-4 py-1 md:py-[13px] hover:border-gray-50  hover:transition-colors hover:duration-300 duration-300 cursor-pointer text-blue-500 ${
                                isActive ? `text-gray-50` : ``
                              } `;
                            }}
                            to="signup"
                          >
                            Join Free
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li
                      onClick={() => {
                        setFreeActive(false);
                        setBroserActive(false);
                      }}
                      className={`hidden hover:text-gray-50 hover:transition-colors hover:duration-300 duration-300 cursor-pointer`}
                    >
                      <NavLink to={``}>Logout</NavLink>
                    </li>
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
