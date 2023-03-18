import Navbar from "./DashBoard/Navbar";
import SideBar from "./DashBoard/Sidebar";

function Login() {
  return (
    <div className="dashboard-main">
      <Navbar />
      <SideBar />

      <div className="container-fluid"></div>
    </div>
  );
}

export default Login;
