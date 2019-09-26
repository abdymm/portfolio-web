import React from "react";

function Experience() {
  return (
    <section className="experience-section section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <div className="heading">
              <h3>
                <b>Work Experience</b>
              </h3>
              <h6 className="font-lite-black">
                <b>PREVIOUS JOBS</b>
              </h6>
            </div>
          </div>
          {/* col-sm-3 */}
          <div className="col-sm-12 col-md-9">
            <div className="experience margin-b-50">
              <h4>
                <b>JUNIOR PROJECT MANAGER</b>
              </h4>
              <h5 className="font-yellow">
                <b>DESIGN STUDIO</b>
              </h5>
              <h6 className="font-lite-black margin-t-10">
                MARCH 2015 - PRESENT
              </h6>
              <p className="margin-tb-30">
                Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam
                neque sit amet sodales. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nulla maximus pellentes que velit, quis
                consequat nulla effi citur at. Maecenas sed massa tristique.Duis
                non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque
                sit amet sodales.{" "}
              </p>
              <ul className="list margin-b-30">
                <li>Duis non volutpat arcu, eu mollis tellus.</li>
                <li>Quis consequat nulla effi citur at.</li>
                <li>Sed finibus aliquam neque sit.</li>
              </ul>
            </div>
            {/* experience */}
            <div className="experience margin-b-50">
              <h4>
                <b>WEB MASTER/WEB DEVELOPER</b>
              </h4>
              <h5 className="font-yellow">
                <b>DESIGN &amp; WEB STUDIO</b>
              </h5>
              <h6 className="font-lite-black margin-t-10">
                APRIL 2014 - FEBRUARY 2015
              </h6>
              <p className="margin-tb-30">
                Duis non volutpat arcu, eu mollis tellus. Sed finibus aliquam
                neque sit amet sodales. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nulla maximus pellentes que velit, quis
                consequat nulla effi citur at. Maecenas sed massa tristique.Duis
                non volutpat arcu, eu mollis tellus. Sed finibus aliquam neque
                sit amet sodales.{" "}
              </p>
              <ul className="list">
                <li>Duis non volutpat arcu, eu mollis tellus.</li>
                <li>Quis consequat nulla effi citur at.</li>
                <li>Sed finibus aliquam neque sit.</li>
              </ul>
            </div>
            {/* experience */}
          </div>
          {/* col-sm-9 */}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
}

export default Experience;
