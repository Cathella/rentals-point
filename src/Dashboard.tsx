import Footer from "./components/Footer";
import Nav from "./components/Nav";
import TopAlert from "./components/TopAlert";

function Dashboard() {
  return (
    <>
      <TopAlert />
      <Nav />
      <div className="pt-4 pb-5">
        <div className="container">
          <h1>This is the Dashboard</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
