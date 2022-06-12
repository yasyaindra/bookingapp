import React from "react";
import {
  Navbar,
  Header,
  Featured,
  PropertyList,
  FeaturedProperty,
  MailList,
  Footer,
} from "../../components";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse By Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Browse By Type</h1>
        <FeaturedProperty />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
