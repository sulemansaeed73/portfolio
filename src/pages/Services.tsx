import React from "react";
import { servicesData } from "../DevData";
export default function Services() {
  return (
    <section id="services">
      <div className="service container">
        <div className="service-top">
          <h1 className="section-title">
            SERV<span>I</span>CES
          </h1>
          {/* <p style={{ textAlign: "justify" }}>{serviceDescription}</p> */}
        </div>
        <div className="service-bottom">
          {servicesData.map((item: any) => {
            return (
              <div className="service-item">
                <h2 style={{ textAlign: "left" }}>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
