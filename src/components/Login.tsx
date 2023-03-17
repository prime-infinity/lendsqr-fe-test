//import { ReactComponent as Logo } from './logo.svg';

function Login() {
  return (
    <div className="container-fluid">
        <div className="row justify-content-center d-flex align-items-center" style={{height:"100vh"}}>
            <div className="col-md-6 col-12 d-none d-md-block">
                <div className="row justify-content-center">
                    <div className="col-10 pt-5 mt-5">
                        <img src="/images/loginpage/pablo-sign-in1.svg" className="img-fluid" alt="loginpagelogo" />
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-12 d-flex align-items-center" style={{height:"100vh",boxShadow: "0px 15px 90px rgba(0, 0, 0, 0.03)"}}>
                <div className="row d-flex" style={{width:"-webkit-fill-available"}}>
                    <div className="col-md-9 offset-md-1 ps-5 pe-5">
                        <div className="form-main">
                            <div className="form-main_text pb-5">
                                <div className="">
                                    <h3 className="fw-7 fs-40">Welcome!</h3>
                                </div>
                                <div>
                                    <span className="fs-20">Enter details to login</span>
                                </div>
                            </div>
                            
                            <div className="form-sub-container">
                                <div className="mb-4">
                                    <input type="email" placeholder="Email" className="form-control input-main-type" />
                                </div>
                                <div>
                                    <input type="password" placeholder="Password" className="form-control input-main-type" />
                                </div>
                                <div className="pt-3 pb-4">
                                    <span className="color-primary fs-12 fw-6">FORGOT PASSWORD?</span>
                                </div>
                                <div>
                                    <button className="button-main-type w-100">
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
