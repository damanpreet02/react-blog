import React from "react";
import img1 from "./HOME/img1.jpg";
import img2 from "./HOME/img2.jpg";
import img3 from "./HOME/img3.jpg";
import "./HOME/Home.css";
import L_grid from "./HOME/L_grid";
import Article_component from "./HOME/Article_component";
import Post_component from "./HOME/Post_component";
import Heading_component from "./HOME/Heading_component";
export default function Home() {
  return (
    <>
      {/* HEADER SECTION */}
      <section>
        <div className="maindiv">
          <div>
            <img src={img1} className="img1" alt="Image1"></img>
          </div>
          <div className="imgdiv">
            <img src={img2} className="img2" alt="Image2" />
            <img src={img3} className="img2" alt="Image3" />
          </div>
        </div>
      </section>
      {/* LATEST SECTION */}
      <section>
        <div className="Latest">
            <Heading_component text={"The Latest"}/>
          <div className="latest_grid_row">
            <L_grid />
            <L_grid />
            <L_grid />
          </div>
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section>
        <div className="art_post">
          
          <div className="post">
          <Heading_component text={"Top Posts"}/>
            <div className="art2">
              <Post_component/>
              <Post_component/>
              <Post_component/>
            </div>
          </div>
          <div className="article">
          <Heading_component text={"Latest Articles"}/>
            <div className="art2">
              <Article_component />
              <Article_component />
              <Article_component />
              <Article_component />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
