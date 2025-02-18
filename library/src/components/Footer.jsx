import { SiThreadless } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import React from "react";
import "../style/Footer.css";
import logo from "../imgs/cropped-logo.webp";
export default function Footer() {
  const sections = [
    "كل الكتب",
    "روايات مترجمة",
    "روايات عربية",
    "روايات ثنائية اللغة",
    "تنمية ذاتية",
    "عام",
  ];

  const pages = [
    "كيفية الشراء",
    "تتبع طلباتي",
    "الأسئلة الشائعة",
    "اتصل بنا",
    "Privacy Policy",
    "الشروط والأحكام",
    "سياسة الاسترجاع",
    "الشحن والتوصيل",
  ];
  return (
    <div className="footer">
      <div className="container">
        <div className="foot_section">
          <h2>كن على تواصل</h2>
          <div className="social">
            <span>info@bluebookstores.com</span>
            <div className="icon">
              <AiTwotoneMail />
            </div>
          </div>
          <div className="social">
            <span>+201288286090</span>
            <div className="icon">
              <AiOutlineWhatsApp />
            </div>
          </div>
          <div className="social">
            <span>Facebook</span>
            <div className="icon">
              <AiFillFacebook />
            </div>
          </div>
          <div className="social">
            <span>Instgram</span>
            <div className="icon">
              <AiOutlineInstagram />
            </div>
          </div>
          <div className="social">
            <span>TikTok</span>
            <div className="icon">
              <FaTiktok />
            </div>
          </div>
          <div className="social">
            <span>threads</span>
            <div className="icon">
              <SiThreadless />
            </div>
          </div>
        </div>
        <div className="foot_section">
          <h2>صفحات</h2>
          <div className="foot_section_links">
            {pages.map((i, idx) => (
              <a href="" key={idx}>
                {i}
              </a>
            ))}
          </div>
        </div>
        <div className="foot_section">
          <h2>الأقسام</h2>
          <div className="foot_section_links">
            {sections.map((i, idx) => (
              <a href="" key={idx}>
                {i}
              </a>
            ))}
          </div>
        </div>
        <div className="foot_section">
          <img src={logo} alt="" />
          <div className="summary">
            <p>
              مكتبة "بلو" مكتبة رائدة في مجال بيع الكتب داخل مصر، و هي تضم
              تشكيلة استثنائية من أبرز و أهم العناوين العربية والأجنبية وبأسعار
              في متناول القارئ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
