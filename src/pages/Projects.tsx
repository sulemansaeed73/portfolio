import React from "react";
import { recentProjects } from "../DevData";
export default function Projects() {
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
            Recent <span>Projects</span>
          </h1>
        </div>
        <div className="all-projects">
          {recentProjects.map((item, index) => {
            return (
              <div>
                <div className="project-item">
                  <div className="project-info">
                    <h1>Project {index + 1}</h1>
                    <h2
                      style={{ fontWeight: "bold", color: "rgb(45, 85, 255)" }}
                    >
                      {item.subTitle}
                    </h2>
                    <a
                      style={{ color: "white", fontSize: "15px" }}
                      href={item.link}
                    >
                      {item.link}
                    </a>
                    <p>{item.description}</p>
                  </div>
                  <div className="project-image">
                    <img src={item.img} alt="" />
                  </div>
                </div>
                <div className="side_img">
                  <img src={item.img2} alt="" className="side1" />
                  <img src={item.img3} alt="" className="side1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
