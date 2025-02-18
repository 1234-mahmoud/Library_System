import { FaTruck } from "react-icons/fa";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import React from "react";
import "../style/Library_Services.css";
export default function LibraryServices() {
  return (
    <div className="services">
      <div className="container">
        <div className="service">
          <div className="serv_cont">
            <span>دعم فني 24/7 عبر الواتساب</span>
            <span>تواصل معنا 201288286090+</span>
          </div>
          <div className="serv_icon">
            <FaWhatsapp />
          </div>
        </div>
        {/* ------------- */}
        <div className="service">
          <div className="serv_cont">
            <span>تخفيضات حصرية</span>
            <span>.عروض و خصومات طوال العام</span>
          </div>
          <div className="serv_icon">
            <FaMoneyBillWaveAlt />
          </div>
        </div>
        {/* ------------- */}
        <div className="service">
          <div className="serv_cont">
            <span>شحن سريع</span>
            <span>.شحن سريع حتى باب المنزل</span>
          </div>
          <div className="serv_icon">
            <FaTruck />
          </div>
        </div>
      </div>
    </div>
  );
}
