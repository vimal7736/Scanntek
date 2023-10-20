
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-heading">
        <h1>ABOUT US</h1>
      </div>
      <div className="about-description">
        {/* <h3>
          Consistently delivers business intelligence applications offers a
          comprehensive end to end solution for retailers in all verticals
          integrated approach on problem solving through onsite/offshore global
          delivery model supply and maintenance of hardware including touch POS
          machines,CCTV digital marketing-development of tools as per the
          coustomer requirement and hosting in different platforms.
        </h3> */}
        <h3>
          "We consistently deliver business intelligence applications, offering
          a comprehensive end-to-end solution for retailers across all
          verticals. Our integrated approach to problem-solving includes an
          onsite/offshore global delivery model. We provide the supply and
          maintenance of hardware, including touch POS machines and CCTV
          systems. Additionally, we specialize in digital marketing, developing
          tools tailored to customer requirements and hosting them on various
          platforms."
        </h3>
      </div>
      <div className="about-sections">
        {/* Repeat this section for each of the four boxes */}
        <div className="about-section">
          <p>
            Helps you create a better enterprise reporting system to guide your
            overall business intelligence strategy and deliver meaningful
            insights to your employees, customers and partners
          </p>
        </div>
        <div className="about-section">
          <p>
            Tackles the entire spectrum of enterprise functionalities, including
            finance, assets, field force mobility, human resource,
            analytics,customer relationship and planning
          </p>
        </div>
        <div className="about-section">
          <p>
            Promote better decision-making across your organization with
            compelling insightful data dashboards.
          </p>
        </div>
        <div className="about-section">
          <p>
            ForzaERP empowers businesses with data analytics tools to turn
            information into actionable insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
