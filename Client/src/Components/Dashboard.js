import "../styles/Dashboard.css";
import Navbar from "./Navbar";
import SearchBox from "./Searchbox";
import FilterBox from "./Filterbox";
import Products from "./Products";
import Footer from "./Footer";


const Dashboard = () => {
  return (
    <div className="App">
        <Navbar />
        <SearchBox />
      <div className="data">
        <FilterBox /> 
        <Products />
       </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
