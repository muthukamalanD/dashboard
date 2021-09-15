import BottomCards from "./BottomCards";
import Navbar from "./Navbar";
import ProjectsCard from "./ProjectsCard";
import Sidebar from "./Sidebar";
import SmallCards from "./SmallCards";
import "./styles.css";

export default function App() {
  return (
    <div className="App" id="page-top">
      {/*<!-- Page Wrapper -->*/}
      <div id="wrapper">
        {/*<!-- Sidebar -->*/}
        <Sidebar />
        {/*<!-- End of Sidebar -->*/}

        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
          {/*<!-- Main Content -->*/}
          <div id="content">
            {/*<!-- Topbar -->*/}
            <Navbar />
            {/*<!-- End of Topbar -->*/}

            {/*<!-- Begin Page Content -->*/}
            <div className="container-fluid">
              {/*<!-- Page Heading -->*/}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a
                  href="#!"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                  Generate Report
                </a>
              </div>

              {/*<!-- Content Row -->*/}
              <SmallCards />

              {/*<!-- Content Row -->*/}
              <div className="row">
                {/*<!-- Content Column -->*/}
                <ProjectsCard />

                <BottomCards />
              </div>
            </div>
            {/*<!-- /.container-fluid -->*/}
          </div>
          {/*<!-- End of Main Content -->*/}

          {/*<!-- End of Footer -->*/}
        </div>
        {/*<!-- End of Content Wrapper -->*/}
      </div>
      {/*<!-- End of Page Wrapper -->*/}

      {/*<!-- Scroll to Top Button-->*/}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/*<!-- Logout Modal-->*/}
    </div>
  );
}
