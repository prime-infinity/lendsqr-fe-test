import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

/**
 *
 * please note, some data are inconsistent
 */

function UserDetails() {
  let navigate = useNavigate();
  let { id } = useParams();
  const backToUsers = (): void => {
    navigate("/dashboard");
  };

  interface UserData {
    id: string;
    userName: string;
    email: string;
    orgName: string;
    accountNumber: string;
    accountBalance: string;
    profile: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      bvn: string;
      gender: string;
    };
    socials: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
    guarantor: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
    };
    education: {
      level: string;
      employmentStatus: string;
      sector: string;
      duration: string;
      officeEmail: string;
      loanRepayment: string;
      monthlyIncome: string[];
    };
    phoneNumber: string;
    createdAt: string;
  }

  const [UserDetails, setUserDetails] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      ).then((res) => res.json());
      setUserDetails(data);
    };
    fetchUser();
  }, [id]);
  //console.log(UserDetails);

  return (
    UserDetails && (
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
                              {UserDetails.profile.firstName}{" "}
                              {UserDetails.profile.lastName}
                            </div>
                            <div className="col-12 fs-14 fw-4 text-sub-sec">
                              {UserDetails.accountNumber}
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
                          ₦{UserDetails.accountBalance}
                        </div>
                        <div className="col-12 fs-12 fw-4 text-sub-sec">
                          9912345678/Providus Bank
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row pt-5 flex-nowrap"
                style={{ overflowX: "auto" }}
              >
                <div className="col-md-2 col-5 text-center pb-2 fs-16 text-hover-to-pri">
                  General Details
                </div>
                <div className="col-md-2 col-5 text-center pb-2 fs-16 text-hover-to-pri">
                  Documents
                </div>
                <div className="col-md-2 col-5 text-center pb-2 fs-16 text-hover-to-pri">
                  Bank Details
                </div>
                <div className="col-md-2 col-5 text-center pb-2 fs-16 text-hover-to-pri">
                  Loans
                </div>
                <div className="col-md-2 col-5 text-center pb-2 fs-16 text-hover-to-pri">
                  Savings
                </div>
                <div className="col-md-2 col-5 text-center pb-2 fs-16 text-hover-to-pri">
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
            <table className="table table-borderless ps-4 pe-4 pb-4 pt-3 mb-0">
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
                  <td>
                    {UserDetails.profile.firstName}{" "}
                    {UserDetails.profile.lastName}
                  </td>
                  <td>{UserDetails.phoneNumber}</td>
                  <td>{UserDetails.email}</td>
                  <td>{UserDetails.profile.bvn}</td>
                  <td>{UserDetails.profile.gender}</td>
                </tr>
              </tbody>
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
          </div>
          <div className="col-12 ps-4 ms-2 pe-5">
            <hr />
          </div>
          <div className="col-12 ps-4 ms-2 pt-3">
            <span className="fs-16 fw-5 text-sec">
              Education and Employment
            </span>
          </div>
          <div className="table-responsive p-0 m-0">
            <table className="table table-borderless ps-4 pe-4 pb-4 pt-3 mb-0">
              <thead>
                <tr>
                  <th scope="col">level of education</th>
                  <th scope="col">employment status</th>
                  <th scope="col">sector of employment</th>
                  <th scope="col">Duration of employment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{UserDetails.education.level}</td>
                  <td>{UserDetails.education.employmentStatus}</td>
                  <td>{UserDetails.education.sector}</td>
                  <td>{UserDetails.education.duration}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th scope="col">office email</th>
                  <th scope="col">Monthly income</th>
                  <th scope="col">loan repayment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{UserDetails.education.officeEmail}</td>
                  <td>
                    ₦{UserDetails.education.monthlyIncome[0]} - ₦
                    {UserDetails.education.monthlyIncome[1]}
                  </td>
                  <td>{UserDetails.education.loanRepayment}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 ps-4 ms-2 pe-5">
            <hr />
          </div>
          <div className="col-12 ps-4 ms-2 pt-3">
            <span className="fs-16 fw-5 text-sec">Socials</span>
          </div>
          <div className="table-responsive p-0 m-0">
            <table className="table table-borderless ps-4 pe-4 pb-4 pt-3 mb-0">
              <thead>
                <tr>
                  <th scope="col">Twitter</th>
                  <th scope="col">Facebook</th>
                  <th scope="col">Instagram</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{UserDetails.socials.twitter}</td>
                  <td>{UserDetails.socials.facebook}</td>
                  <td>{UserDetails.socials.instagram}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 ps-4 ms-2 pe-5">
            <hr />
          </div>
          <div className="col-12 ps-4 ms-2 pt-3">
            <span className="fs-16 fw-5 text-sec">Guarantor</span>
          </div>
          <div className="table-responsive p-0 m-0">
            <table className="table table-borderless ps-4 pe-4 pb-4 pt-3 mb-0">
              <thead>
                <tr>
                  <th scope="col">
                    {UserDetails.guarantor.firstName}{" "}
                    {UserDetails.guarantor.lastName}
                  </th>
                  <th scope="col">{UserDetails.guarantor.phoneNumber}</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Relationship</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Debby Ogana</td>
                  <td>07060780922</td>
                  <td>debby@gmail.com</td>
                  <td>Sister</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  );
}
export default UserDetails;
