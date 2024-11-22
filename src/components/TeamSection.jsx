import React from "react";
import "../App.css";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"; 

import arpanImg from "../assets/Images/Arpan1.jpg";
import priyanshuImg from "../assets/Images/Priyanshu.png";
import akshayImg from "../assets/Images/akshay.jpg";
import unnatiImg from "../assets/Images/unnati.jpg";
import gurpreetImg from "../assets/Images/gurpreet.jpg";
import himanshuImg from "../assets/Images/Himanshu.jpg";
import sakshamImg from "../assets/Images/Saksham.jpg";
import arhamLogo from "../assets/Images/logo final arham-02.svg";

function TeamSection() {
    const teamMembers = [
        {
            name: "Arpan Jain",
            role: "President",
            description:
                "lorem is our co-founder and has developed search strategies for a variety of clients from international brands to medium-sized businesses for over five years.",
            imgSrc: arpanImg,
            socialLinks: [
                { platform: "Instagram", url: "https://www.instagram.com/jainarpan1784._/profilecard/?igsh=dTZ5c2d3N2NkeDN3", icon: <FaInstagram /> },
                { platform: "Linkedin", url: "https://www.linkedin.com/in/arpan-jain-1784kpbb", icon: <FaLinkedin /> },
                { platform: "WhatsApp", url: "https://wa.me/+917900350168 ", icon: <FaWhatsapp /> },
            ],
        },
        {
            name: "himanshu Raj",
            role: "Vice President",
            description:
                "first fell in love with digital marketing at the university. He loves to learn and looks forward to being part of this exciting industry for many years.",
            imgSrc: himanshuImg,
            socialLinks: [
                { platform: "Instagram", url: "https://www.instagram.com/himanshuydv._?igsh=bmR1YmJqYjJxeWRp", icon: <FaInstagram /> },
                { platform: "Linkedin", url: " https://www.linkedin.com/in/himanshu-raj-6739b6162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin /> },
                { platform: "WhatsApp", url: "https://wa.me/+918510815857  ", icon: <FaWhatsapp /> },
            ],
        },
        {
            name: "Priyanshu Sharma",
            role: "Treasurer",
            description:
                "Graduating with a degree in Spanish and English, Alexandra has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency.",
            imgSrc: priyanshuImg,
            socialLinks: [
                { platform: "Instagram", url: " https://www.instagram.com/priyanshu__tanuj/", icon: <FaInstagram /> },
                { platform: "Linkedin", url: "https://www.linkedin.com/in/priyanshu-tanuj/", icon: <FaLinkedin /> },
                { platform: "WhatsApp", url: "https://wa.me/+918851831657  ", icon: <FaWhatsapp /> },
            ],
        },
        {
            name: "Saksham",
            role: "Joint Secretary",
            description:
                "Elisa first fell in love with digital marketing at the university. He loves to learn and looks forward to being part of this exciting industry for many years.",
            imgSrc: sakshamImg,
            socialLinks: [
                { platform: "Instagram", url: "https://www.instagram.com/saksham.mittal.01/", icon: <FaInstagram /> },
                { platform: "Linkedin", url: " https://www.linkedin.com/in/saksham-mittal-9980182bb/", icon: <FaLinkedin /> },
                { platform: "WhatsApp", url: " https://wa.me/+918979111597 ", icon: <FaWhatsapp /> },
            ],
        },
        
        {
            name: "Unnati Jain",
            role: "Gen. Secretary",
            description:
                "first fell in love with digital marketing at the university. He loves to learn and looks forward to being part of this exciting industry for many years.",
            imgSrc: unnatiImg,
            socialLinks: [
                { platform: "Instagram", url: "https://www.instagram.com/unnati.jain8/", icon: <FaInstagram /> },
                { platform: "Linkedin", url: "https://www.linkedin.com/in/unnati-jain-46657a28b/", icon: <FaLinkedin /> },
                { platform: "WhatsApp", url: "https://wa.me/+917827731527 ", icon: <FaWhatsapp /> },
            ],
        },
        
        {
            name: "Gurpreet Singh",
            role: "Oprations Lead",
            description:
                "first fell in love with digital marketing at the university. He loves to learn and looks forward to being part of this exciting industry for many years.",
            imgSrc: gurpreetImg,
            socialLinks: [
                { platform: "Instagram", url: "https://www.instagram.com/gurpreet_1212/profilecard/?igsh=cG9zb2M4OTJqb2tr", icon: <FaInstagram /> },
                { platform: "Linkedin", url: "https://www.linkedin.com/in/gurpreet-singh-satha-087137263/", icon: <FaLinkedin /> },
                { platform: "WhatsApp", url: "https://wa.me/+918279742174  ", icon: <FaWhatsapp /> },
            ],
        },
        {
            name: "Akshay Chinta",
            role: "Student Lead",
            description:
                "first fell in love with digital marketing at the university. He loves to learn and looks forward to being part of this exciting industry for many years.",
            imgSrc: akshayImg,
            socialLinks: [
                { platform: "Instagram", url: "https://www.instagram.com/akshay_chinta/profilecard/?igsh=MXJ4bWx4Zm53a2xiNA==", icon: <FaInstagram /> },
                { platform: "Linkedin", url: "https://www.linkedin.com/in/akshay-chinta-12189b1ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: <FaLinkedin /> },
                { platform: "WhatsApp", url: "https://wa.me/+919347786595 ", icon: <FaWhatsapp /> },
            ],
        },
    ];

    return (
        <section className="team-section">
            <div className="team-container">
                <img src={arhamLogo} alt="arham Logo" className="arham-logo" />
                <h2 className="team-title">Meet Our Office Bearers</h2>
                
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <img src={member.imgSrc} alt={member.name} className="team-img" />
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <p className="team-description">{member.description}</p>
                            <div className="team-social">
                                {member.socialLinks.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="team-social-link"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
