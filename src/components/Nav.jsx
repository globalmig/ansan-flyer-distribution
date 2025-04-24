import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeClassName = "border-b-2 border-[#18A3FA] font-semibold text-[#18A3FA]";

  return (
    <>
      <nav aria-label="주요 메뉴" role="navigation" className="flex gap-2 w-full  h-20 px-4 mx-auto mb-10 md:mb-24 items-center justify-center md:justify-between fixed z-20 top-0  bg-white shadow-sm">
        <div className="max-w-[1200px] flex justify-center md:justify-between w-full mx-auto">
          {/* 회사명 */}
          <Link to={"/"}>
            <p className="text-3xl font-semibold">안산전단지배포</p>
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden flex flex-col fixed right-8 top-10" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label="메뉴 열기">
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>

          {/* Desktop menu */}
          <ul className="nav-list hidden md:flex gap-10 items-center">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeClassName : "")} end>
                회사소개
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ansan" className={({ isActive }) => (isActive ? activeClassName : "")}>
                안산종합광고
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/print" className={({ isActive }) => (isActive ? activeClassName : "")}>
                전단지인쇄
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu - 모바일에서만 상단 고정 */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden fixed top-14 h-60 left-0 w-full bg-white shadow-md pb-12 pt-10 z-10 ">
          <ul className="flex flex-col items-center justify-center gap-6">
            <li className="nav-item py-2">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeClassName : "")} onClick={toggleMenu} end>
                회사소개
              </NavLink>
            </li>
            <li className="nav-item py-2">
              <NavLink to="/ansan" className={({ isActive }) => (isActive ? activeClassName : "")} onClick={toggleMenu}>
                안산종합광고
              </NavLink>
            </li>
            <li className="nav-item py-2">
              <NavLink to="/print" className={({ isActive }) => (isActive ? activeClassName : "")} onClick={toggleMenu}>
                전단지인쇄
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
