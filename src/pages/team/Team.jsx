import React from "react";
import male from "../../assets/images/male-avatar.png";
import female from "../../assets/images/female-avatar.png";
import remi from "../../assets/images/team/Remi.jpg";
import richard from "../../assets/images/team/Richard.jpeg";
import "./Team.css";

const managementTeam = [
  {
    imgSrc: male,
    name: "Akinwale Adedoyin",
    role: "Managing Director",
    bio: "Leads the company with a focus on innovation and long-term strategy.",
  },

  {
    imgSrc: male,
    name: "Opeyemi Okemakinde",
    role: "Chief Financial Officer",
    bio: "Leads the company with a focus on innovation and long-term strategy.",
  },

  {
    imgSrc: female,
    name: "Beatrice Diyan",
    role: " Head, H.R  & Admin",
    bio: "Leads product engineering and technology strategy.",
  },
  {
    imgSrc: richard,
    name: " Richard Katchy",
    role: "Head, Internal Audit",
    bio: "Oversees financial planning and investor relations.",
  },
  {
    imgSrc: remi,
    name: "Oluwaremilekun Adebowale",
    role: "Head, Branding and Corporate Communications",
    bio: "Runs operations and ensures delivery excellence.",
  },
];

const ManagementTeam = () => {
  return (
    <section className="m-5 ">
      <div className="container ">
        <div data-aos="fade-up" className="row mb-5 ">
          <div className="col text-center">
            <h2 className="fw-bold text-dark">Management Team</h2>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 shadow"
        >
          {managementTeam.map((member, index) => (
            <div className="col shadow" key={index}>
              <div className="card h-100 d-flex flex-column">
                <img
                  src={member.imgSrc}
                  className="card-img-top team-img"
                  alt={member.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{member.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {member.role}
                  </h6>
                  {/* <p className="card-text flex-grow-1">{member.bio}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
