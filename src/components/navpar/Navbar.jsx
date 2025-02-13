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
              <ul className=" flex flex-col w-full text-gray-400 md:w-fit gap-y-6 md:gap-y-0 text-start  items-center md:flex-row gap-x-2 font-medium  ">
                {/* Free Games */}
                <li className="w-full md:w-fit">
                  <div
                    onClick={() => {
                      setminucaseFree(!minucaseFree);
                      setminucaseBrowser(false);
                    }}
                    className={`${
                      minucaseFree
                        ? `relative cursor-pointer w-full text-gray-50  `
                        : `relative cursor-pointer w-full hover:text-gray-50 hover:transition-colors hover:duration-300 duration-300 ${
                            freeActive ? ` text-gray-50` : ``
                          } `
                    }`}
                  >
                    Free Games{" "}
                    {minucaseFree ? (
                      <i class="fa-solid fa-caret-up"></i>
                    ) : (
                      <i class="fa-solid fa-caret-down"></i>
                    )}
                    {/* Dropdown menu */}
                    <div
                      style={{
                        transition: `all ${duration2}ms `,
                      }}
                      className={` ${
                        minucaseFree
                          ? `h-[170px] py-3 mt-4 md:mt-0 md:py-2 `
                          : `h-[0px] py-0`
                      } w-full md:absolute overflow-hidden   md:w-[150%] bg-gray-600 rounded-b-md top-[41px] z-[1px]   `}
                    >
                      <ul className=" space-y-2 w-full  text-gray-400 ">
                        <li
                          onClick={() => {
                            setFreeActive(true);
                            setBroserActive(false);
                          }}
                          className="hover:bg-primary-300 px-4 w-full hover:text-gray-50 hover:transition-colors hover:duration-300 duration-200 cursor-pointer "
                        >
                          <NavLink
                            className={({ isActive }) => {
                              return ` ${isActive ? ` text-gray-50 ` : ``}`;
                            }}
                            to={`shooter`}
                          >
                            Shooter
                          </NavLink>
                        </li>

                        <li
                          onClick={() => {
                            setFreeActive(true);
                            setBroserActive(false);
                          }}
                          className="hover:bg-primary-300 px-4 w-full hover:text-gray-50 hover:transition-colors hover:duration-300 duration-200 cursor-pointer "
                        >
                          <NavLink
                            className={({ isActive }) => {
                              return ` ${isActive ? ` text-gray-50 ` : ``}`;
                            }}
                            to={`battleRoyale`}
                          >
                            BattleRoyale
                          </NavLink>
                        </li>

                        <li
                          onClick={() => {
                            setFreeActive(true);
                            setBroserActive(false);
                          }}
                          className="hover:bg-primary-300 px-4 w-full hover:text-gray-50 hover:transition-colors hover:duration-300 duration-200 cursor-pointer "
                        >
                          <NavLink
                            className={({ isActive }) => {
                              return ` ${isActive ? ` text-gray-50 ` : ``}`;
                            }}
                            to={`strategy`}
                          >
                            Strategy
                          </NavLink>
                        </li>

                        <li
                          onClick={() => {
                            setFreeActive(true);
                            setBroserActive(false);
                          }}
                          className="hover:bg-primary-300 px-4 w-full hover:text-gray-50 hover:transition-colors hover:duration-300 duration-200 cursor-pointer "
                        >
                          <NavLink
                            className={({ isActive }) => {
                              return ` ${isActive ? ` text-gray-50 ` : ``}`;
                            }}
                            to={`fantasy`}
                          >
                            Fantasy
                          </NavLink>
                        </li>

                        <li
                          onClick={() => {
                            setFreeActive(true);
                            setBroserActive(false);
                          }}
                          className="w-full  px-4  hover:bg-primary-300 hover:text-gray-50 hover:transition-colors hover:duration-300 duration-200"
                        >
                          <NavLink
                            className={({ isActive }) => {
                              return ` ${isActive ? ` text-gray-50 ` : ``}`;
                            }}
                            to={`sports`}
                          >
                            Sports
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                {/* Browser Games */}
                <li className="w-full md:w-fit">
                  <div
                    onClick={() => {
                      setminucaseBrowser(!minucaseBrowser);
                      setminucaseFree(false);
                    }}
                    className={`${
                      minucaseBrowser
                        ? `relative  m-0 cursor-pointer text-gray-50`
                        : `relative  m-0 cursor-pointer hover:text-gray-50 hover:transition-colors hover:duration-300 duration-300 ${
                            BroserActive ? ` text-gray-50` : ``
                          }`
                    }`}
                  >
                    Browser Games{" "}
                    {minucaseBrowser ? (
                      <i class="fa-solid fa-caret-up"></i>
                    ) : (
                      <i class="fa-solid fa-caret-down"></i>
                    )}
                    {/* Dropdown menu */}
                    <div
                      style={{
                        transition: `all ${duration2}ms `,
                      }}
                      className={` ${
                        minucaseBrowser
                          ? `h-[170px] py-3 mt-4 md:mt-0 md:py-2`
                          : `h-0 py-0`
                      } md:absolute bg-gray-600 overflow-hidden w-full md:w-[150%] top-[41px]  rounded-b-md z-[1px]  `}
                    >
                      <ul className="  space-y-2 w-full text-gray-400">
                        <li
                          onClick={() => {
                            setFreeActive(false);
                            setBroserActive(true);
                          }}
                          className="hover:bg-primary-300 px-4 w-full hover:text-gray-50 hover:transition-colors hover:duration-300 duration-200 cursor-pointer "
                        >
                          <NavLink
                            className={({ isActive }) => {
                              return ` ${isActive ? ` text-gray-50 ` : ``}`;
                            }}
                            to={`shooter`}
                          >
                            Browser Shooter
                          </NavLink>
                        </li>
                        <li
                          onClick={() => {
                            setFreeActive(false);
                            setBroserActive(true);
                          }}
                          className="hover:bg-primary-300 px-4 w-full hover:text-gray-50 hover:transition-colors hover:duration-300 duration-200 cursor-pointer "
                        >
                          <NavLink
                            className={({ isActive }) => {
                              return ` ${isActive ? ` text-gray-50 ` : ``}`;
                            }}
                            to={`anime`}
                          >
                            Browser Anime
                          </NavLink>
                        </li>

                        <li
                          onClick={() => {
                            setFreeActive(false);
                            setBroserActive(true);
                          }}
                          className="hover:bg-primary-300 px-4 w-full hover:text-gray-50 hover:transition-colors hover:duration-300 duration-200 cursor-pointer "
                        >
                          <NavLink
                            className={({ isActive }) => {
                              return ` ${isActive ? ` text-gray-50 ` : ``}`;
                            }}
                            to={`strategy`}
                          >
                            Browser Strategy
                          </NavLink>
                        </li>
                        <li
                          onClick={() => {
                            setFreeActive(false);
                            setBroserActive(true);
                          }}
                          className="hover:bg-primary-300 px-4 w-full hover:text-gray-50 hover:transition-colors hover:duration-300 duration-200 cursor-pointer "
                        >
                          <NavLink
                            className={({ isActive }) => {
                              return ` ${isActive ? ` text-gray-50 ` : ``}`;
                            }}
                            to={`fantasy`}
                          >
                            Browser Fantasy
                          </NavLink>
                        </li>
                        <li
                          onClick={() => {
                            setFreeActive(false);
                            setBroserActive(true);
                          }}
                          className="w-full  px-4  hover:bg-primary-300 hover:text-gray-50 hover:transition-colors hover:duration-300 duration-200"
                        >
                          <NavLink
                            className={({ isActive }) => {
                              return ` ${isActive ? ` text-gray-50 ` : ``}`;
                            }}
                            to={`sports`}
                          >
                            Browser Sports
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                {/* Special Offers */}
                <li
                  onClick={() => {
                    setFreeActive(false);
                    setBroserActive(false);
                  }}
                  className="w-full md:w-fit"
                >
                  <NavLink
                    to="SpecialOffers"
                    className={({ isActive }) => {
                      return `block  md:p-0 hover:text-gray-50 hover:transition-colors hover:duration-300 duration-300 ${
                        isActive ? `text-gray-50` : ``
                      }`;
                    }}
                  >
                    Special Offers
                  </NavLink>
                </li>
              </ul>
              <div className="flex items-center text-gray-400  gap-3 justify-between flex-col w-full md:flex-row md:w-fit">
                {/* search & inventory & games */}
                <div className="flex items-start w-full md:w-fit md:items-center font-semibold  space-y-6 pb-3 md:pb-0 md:space-y-0  gap-x-2 flex-col md:flex-row ">
                  {/* Search */}
                  <div
                    onClick={() => {
                      setFreeActive(false);
                      setBroserActive(false);
                    }}
                    className="w-full md:relative group/Search md:w-fit hover:text-gray-50 hover:transition-colors hover:duration-300 duration-300 cursor-pointer"
                  >
                    <NavLink
                      to={`search`}
                      className={({ isActive }) => {
                        return `w-full md:w-fit md:relative group/Games hover:text-gray-50 hover:transition-colors hover:duration-300 duration-300 cursor-pointer ${
                          isActive ? `text-gray-50` : ``
                        }`;
                      }}
                    >
                      <i class="fa-solid fa-magnifying-glass"></i>{" "}
                      <span className=" md:hidden">Search</span>
                      <p
                        className={`  h-0 md:group-hover/Search:h-8 md:group-hover/Search:py-1 md:group-hover/Search:transition-all md:group-hover/Search:duration-100 duration-100  md:group-hover/Search:overflow-visible overflow-hidden text-center w-[70px] px-2 rounded-lg translate-x-[-45%] py-0 bg-primary-200 md:absolute top-[50px] after:w-4 after:h-4 after:bg-primary-200 after:absolute after:top-[-5px] after:rotate-45 after:right-[25px]  `}
                      >
                        Search
                      </p>
                    </NavLink>
                  </div>
                  {/*My Inventory  */}
                  <div
                    onClick={() => {
                      setFreeActive(false);
                      setBroserActive(false);
                    }}
                    className="w-full md:relative group/Inventory md:w-fit hover:text-gray-50 hover:transition-colors hover:duration-300 duration-300 cursor-pointer"
                  >
                    <NavLink
                      to={`inventory`}
                      className={({ isActive }) => {
                        return `w-full md:w-fit md:relative group/Games hover:text-gray-50 hover:transition-colors hover:duration-300 duration-300 cursor-pointer ${
                          isActive ? `text-gray-50` : ``
                        }`;
                      }}
                    >
                      <i class="fa-solid fa-gift  "></i>{" "}
                      <span className=" md:hidden">My Inventory</span>
                      <p
                        className={`h-0 md:group-hover/Inventory:h-8 md:group-hover/Inventory:py-1 md:group-hover/Inventory:transition-all md:group-hover/Inventory:duration-100 duration-100  w-[115px] px-2 rounded-lg translate-x-[-65%] py-0 md:group-hover/Inventory:overflow-visible overflow-hidden bg-primary-200 md:absolute top-[50px] after:w-4 after:h-4 after:bg-primary-200 after:absolute after:top-[-5px] after:rotate-45 after:right-[25px]  `}
                      >
                        My Inventory
                      </p>
                    </NavLink>
                  </div>
                  {/* My Games */}
                  <div
                    onClick={() => {
                      setFreeActive(false);
                      setBroserActive(false);
                    }}
                  >
                    <NavLink
                      to={`games`}
                      className={({ isActive }) => {
                        return `w-full md:w-fit md:relative group/Games hover:text-gray-50 hover:transition-colors hover:duration-300 duration-300 cursor-pointer ${
                          isActive ? `text-gray-50` : ``
                        }`;
                      }}
                    >
                      <i class="fa-brands fa-playstation"></i>{" "}
                      <span className=" md:hidden">My Games</span>
                      <p
                        className={` h-0 md:group-hover/Games:text-gray-50 md:group-hover/Games:h-8 md:group-hover/Games:py-1  w-[100px] overflow-hidden   md:group-hover/Games:overflow-visible  text-center md:group-hover/Games:px-2 md:group-hover/Games:transition-all md:group-hover/Games:duration-50 duration-50  px-0 rounded-lg translate-x-[-75%] py-0 bg-primary-200 md:absolute top-[50px] after:w-4 after:h-4 after:bg-primary-200 after:absolute after:top-[-4px] after:rotate-45 after:right-[10px]  `}
                      >
                        My Games
                      </p>
                    </NavLink>
                  </div>
                </div>
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
