import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header max-width flex">
        <div className="header-left flex">
          <NavLink to="/" className="header-button-link"><img
            src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png"
            alt="Dunzo Logo"
            className="header-logo"
            height="28"
            width="122"
          /></NavLink>
          <div className="flex header-location absolute-center cur-po">
            <div className="flex absolute-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-map-pin"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#00b37a"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="11" r="3" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
            </div>

            <div className="location-text">Location Pune</div>
            {/* <div className="flex absolute-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#00b37a"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div> */}
          </div>
        </div>
        <div className="header-right flex">
          <NavLink to="/allpartners" className="header-button-link"><div className="hover-change cur-po">Dunzo for Partners</div></NavLink>
          <div className="flex absolute-center hover-change cur-po">
            Business with Dunzo
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-down"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="6 9 12 15 18 9" />
            </svg> */}
          </div>
          <div className="flex column absolute-center hover-change cur-po">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
            <div className="header-icon-text">Search</div>
          </div>
          <div className="flex column absolute-center hover-change cur-po">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 22"
              height="24px"
              width="28px"
              stroke="none !important"
              class="hover-change"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.63157 5.40623H21.8884L19.357 14.5507C19.2687 14.8695 18.9157 15.1454 18.6035 15.1454H9.58173C9.26462 15.1454 8.8854 14.865 8.7848 14.555L5.41478 4.16956C5.03411 2.99646 3.83391 1.77142 2.68401 1.38221L1.62819 1.02483C1.37735 0.939928 1.10694 1.07977 1.0242 1.33718C0.941461 1.59459 1.07773 1.87209 1.32857 1.95699L2.3844 2.31436C3.2477 2.60658 4.22223 3.60127 4.50727 4.47967L7.87729 14.8651C8.10804 15.5762 8.85293 16.1269 9.58173 16.1269H18.6035C19.3448 16.1269 20.0724 15.5584 20.2771 14.8189L22.9815 5.04956C23.0683 4.73621 22.8389 4.42467 22.5215 4.42467H8.63157C8.36744 4.42467 8.15332 4.6444 8.15332 4.91545C8.15332 5.1865 8.36744 5.40623 8.63157 5.40623ZM9.10644 21C8.05592 21 7.20358 20.1253 7.20358 19.0473C7.20358 17.9693 8.05592 17.0946 9.10644 17.0946C10.1569 17.0946 11.0093 17.9693 11.0093 19.0473C11.0093 20.1253 10.1569 21 9.10644 21ZM19.5535 21C18.503 21 17.6507 20.1253 17.6507 19.0473C17.6507 17.9693 18.503 17.0946 19.5535 17.0946C20.604 17.0946 21.4564 17.9693 21.4564 19.0473C21.4564 20.1253 20.604 21 19.5535 21ZM19.5535 20.0184C20.0758 20.0184 20.4999 19.5832 20.4999 19.0473C20.4999 18.5114 20.0758 18.0762 19.5535 18.0762C19.0313 18.0762 18.6072 18.5114 18.6072 19.0473C18.6072 19.5832 19.0313 20.0184 19.5535 20.0184ZM10.0528 19.0473C10.0528 19.5832 9.62869 20.0184 9.10644 20.0184C8.58419 20.0184 8.16008 19.5832 8.16008 19.0473C8.16008 18.5114 8.58419 18.0762 9.10644 18.0762C9.62869 18.0762 10.0528 18.5114 10.0528 19.0473Z"
              ></path>
            </svg>
            <div className="header-icon-text">Cart</div>
          </div>
          <NavLink to="/signup" className="header-button-link"><div className="header-button">Sign in</div></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
