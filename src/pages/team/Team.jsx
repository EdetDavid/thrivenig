import React, {  useMemo } from "react";
import male from "../../assets/images/male-avatar.png";
import female from "../../assets/images/female-avatar.png";
import remi from "../../assets/images/team/Remi.jpg";
import richard from "../../assets/images/team/Richard.jpeg";
import akinwale from "../../assets/images/directors/AKINWALE.png";
import "./Team.css";

const TEAM_MEMBERS = [
  {
    id: "akinwale-adedoyin",
    imgSrc: akinwale,
    name: "Akinwale Adedoyin",
    role: "Managing Director",
    bio: "Leads the company with a focus on innovation and long-term strategy.",
    department: "Executive",
  },

  {
    id: "opeyemi-okemakinde",
    imgSrc: male,
    name: "Opeyemi Okemakinde",
    role: "Chief Financial Officer",
    bio: "Leads the company with a focus on innovation and long-term strategy.",
    department: "Finance",
  },

  {
    id: "richard-katchy",
    imgSrc: richard,
    name: "Richard Katchy",
    role: "Head, Internal Audit",
    bio: "Oversees financial planning and investor relations.",
    department: "Finance",
  },
  {
    id: "beatrice-diyan",
    imgSrc: female,
    name: "Beatrice Diyan",
    role: "Head, H.R & Admin",
    bio: "Leads product engineering and technology strategy.",
    department: "Human Resources",
  },
  {
    id: "oluwaremilekun-adebowale",
    imgSrc: remi,
    name: "Oluwaremilekun Adebowale",
    role: "Head, Branding and Corporate Communications",
    bio: "Runs operations and ensures delivery excellence.",
    department: "Branding & Communications",
  },
];

/**
 * TeamMemberCard - Displays individual team member information
 * @component
 */
const TeamMemberCard = React.memo(({ member }) => {
  return (
    <div className="team-member-card-wrapper">
      <article className="team-member-card" data-member-id={member.id}>
        {/* Image Container */}
        <div className="team-member-image">
          <img
            src={member.imgSrc}
            alt={member.name}
            className="team-member-photo"
            loading="lazy"
            title={member.name}
          />
          <div className="team-member-overlay" />
        </div>

        {/* Content Container */}
        <div className="team-member-content">
          <header className="team-member-header">
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
          </header>

          <footer className="team-member-footer">
            <span className="team-member-department">{member.department}</span>
          </footer>
        </div>
      </article>
    </div>
  );
});

TeamMemberCard.displayName = "TeamMemberCard";

/**
 * SectionHeader - Displays section title and description
 * @component
 */
const SectionHeader = () => (
  <div className="team-section-header" data-aos="fade-up">
    <div className="team-header-content">
      <h2 className="team-section-title">Management Team</h2>
      <p className="team-section-description">
        Meet our leadership team driving innovation and excellence
      </p>
    </div>
  </div>
);

/**
 * TeamGrid - Container for team member cards
 * @component
 */
const TeamGrid = ({ members }) => (
  <div className="team-grid-wrapper" data-aos="zoom-in">
    <div className="team-grid">
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  </div>
);

/**
 * ManagementTeam - Main team page component
 * Displays the complete management team with organized layout
 * @component
 */
const ManagementTeam = () => {
  const teamMembers = useMemo(() => TEAM_MEMBERS, []);

  return (
    <section
      className="management-team-section"
      aria-label="Management Team"
    >
      <div className="team-container">
        <SectionHeader />
        <TeamGrid members={teamMembers} />
      </div>
    </section>
  );
};

export default ManagementTeam;
