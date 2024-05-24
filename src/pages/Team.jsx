import React from "react";
import img1 from "../../assets/images/team/omotayo-ajani.png";
import img2 from "../../assets/images/team/director.png";
import img3 from "../../assets/images/team/tokunbo.png";
import img from "../../assets/images/city.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Image } from "react-bootstrap";

import "./Team.css";

const Team = () => {
  const boardOfDirectors = [
    {
      imgSrc: img1,
      name: "Omotayo Gabriel Moronkeji Ajani",
      position: "Chairman",
      description:
        "Omotayo Ajani, a 'University Scholar' holds a B.sc (Hons) in Accounting from the University of Ilorin, and also an Executive MBA from Lagos Business School Pan Atlantic(formerly known as Pan African) University and Banyor University, United Kingdom. Tayo is a Full Member of the Nigerian Institute of Management (Chartered), an Associate Member of Chartered Institute of Bankers of Nigeria(CIBN) and Scotland. Also, he is a Fellow of the Institute of Credit Administration. He started his banking career in 1992 as a Management Trainee in Kapital Merchant Bank Limited and Later joined Citibank Nigeria same year. He features over 23 years working experience (mostly as Head, Corporate Banking) with different foreign & Nigeria financial institutions including Citibank, Access Bank, UBA, Oceanic/ Ecobank & Keystone Bank. His areas of expertise incude Marketing and new Relationship Development, Deal Originating & Structuring, Leadership & People Management and Credit Analysis & Risk Management. Tayo's First stint in insurance started while acting as a Director of the board of KBL Healthcare Limited where he played a vital rolein turning the business froma loss to a profit making entity. He is currently the chairman of Thrive Insurance Brokers Limited",
      social: {
        twitter: "https://twitter.com/example2",
        linkedin: "https://www.linkedin.com/in/example2",
        facebook: "https://www.facebook.com/example2",
        instagram: "https://www.instagram.com/example2",
      },
    },
    {
      imgSrc: img2,
      name: "Akinwale Adegboyega Adedoyin",
      position: "MD | C.E.O",
      description:
        "Akinwale Adegboyega Adedoyin is the chief Executive officer (CEO) of Thrive Insurance Brokers Limited. He's a seasoned insurer and banker He holds a B.Sc (Hons) degree in Accounting as well as MBA in of Nigeria (ICAN); Fellow, The Chartered Secretaries and Administrators, London (ICSA) and Fellow, Institute of Chatered Secretaries and Administrators, London (ICSA) and Fellow, The Chartered Institute of Bankers of Nigeria (CIBN). He is also an Associate member of many professional bodies amongst which are Chartered Institute of Insurance of Nigeria and The Chartered Institute of Taxation of Nigeria. He has experience in various sectors of the economy spanning over twenty-five (25) years amongs which are Ogun State Broadcasting Corporation (Gateway Radio), Abeokuta, Guinea insurance Plcc, Excel Insurance Brokers and Coral International Insurance Company Limited, BD) OFO Consulting Limited (an offshoot of Coopers and Lybrand), Intercontinental Bank Plc, Intercontinental Finance and Investment Limited and Acceess Bank Plc  among others.",
      social: {
        twitter: "https://twitter.com/example2",
        linkedin: "https://www.linkedin.com/in/example2",
        facebook: "https://www.facebook.com/example2",
        instagram: "https://www.instagram.com/example2",
      },
    },

    {
      imgSrc: img3,
      name: "Tokunbo Abiola Olayiwola",
      position: "Executive Director",
      description:
        "Tokunbo Abiola Olayiwola holds a B.Sc. (Hons) in Geology from the federal University of Technology Minna. She has garnered over 8 years working experience with leading insurance and financial institutions. Tokunbo started her Insurance career with Mutual Benefits Insurance Plc where she played a key role in business development in the Ikoyi region. She had also handled different Marketing and Business Defvelopment functions while working with Law Union and Rock Insurance Plc. Her experiences spans  across Product Development, Sales & marketing, Business Development and Financial Management. She is an Executive Director at Thrive Insurance Brokers Limited. Tokunbo is also an Executive  Director on the board of Paradise Forex BDC Limited. She is currently at the concluding stage stage of being a Chartered Insurer (CII UK).",
      social: {
        twitter: "https://twitter.com/example2",
        linkedin: "https://www.linkedin.com/in/example2",
        facebook: "https://www.facebook.com/example2",
        instagram: "https://www.instagram.com/example2",
      },
    },
  ];

  return (
    <div className="container-fluid px-0">
      <div className="header-container">
        <Image src={img} className="header-image h-24" />
        <p className="header-text gray-text-shadow">Board of Directors</p>
      </div>
      <div className="container">
        <div className="d-flex flex-column mt-5 pt-5">
          {boardOfDirectors.map((member, index) => (
            <div className="card mb-5" style={{ maxWidth: "100%" }} key={index}>
              <div className="row no-gutters ">
                <div className="col-md-5">
                  <img
                    src={member.imgSrc}
                    className="img-fluid w-100 rounded-start"
                    alt={member.name}
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h5 className="card-title font-bold fs-2">{member.name}</h5>
                    <h6 className="card-subtitle mb-2 fs-4 text-muted">
                      {member.position}
                    </h6>
                    <p className="card-text flex-wrap fs-6">
                      {member.description}
                    </p>
                    <div className="social-links ">
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter className="text-info mx-1" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="text-primary mx-1" />
                      </a>
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook className="text-primary mx-1" />
                      </a>
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram className="text-danger mx-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Team;
