import React from "react";

import { useState } from "react";

var tourismplaceslist = {
  BeachAreas: [
    { name: "Bali,Indonesia", review: "4.5/5" },
    { name: "Maui,Hawaii", review:"4/5" },
    { name: "Grenada", review:"3.5/5" }
  ],

NaturalAreas: [
    {
      name: "The Stary Bioluminescent Waves",
      review: "5/5"
    },
    {
      name: "The Columns At Fingal's Cave",
      review: "4.5/5"
    },
    {
      name: "The Massive Pit of the Fire At the Darvaza Gas Crater",
      review: "3.5/5"
    }
  ],
  WinterSpotAreas: [
    {
      name: "Chisinau,Moldova",
      review: "4/5"
    },
    {
      name: "Prague,Czech Republic",
      review: "3.5/5"
    },
    {
      name: "Dubai,UAE",
      review: "3/5"
    }
  ]
  };

export default function App() {
  const [selectedType, setType] = useState("BeachAreas");
  function ClickHandler(type) {
    setType(type);
  }
  return (
    <div className="App">
      <h1 >World's Best ✈️✈️Travelling Places  </h1>
      
       <div>
        {Object.keys(tourismplaceslist).map((type) => (
          <button
            onClick={() => ClickHandler(type)}
            style={{
              cursor: "pointer",
              background: "#0066FF",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              borderRadius: "10px",
              margin: "1rem 0.3rem",
              color: "white",
              width: "10rem"
            }}
          >
            {type}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {tourismplaceslist[selectedType].map((places) => (
            <li
              key={places.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                color: "#00CCFF",
                width: "70%",
                margin: "1rem 0rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {places.name} </div>
              <div style={{ fontSize: "smaller" }}> {places.review} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

