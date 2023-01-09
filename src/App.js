import React from "react";
import "./styles.css";
import { useState } from "react";

const tvSeriesDB = {
  comedy: [
    {
      name: "Bojack Horseman",
      rating: "4/5",
      description:
        "BoJack Horseman was the star of the hit television show \"Horsin' Around\" in the '80s and '90s, but now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters."
    },
    {
      name: "The office",
      rating: "3.5/5",
      description:
        "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium."
    },
    {
      name: "Friends",
      rating: "4.5/5",
      description:
        "Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City."
    }
  ],

  drama: [
    {
      name: "Game of Thrones",
      rating: "5/5",
      description:
        "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
    },
    {
      name: "Breaking Bad",
      rating: "4.5/5",
      description:
        "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future."
    },
    {
      name: "Silicon Valley",
      rating: "4/5",
      description:
        "Follows the struggle of Richard Hendricks, a Silicon Valley engineer trying to build his own company called Pied Piper."
    }
  ],

  business: [
    {
      name: "Mad Men",
      rating: "4/5",
      description:
        "A drama about one of New York's most prestigious ad agencies at the beginning of the 1960s, focusing on one of the firm's most mysterious but extremely talented ad executives, Donald Draper."
    },
    {
      name: "Billions",
      rating: "5/5",
      description:
        "New money means no mercy as Mike Prince takes the Axe Capital throne. Chuck Rhoades is convinced no one should have that much wealth - or power. As all the players seek out new alliances, only one thing's for certain - wealth means war."
    },
    {
      name: "Suits",
      rating: "3.5/5",
      description:
        "On the run from a drug deal gone bad, brilliant college dropout Mike Ross finds himself working with Harvey Specter, one of New York City's best lawyers."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎥 TV Series 🍿</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite TV Series. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(tvSeriesDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {tvSeriesDB[selectedGenre].map((tvSeries) => (
            <li key={tvSeries.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {tvSeries.name} </div>
              <div style={{ fontSize: "smaller" }}>
                {" "}
                {tvSeries.description}{" "}
              </div>
              <div style={{ fontSize: "smaller", fontWeight: "bold" }}>
                {" "}
                {tvSeries.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
