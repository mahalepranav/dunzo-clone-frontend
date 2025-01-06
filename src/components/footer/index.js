import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid" style={{backgroundColor: '#171E30'}}>
        <div className="container text-light pt-5">
          <h4 className="pt-5">You can’t stop time, but you can save it!</h4>
          <h6 className="pt-3">Living in the city, there is never enough time to shop for 
            groceries, pick-up supplies, grab food and wade through traffic 
            on the way back home. How about we take care of all of the above 
            for you? What if we can give you all that time back? Send packages 
            across the city and get everything from food, groceries, medicines 
            and pet supplies delivered right to your doorstep. From any store 
            to your door, just make a list and we’ll make it disappear. Just Dunzo It!</h6>
        </div>
        <div className="container mt-5">
          <div className="row">  
            <div className="col-md-2">  
              <img
                src="/assets/images/footer1.png"
                className="img-fluid mt-4"
                alt=""
              />
            </div>
            <div className="col-md-3 text-light">
               <h4 className="mt-4">DUNZO</h4>
               <h6>About</h6>
               <h6>Terms & Conditions</h6>
               <h6>Dunzo for Partner</h6>
               <h6>Dunzo for Business</h6>
            </div>
            <div className="col-md-3 text-light">
               <h4 className="mt-4">GET IN TOUCH</h4>
               <h6>Email</h6>
               <h6>Facebook</h6>
               <h6>Instagram</h6>
               <h6>Linkedin</h6>
            </div>
            <div className="col-md-4">
            <img
                src="/assets/images/footer2.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>  
        </div>

        
        <div className="footer flex absolute-center text-light mt-2">
          Made with 🔥 by Pranav Mahale
        </div>
      </div>
    </>
  );
};

export default Footer;
