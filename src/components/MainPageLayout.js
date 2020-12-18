import React from "react";
import Navs from "./Navs";
import Title from "./Title";

function MainPageLayout({ children }) {
  return (
    <div>
      <div>
        <Title
          title="Custom IMDB"
          subtitle="Are you looking for a movie or an actor ?"
        />
        <Navs />
        {children}
      </div>
    </div>
  );
}

export default MainPageLayout;
