import { React, useState } from "react";
import { Navbar, Header } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MailList, Footer } from "../../components";
import "./hotel.css";

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125</span>
          </div>
          <span className="hotelDistance">
            {`Excelenet location < 2.5 KM from airport`}
          </span>
          <span className="hotelPriceHighlight"> Book for 12% discount</span>
          <div className="hotelImages">
            <div className="hotelImgWrapper">
              <img
                src="https://source.unsplash.com/1600x900/?hotel"
                alt=""
                className="hotelImg"
              />
            </div>
            <div className="hotelImgWrapper">
              <img
                src="https://source.unsplash.com/1600x900/?hotel"
                alt=""
                className="hotelImg"
              />
            </div>
            <div className="hotelImgWrapper">
              <img
                src="https://source.unsplash.com/1600x900/?hotel"
                alt=""
                className="hotelImg"
              />
            </div>
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in Grand Indonesia Hotel</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                mollitia dicta? Cumque aspernatur, accusantium repudiandae quas
                minima neque magnam quam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Commodi odio inventore error corrupti ad
                veniam qui assumenda mollitia nam distinctio repudiandae
                consectetur, modi omnis ratione reprehenderit nobis dolor neque.
                Quo.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 9-night</h1>
              <span>
                located Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam cupiditate id perferendis?
              </span>
              <h2>
                <b>$945</b> {`(9 night)`}
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
