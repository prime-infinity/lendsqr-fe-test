type SidebarProps = {
  active: boolean;
};

const SideBar = ({ active }: SidebarProps) => {
  return (
    <div className={`sidebar d-md-block ${active && "d-none"}`}>
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
  );
};
export default SideBar;
