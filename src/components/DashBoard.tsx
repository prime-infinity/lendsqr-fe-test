/* eslint-disable jsx-a11y/anchor-is-valid */
function Login() {
  return (
    <div className="dashboard-main">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
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
            className="collapse navbar-collapse pe-4"
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
                  <a
                    className="nav-link fs-16 fw-6"
                    style={{ color: "#213f7d" }}
                  >
                    Adedeji
                  </a>
                  <div className="arrow-down"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="sidebar">
        <ul>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/briefcase1.png" alt="briefcaselogo" />
            </span>
            <span className="sidebar_text"> Switch Organisation</span>
            <div className="arrow-down ms-3"></div>
          </li>
          <li className="d-flex align-items-center mb-4">
            <span className="sidebar_icon">
              <img src="/images/sidebar/home1.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Dashboard</span>
          </li>
          <span className="sidebar_label fs-12 fw-5">CUSTOMERS</span>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/user-friends1.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Users</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/users1.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Guarantors</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/sack1.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Loans</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/handshake.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Decision Models</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/piggy-bank1.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Savings</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/handmoney.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Loan Requests</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/user-check1.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Whitelist</span>
          </li>
          <li className="d-flex align-items-center mb-4">
            <span className="sidebar_icon">
              <img src="/images/sidebar/user-times1.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Karma</span>
          </li>
          <span className="sidebar_label fs-12 fw-5">BUSINESSES</span>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/briefcase1.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Organization</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/handmoney.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Loan Products</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/bank.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Savings Products</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/coins.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Fees and Charges</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/trans.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Transactions</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/spiral.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Services</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/usersett.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Service Account</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/scroll.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Settlements</span>
          </li>
          <li className="d-flex align-items-center mb-4">
            <span className="sidebar_icon">
              <img src="/images/sidebar/bar.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Reports</span>
          </li>
          <span className="sidebar_label fs-12 fw-5">SETTINGS</span>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/sliders-h1.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Preferences</span>
          </li>
          <li className="d-flex align-items-center">
            <span className="sidebar_icon">
              <img src="/images/sidebar/badge-percent1.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Fees and Pricing</span>
          </li>
          <li className="d-flex align-items-center pb-4">
            <span className="sidebar_icon">
              <img src="/images/sidebar/record.png" alt="homelogo" />
            </span>
            <span className="sidebar_text">Audit Logs</span>
          </li>
        </ul>
      </div>

      <div className="container-fluid"></div>
    </div>
  );
}

export default Login;
