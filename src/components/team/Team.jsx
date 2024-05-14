import React, { useState } from "react";
import { BsTwitter, BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import Modal from "../Modal";
import tayo from "../../assets/images/team/omotayo-ajani.png";
import director from "../../assets/images/team/director.png";
import oluwatoyin from "../../assets/images/team/oluwatoyin.png";
import tokunbo from "../../assets/images/team/tokunbo.png";
import "./Team.css";
import colors from "../../config/colors";

const Team = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  const members = [
    {
      name: "Omotayo Ajani",
      image: tayo,
      description:
        "Omotayo Ajani, a 'University Scholar' holds a B.sc (Hons) in Accounting from the University of Ilorin, and also an Executive MBA from Lagos Business School Pan Atlantic(formerly known as Pan African) University and Banyor University, United Kingdom. ",
    },
    {
      name: "Akinwale Adegboyega Adedoyin",
      image: director,
      description:
        "Akinwale Adegboyega Adedoyin is the chief Executive officer (CEO) of Thrive Insurance Brokers Limited. He's a seasoned insurer and banker He holds a B.Sc (Hons) degree in Accounting as well as MBA in of Nigeria (ICAN).",
    },
    {
      name: "Oluwatoyin Adewuyi",
      image: oluwatoyin,
      description:
        "Oluwatoyin Adewuyi holds a Bachelor of Technology degree in Transport Management from Ladoke Akintola University of Technology, Ogbomosho with specialization on Aviation and Maritime. She has a Diploma in Foundation on Travel and Tourism (IATA). ",
    },
    {
      name: "Tokunbo Abiola Olayiwola",
      image: tokunbo,
      description:
        "Tokunbo Abiola Olayiwola holds a B.Sc. (Hons) in Geology from the federal University of Technology Minna. She has garnered over 8 years working experience with leading insurance and financial institutions. ",
    },
  ];

  const membersLong = [
    {
      name: "Omotayo Ajani",
      image: tayo,
      description:
        "Omotayo Ajani, a 'University Scholar' holds a B.sc (Hons) in Accounting from the University of Ilorin, and also an Executive MBA from Lagos Business School Pan Atlantic(formerly known as Pan African) University and Banyor University, United Kingdom. Tayo is a Full Member of the Nigerian Institute of Management (Chartered), an Associate Member of Chartered Institute of Bankers of Nigeria(CIBN) and Scotland. Also, he is a Fellow of the Institute of Credit Administration. He started his banking career in 1992 as a Management Trainee in Kapital Merchant Bank Limited and Later joined Citibank Nigeria same year. He features over 23 years working experience (mostly as Head, Corporate Banking) with different foreign & Nigeria financial institutions including Citibank, Access Bank, UBA, Oceanic/ Ecobank & Keystone Bank. His areas of expertise incude Marketing and new Relationship Development, Deal Originating & Structuring, Leadership & People Management and Credit Analysis & Risk Management. Tayo's First stint in insurance started while acting as a Director of the board of KBL Healthcare Limited where he played a vital rolein turning the business froma loss to a profit making entity. He is currently the chairman of Thrive Insurance Brokers Limited",
    },
    {
      name: "Akinwale Adegboyega Adedoyin",
      image: director,
      description:
        "Akinwale Adegboyega Adedoyin is the chief Executive officer (CEO) of Thrive Insurance Brokers Limited. He's a seasoned insurer and banker He holds a B.Sc (Hons) degree in Accounting as well as MBA in of Nigeria (ICAN); Fellow, The Chartered Secretaries and Administrators, London (ICSA) and Fellow, Institute of Chatered Secretaries and Administrators, London (ICSA) and Fellow, The Chartered Institute of Bankers of Nigeria (CIBN). He is also an Associate member of many professional bodies amongst which are Chartered Institute of Insurance of Nigeria and The Chartered Institute of Taxation of Nigeria. He has experience in various sectors of the economy spanning over twenty-five (25) years amongs which are Ogun State Broadcasting Corporation (Gateway Radio), Abeokuta, Guinea insurance Plcc, Excel Insurance Brokers and Coral International Insurance Company Limited, BD) OFO Consulting Limited (an offshoot of Coopers and Lybrand), Intercontinental Bank Plc, Intercontinental Finance and Investment Limited and Acceess Bank Plc  among others.",
    },
    {
      name: "Oluwatoyin Adewuyi",
      image: oluwatoyin,
      description:
        "Oluwatoyin Adewuyi holds a Bachelor of Technology degree in Transport Management from Ladoke Akintola University of Technology, Ogbomosho with specialization on Aviation and Maritime. She has a Diploma in Foundation on Travel and Tourism (IATA). She also has Master's degree in Transportation Planning and Management from the prestigious University of Lagos(UNILAG). Toyin has worked with different organizations in the Financial Institutions, Transportation and Maritime sectors ranging from Sterling Bank Plc, Bollore Africa Logistics (SDV), Lagos State Ministry of Transportation and Vehicle Licensing and Inspection Office. She has token several training in the areas of Travels, Tourisms, Airfares and Ticketing, IATA/UFTAA. She's also an expert on all GDS portal. Her interest in Transportation Management, Travels and Tourism started from the youthful years. Hence, her decision to choose a related career path as reflected in the educational background and work experience. Oluwatoyin was recently appointed as an Executive Director of Thrive Travels & Tours Limited.",
    },
    {
      name: "Tokunbo Abiola Olayiwola",
      image: tokunbo,
      description:
        "Tokunbo Abiola Olayiwola holds a B.Sc. (Hons) in Geology from the federal University of Technology Minna. She has garnered over 8 years working experience with leading insurance and financial institutions. Tokunbo started her Insurance career with Mutual Benefits Insurance Plc where she played a key role in business development in the Ikoyi region. She had also handled different Marketing and Business Defvelopment functions while working with Law Union and Rock Insurance Plc. Her experiences spans  across Product Development, Sales & marketing, Business Development and Financial Management. She is an Executive Director at Thrive Insurance Brokers Limited. Tokunbo is also an Executive  Director on the board of Paradise Forex BDC Limited. She is currently at the concluding stage stage of being a Chartered Insurer (CII UK).",
    },
  ];

  return (
    <>
      <section
        style={{ backgroundColor: colors.blue }}
        id="instructors"
        className="p-5"
      >
        <div className="container">
          <h2 className="text-center text-white" id="instructors">
            Board of Directors
          </h2>
          <div className="row">
            {members.map((member, index) => (
              <div key={index} id="box" className="col-sm-12 col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img
                      src={member.image}
                      className="img-fluid rounded-circle w-50 mb-4"
                      alt=""
                    />
                    <h5 className="card-title text-dark mb-3">{member.name}</h5>

                    <p className="card-text text-muted ">
                      {member.description}
                    </p>

                    <div className="d-flex flex-column align-items-center">
                      <button
                        onClick={() => openModal(member)}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Read More
                      </button>
                      <div className="d-flex mt-2 align-items-center">
                        <a href="#home">
                          <BsTwitter className="text-dark mx-2" />
                        </a>
                        <a href="#home">
                          <BsFacebook className="text-dark mx-2" />
                        </a>
                        <a href="#home">
                          <BsLinkedin className="text-dark mx-2" />
                        </a>
                        <a href="#home">
                          <BsInstagram className="text-dark mx-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {showModal && (
        <Modal
          member={selectedMember}
          closeModal={closeModal}
          membersLong={membersLong}
        />
      )}
    </>
  );
};

export default Team;
