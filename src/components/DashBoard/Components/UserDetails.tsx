import { useNavigate } from "react-router-dom";

function UserDetails() {
  let navigate = useNavigate();
  const backToUsers = (): void => {
    navigate("/dashboard");
  };
  return (
    <>
      <>
        <div className="row pb-4 pt-3">
          <div className="col-12 ps-md-0 pe-md-0">
            <div className="row justify-content-between">
              <div className="col-12 pb-4 d-flex align-items-baseline">
                <img
                  onClick={backToUsers}
                  src="/images/dashboard/leftlongarr.png"
                  alt="backtousers"
                  style={{ cursor: "pointer" }}
                />
                <span className="text-sub-sec fs-16 fw-4 ps-3">
                  Back to Users
                </span>
              </div>
              <div className="col-md-4 col-12">
                <span className="fs-24 section-text fw-5">User Details</span>
              </div>
              <div className="col-md-6 col-12 text-md-end  d-flex justify-content-between justify-content-md-end">
                <button className="btn fs-14 px-4 py-2 btn-n-black fw-6">
                  BLACKLIST USER
                </button>
                <button className="btn ms-4 px-4 py-2 fs-14 btn-n-activ fw-6">
                  ACTIVATE USER
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3 ">
          <div className="col-12 pt-4 ps-4 pe-4 bg-white">
            <div className="row pt-2">
              <div className="col-md-11 col-12">
                <div className="row">
                  <div className="col-md-5 col-12">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src="/images/dashboard/avatar.png"
                          style={{ width: "100px" }}
                          alt="avatar"
                        />
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div className="row">
                          <div className="col-12 fs-22 fw-5 text-sec">
                            Grace Effiom
                          </div>
                          <div className="col-12 fs-14 fw-4 text-sub-sec">
                            LSQFf587g90
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-2 text-center col-12 d-flex align-items-center"
                    style={{
                      borderLeft: "1px solid silver",
                      borderRight: "1px solid silver",
                    }}
                  >
                    <div className="row mx-auto ">
                      <div className="col-12">
                        <span className="fs-14 text-sub-sec fw-5">
                          User’s Tier
                        </span>
                        <br />
                        <img
                          src="/images/dashboard/starfilled.png"
                          alt="star"
                        />
                        <img
                          src="/images/dashboard/starnor.png"
                          className="ps-2"
                          alt="star"
                        />
                        <img
                          src="/images/dashboard/starnor.png"
                          className="ps-2"
                          alt="star"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 ps-md-4 col-12 d-flex align-items-center">
                    <div className="row ps-md-3">
                      <div className="col-12 fs-22 text-sec fw-5">
                        ₦200,000.00
                      </div>
                      <div className="col-12 fs-12 fw-4 text-sub-sec">
                        9912345678/Providus Bank
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-2 text-center pb-2 fs-16 text-hover-to-pri">
                General Details
              </div>
              <div className="col-2 text-center pb-2 fs-16 text-hover-to-pri">
                Documents
              </div>
              <div className="col-2 text-center pb-2 fs-16 text-hover-to-pri">
                Bank Details
              </div>
              <div className="col-2 text-center pb-2 fs-16 text-hover-to-pri">
                Loans
              </div>
              <div className="col-2 text-center pb-2 fs-16 text-hover-to-pri">
                Savings
              </div>
              <div className="col-2 text-center pb-2 fs-16 text-hover-to-pri">
                App and System
              </div>
            </div>
          </div>
        </div>
      </>
      <div className="row mt-5 personal-info bg-white">
        <div className="col-12 ps-4 ms-2 pt-4">
          <span className="fs-16 fw-5 text-sec">Personal Information</span>
        </div>
        <div className="table-responsive p-0 m-0">
          <table className="table table-borderless ps-4 pe-4 pb-4 pt-3">
            <thead>
              <tr>
                <th scope="col">full Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email Address</th>
                <th scope="col">Bvn</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grace Effiom</td>
                <td>07060780922</td>
                <td>grace@gmail.com</td>
                <td>07060780922</td>
                <td>Female</td>
              </tr>
            </tbody>{" "}
            <br />
            <thead>
              <tr>
                <th scope="col">Marital status</th>
                <th scope="col">Children</th>
                <th scope="col">Type of residence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Single</td>
                <td>None</td>
                <td>Parent’s Apartment</td>
              </tr>
            </tbody>
          </table>
          {/*<table className="table table-borderless ps-4 pe-4 pb-4 pt-3">
            <thead>
              <tr>
                <th scope="col">Marital status</th>
                <th scope="col">Children</th>
                <th scope="col">Type of residence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Single</td>
                <td>None</td>
                <td>Parent’s Apartment</td>
              </tr>
            </tbody>
            </table>*/}
        </div>
      </div>
    </>
  );
}
export default UserDetails;
