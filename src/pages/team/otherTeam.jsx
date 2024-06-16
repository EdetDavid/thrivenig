import React from "react";
import img4 from "../../assets/images/team1.png";
import img5 from "../../assets/images/team2.png";
import "./Team.css";

const otherTeamMembers = [
  {
    imgSrc: img4,
    name: "Alice Johnson",
    position: "CEO",
    description: "Alice leads the company with a focus on innovation.",
  },
  {
    imgSrc: img5,
    name: "Bob Brown",
    position: "CTO",
    description: "Bob oversees all technical aspects of the company.",
  },
  {
    imgSrc: img4,
    name: "Carol White",
    position: "CFO",
    description: "Carol manages the company’s finances.",
  },
  {
    imgSrc: img5,
    name: "David Green",
    position: "COO",
    description: "David ensures operational excellence across the company.",
  },
  {
    imgSrc: img4,
    name: "David Green",
    position: "COO",
    description: "David ensures operational excellence across the company.",
  },
  {
    imgSrc: img5,
    name: "David Green",
    position: "COO",
    description: "David ensures operational excellence across the company.",
  },
  {
    imgSrc: img4,
    name: "David Green",
    position: "COO",
    description: "David ensures operational excellence across the company.",
  },
  {
    imgSrc: img5,
    name: "David Green",
    position: "COO",
    description: "David ensures operational excellence across the company.",
  },
];

const OtherTeamMembers = () => {
  return (
    <section className="m-5 ">
      <div className="container ">
        <div data-aos="fade-up" className="row mb-5 ">
          <div className="col text-center">
            <h2 className="fw-bold text-dark">Other Team Members</h2>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 shadow"
        >
          {otherTeamMembers.map((member, index) => (
            <div className="col shadow mx-auto" key={index}>
              <div className="card h-100 d-flex flex-column">
                <img
                  src={member.imgSrc}
                  className="card-img-top"
                  alt={member.name}
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{member.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {member.position}
                  </h6>
                  <p className="card-text flex-grow-1">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherTeamMembers;
