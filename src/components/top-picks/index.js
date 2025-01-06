import React from "react";
import { TOP_PICKS } from "../../common/data";
import "./top-picks.css";

const TopPicks = () => {
  return (
    <div className="top-picks max-width">
      <div className="">
        <div className="top-picks-title">Top picks for you</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64px"
            height="7px"
            display="block"
            fill="#25D366"
            viewBox="0 0 57 4"
            class="sc-64ptou-0 fRuWqJ"
          >
            <rect width="39" height="4" rx="2"></rect>
            <rect x="43" width="14" height="4" rx="2"></rect>
          </svg>
        </div>
      </div>
      <div className="top-picks-cards flex">
        <div className="col-md-12">
          <div className="row">
            {TOP_PICKS.map((pick) => (
              <div className="col-md-3 col-xs-10 mt-3">  
                <img
                  src={pick.banner}
                  alt={pick.banner}
                  className="top-picks-card cur-po img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
