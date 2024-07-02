import React from "react";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center m-auto p-26">
        <p className="text-xl m-auto p-24">
          TheMealDB was built in 2016 to provide a free data source api for
          recipes online in the hope that developers would build applications
          and cool projects ontop of it. TheMealDB originated on the Kodi forums
          as a way to browse recpies on your TV.
        </p>
      </div>
    </div>
  );
}

export default About;
