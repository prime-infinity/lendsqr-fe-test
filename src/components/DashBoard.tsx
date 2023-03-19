import Navbar from "./DashBoard/Navbar";
import SideBar from "./DashBoard/Sidebar";

function Login() {
  return (
    <div className="dashboard">
      <Navbar />
      <SideBar />

      <div
        className="dashboard_sub container-fluid pb-5"
        style={{ paddingTop: "7%" }}
      >
        <div className="row ms-md-4 pe-md-4">
          <div className="col-12 pt-5 ps-md-5 pe-md-5">
            <>
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
            </>
            <>
              <div className="row mt-5">
                <div className="table-responsive p-0 m-0">
                  <table className="table ps-4 pe-4 pb-4 pt-3">
                    <tbody>
                      <tr className="">
                        <td className="fs-12 fw-6 text-sub-sec">
                          ORGANISATION{" "}
                          <span className="ps-2">
                            <img
                              src="/images/dashboard/threedot.png"
                              className="d-none d-md-inline-block"
                              alt="filtericon"
                            />
                          </span>
                        </td>
                        <td className="fs-12 fw-6 text-sub-sec">
                          USERNAME{" "}
                          <span className="ps-2">
                            <img
                              src="/images/dashboard/threedot.png"
                              className="d-none d-md-inline-block"
                              alt="filtericon"
                            />
                          </span>
                        </td>
                        <td className="fs-12 fw-6 text-sub-sec">
                          EMAIL{" "}
                          <span className="ps-2">
                            <img
                              src="/images/dashboard/threedot.png"
                              className="d-none d-md-inline-block"
                              alt="filtericon"
                            />
                          </span>
                        </td>
                        <td className="fs-12 fw-6 text-sub-sec">
                          PHONE NUMBER{" "}
                          <span className="ps-2">
                            <img
                              src="/images/dashboard/threedot.png"
                              className="d-none d-md-inline-block"
                              alt="filtericon"
                            />
                          </span>
                        </td>
                        <td className="fs-12 fw-6 text-sub-sec">
                          DATE JOINED{" "}
                          <span className="ps-2">
                            <img
                              src="/images/dashboard/threedot.png"
                              className="d-none d-md-inline-block"
                              alt="filtericon"
                            />
                          </span>
                        </td>
                        <td className="fs-12 fw-6 text-sub-sec">
                          STATUS{" "}
                          <span className="ps-2">
                            <img
                              src="/images/dashboard/threedot.png"
                              className="d-none d-md-inline-block"
                              alt="filtericon"
                            />
                          </span>
                        </td>
                        <td className="fs-12 fw-6 text-sub-sec"></td>
                      </tr>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
                        <tr className="align-middle">
                          <td>
                            <span className="fs-14 text-sub-sec fw-4">
                              Lendsqr
                            </span>
                          </td>
                          <td>
                            <span className="fs-14 text-sub-sec fw-4">
                              Adedeji
                            </span>
                          </td>
                          <td>
                            <span className="fs-14 text-sub-sec fw-4">
                              adedeji@lendsqr.com
                            </span>
                          </td>
                          <td>
                            <span className="fs-14 text-sub-sec fw-4">
                              08078903721
                            </span>
                          </td>
                          <td>
                            <span className="fs-14 text-sub-sec fw-4">
                              May 15, 2020 10:00 AM
                            </span>
                          </td>
                          <td>
                            <span className="table-status-btn fs-14 fw-4 text-sub-sec py-2 px-3">
                              Inactive
                            </span>
                          </td>
                          <td>
                            <span>
                              <img
                                src="/images/dashboard/verticaldots.png"
                                alt=""
                              />
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="col-12  table-bottom">
                  <div className="row text-center text-md-start justify-content-between">
                    <div className="col-12 px-0 col-md-3">
                      <div>
                        Showing{" "}
                        <select
                          className="form-select mx-2 fs-14 fw-5"
                          aria-label="Default select example"
                        >
                          <option selected>100</option>
                          <option value="200">200</option>
                          <option value="300">300</option>
                          <option value="400">400</option>
                        </select>{" "}
                        out of 100
                      </div>
                    </div>
                    <div
                      className="col-md-4 col-12 d-flex pe-0 align-items-center"
                      style={{ justifyContent: "end" }}
                    >
                      <span className="ar-btn-bx d-flex align-items-center">
                        {" "}
                        <img src="/images/dashboard/lftar.png" alt="" />{" "}
                      </span>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span className="fs-16 fw-4 px-3">{i}</span>
                      ))}
                      <span className="ar-btn-bx d-flex align-items-center">
                        {" "}
                        <img src="/images/dashboard/ritar.png" alt="" />{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
