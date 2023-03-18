import Navbar from "./DashBoard/Navbar";
import SideBar from "./DashBoard/Sidebar";

function Login() {
  return (
    <div className="dashboard">
      <Navbar />
      <SideBar />

      <div className="dashboard_sub container-fluid">
        <div className="row ms-md-4 pe-md-4">
          <div className="col-12 pt-5 ps-md-5 pe-md-5">
            <div className="row pb-4 pt-3">
              <div className="ps-md-0">
                <span className="fs-24 section-text fw-5">Users</span>
              </div>
            </div>
            <div className="row justify-content-between pt-3 ">
              <div className="col-12 col-md-3 p-4 cards bg-white ">
                <div className="row">
                  <div className="col-12">
                    <img src="/images/dashboard/i4.png" alt="" />
                  </div>
                  <div className="col-12 fs-14 fw-5 pt-2 mt-1 txt">USERS</div>
                  <div className="col-12 fs-24 fw-6 pt-2 num">2,453</div>
                </div>
              </div>
              <div className="col-12 col-md-3 p-4 cards bg-white ">
                <div className="row">
                  <div className="col-12">
                    <img src="/images/dashboard/i3.png" alt="" />
                  </div>
                  <div className="col-12 fs-14 fw-5 pt-2 mt-1 txt">
                    ACTIVE USERS
                  </div>
                  <div className="col-12 fs-24 fw-6 pt-2 num">2,453</div>
                </div>
              </div>
              <div className="col-12 col-md-3 p-4 cards bg-white ">
                <div className="row">
                  <div className="col-12">
                    <img src="/images/dashboard/i2.png" alt="" />
                  </div>
                  <div className="col-12 fs-14 fw-5 pt-2 mt-1 txt">
                    USERS WITH LOANS
                  </div>
                  <div className="col-12 fs-24 fw-6 pt-2 num">12,453</div>
                </div>
              </div>
              <div className="col-12 col-md-3 p-4 cards bg-white ">
                <div className="row">
                  <div className="col-12">
                    <img src="/images/dashboard/i1.png" alt="" />
                  </div>
                  <div className="col-12 fs-14 fw-5 pt-2 mt-1 txt">
                    USERS WITH SAVINGS
                  </div>
                  <div className="col-12 fs-24 fw-6 pt-2 num">102,453</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
