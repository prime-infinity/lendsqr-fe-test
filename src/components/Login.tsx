import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const toDashBoard = (): void => {
    navigate("/dashboard");
  };

  return (
    <div className="container-fluid">
      <div
        className="row justify-content-center d-flex align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="logo-float">
          <img
            src="/images/general/union.png"
            className="logo-float_sqr"
            alt="unionlogo"
          />
          <img
            src="/images/general/lendsqr.png"
            className="logo-float_wri"
            alt="lendsqrlogo"
          />
        </div>
        <div className="col-md-6 col-12 d-none d-md-block">
          <div className="row justify-content-center">
            <div className="col-10 pt-5 mt-3">
              <img
                src="/images/loginpage/pablo-sign-in1.svg"
                className="img-fluid"
                alt="loginpagelogo"
              />
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-12 d-flex align-items-center"
          style={{
            height: "100vh",
            boxShadow: "0px 15px 90px rgba(0, 0, 0, 0.03)",
          }}
        >
          <div
            className="row d-flex"
            style={{ width: "-webkit-fill-available" }}
          >
            <div className="col-md-9 offset-md-1 ps-5 pe-5">
              <div className="form-main">
                <div className="form-main_text pb-5 mb-3">
                  <div className="pb-2">
                    <h3 className="fw-7 fs-40 d-none d-md-block">Welcome!</h3>
                    <h3 className="fw-7 text-center fs-40 d-block d-md-none">
                      Welcome!
                    </h3>
                  </div>
                  <div>
                    <span className="fs-20 d-none d-md-block">
                      Enter details to login
                    </span>
                    <span className="fs-20 text-center d-block d-md-none">
                      Enter details to login
                    </span>
                  </div>
                </div>

                <div className="form-sub-container">
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control input-main-type"
                    />
                  </div>

                  <div className="input-group">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control input-main-type"
                      style={{ borderRight: "0" }}
                    />
                    <span className="input-group-text fs-12 fw-6">SHOW</span>
                  </div>

                  <div className="pt-3 pb-4">
                    <span className="color-primary fs-12 fw-6">
                      FORGOT PASSWORD?
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={toDashBoard}
                      className="button-main-type w-100"
                    >
                      <span>LOG IN</span>
                    </button>
                  </div>
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
