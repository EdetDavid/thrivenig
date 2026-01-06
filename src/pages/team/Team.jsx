import React from "react";
import male from "../../assets/images/male-avatar.png";
import female from "../../assets/images/female-avatar.png";
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
    role: "Chief Finance Officer",
    bio: "Leads the company with a focus on innovation and long-term strategy.",
  },

  {
    imgSrc: male,
    name: " Richard Katchy",
    role: "Head, Internal Audit",
    bio: "Oversees financial planning and investor relations.",
  },

  {
    imgSrc: female,
    name: "Beatrice Diyan",
    role: " Head, H.R  & Admin",
    bio: "Leads product engineering and technology strategy.",
  },
  {
    imgSrc: female,
    name: "Oluwaremilekun Adebowale",
    role: "Head, Branding and Corporate Communications",
    bio: "Runs operations and ensures delivery excellence.",
  },
];

const ManagementTeam = () => {
  return (
    <section className="management-team-section">
      <div className="container">
        <header className="management-header">
          <h2 className="management-title">Management Team</h2>
          <p className="management-subtitle">
            Experienced leadership driving business performance.
          </p>
        </header>

        <div className="management-grid">
          {managementTeam.map((m, i) => (
            <article className="management-card" key={i} tabIndex={0}>
              <div className="card-media">
                <img src={m.imgSrc} alt={m.name} className="card-photo" />
              </div>
              <div className="card-body">
                <h3 className="card-name">{m.name}</h3>
                <p className="card-role">{m.role}</p>
                {/* <p className="card-bio">{m.bio}</p> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
