/* eslint-disable jsx-a11y/anchor-is-valid */
function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid px-4 py-3">
        <a className="navbar-brand ps-2">
          <div className="logo-navbar">
            <img
              src="/images/general/union.png"
              className="logo-navbar_sqr"
              alt="unionlogo"
            />
            <img
              src="/images/general/lendsqr.png"
              className="logo-navbar_wri"
              alt="lendsqrlogo"
            />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse pe-4 me-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto ms-5 ps-5 mb-2 mb-lg-0">
            <li className="nav-item ms-4">
              <div className="input-group" style={{ width: "400px" }}>
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="form-control input-search fs-14 fw-4"
                />
                <span className="input-group-text">
                  {" "}
                  <img
                    src="/images/navbar/search.png"
                    alt="searchicon"
                    className="pe-2 ps-2"
                  />{" "}
                </span>
              </div>
            </li>
          </ul>
          <div className="navbar_links d-flex">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center">
                <a
                  className="nav-link text-decoration-underline fs-16"
                  style={{ color: "#213f7d" }}
                >
                  Docs
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link ps-5 pe-4">
                  <img
                    src="/images/navbar/bell.png"
                    alt="bellicon"
                    className=""
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <img
                    src="/images/navbar/profile.png"
                    alt="profilepic"
                    style={{ borderRadius: "50%" }}
                  />
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link fs-16 fw-6" style={{ color: "#213f7d" }}>
                  Adedeji
                </a>
                <div className="arrow-down"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
