"use client";

import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { information } from "../data/information.js";
import Link from "next/link.js";
import { MdMail } from "react-icons/md";
import { IoLocationSharp, IoCheckmarkCircle } from "react-icons/io5";
import Button3 from "./button-3.jsx";
import ButtonSubmit from "./button-submit.jsx";
import RubberWrapper from "./rubber-wrapper.jsx";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    projectType: "",
    pages: "",
    budget: "",
    preferredResponse: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactList = [
    {
      name: "Whatsapp",
      value: information.whatsapp,
      href: `https://wa.me/${information.whatsapp.replace(/[^0-9]/g, "")}`,
      icon: <FaWhatsapp className="text-xl" />,
    },
    {
      name: "Email",
      value: information.email,
      href: `mailto:${information.email}`,
      icon: <MdMail className="text-xl" />,
    },
    {
      name: "Instagram",
      value: information.instagram,
      href: `https://instagram.com/${information.instagram.replace("@", "")}`,
      icon: <FaInstagram className="text-xl" />,
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Project Inquiry from ${formData.name} (${formData.projectType})`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsModalOpen(true);
        setFormData({
          name: "",
          email: "",
          country: "",
          phone: "",
          projectType: "",
          pages: "",
          budget: "",
          preferredResponse: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-[100dvh] w-full grid grid-cols-1 grid-rows-1 px-4 lg:px-56 font-poppins">
      {/* MODAL SUCCESS POP-UP */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/20 backdrop-blur-md px-4">
          <div className="w-full max-w-md p-8 rounded-2xl bg-primary border border-second3/20 shadow-2xl flex flex-col items-center text-center gap-6">
            <div className="w-16 h-16 rounded-full border border-second3/20 flex items-center justify-center text-second3 text-3xl">
              <IoCheckmarkCircle />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-second3">Message Sent!</h3>
              <p className="text-sm text-second3/70 font-light leading-relaxed">
                Thank you for reaching out. I have received your project details
                and will get back to you soon.
              </p>
            </div>

            {/* Tombol Modal Pake ButtonSubmit */}
            <ButtonSubmit
              type="button"
              text="Got it, thanks!"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
      {/* JUDUL SECTION */}
      <div className="row-start-1 row-end-2 col-start-1 z-5 col-end-2 w-full h-full flex flex-col relative">
        <h2 className="text-4xl lg:text-9xl text-center font-semibold text-second3 pt-40">
          Let&apos;s Connect{" "}
        </h2>
        {/* KONTEN UTAMA (FORM + INFO KANAN) */}
        <div className="relative row-start-1 row-end-2 col-start-1 z-10 col-end-2 flex flex-col lg:flex-row mt-8 lg:-mt-8  gap-8">
          {/* --- KOTAK KIRI: FORM START YOUR PROJECT --- */}
          <div className="h-full w-full border-[1px] border-second3/20 backdrop-blur-sm bg-primary/20 rounded-xl p-8 flex flex-col gap-8">
            <div>
              <h3 className="text-3xl font-bold text-second3">
                Start Your Project
              </h3>
              <p className="text-second3/70 text-sm mt-1 font-light">
                Let us know how we can help bring your idea to life.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 text-sm"
            >
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-second3 font-medium">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-primary border border-second3/20 rounded-lg p-3 text-second3 placeholder:text-second3/30 focus:outline-none focus:border-second3 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-second3 font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-primary border border-second3/20 rounded-lg p-3 text-second3 placeholder:text-second3/30 focus:outline-none focus:border-second3 transition-colors"
                  />
                </div>
              </div>

              {/* Country & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-second3 font-medium">Country *</label>
                  <input
                    type="text"
                    name="country"
                    required
                    placeholder="Indonesia"
                    value={formData.country}
                    onChange={handleChange}
                    className="bg-primary border border-second3/20 rounded-lg p-3 text-second3 placeholder:text-second3/30 focus:outline-none focus:border-second3 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-second3 font-medium">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+62 8xx xxxx xxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-primary border border-second3/20 rounded-lg p-3 text-second3 placeholder:text-second3/30 focus:outline-none focus:border-second3 transition-colors"
                  />
                </div>
              </div>

              {/* Project Type & Number of Pages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-second3 font-medium">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="bg-primary border border-second3/20 rounded-lg p-3 text-second3 focus:outline-none focus:border-second3 transition-colors cursor-pointer"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-primary text-second3"
                    >
                      Select...
                    </option>
                    <option
                      value="Landing Page"
                      className="bg-primary text-second3"
                    >
                      Landing Page
                    </option>
                    <option
                      value="Business Website"
                      className="bg-primary text-second3"
                    >
                      Business Website
                    </option>
                    <option
                      value="Custom Web Application"
                      className="bg-primary text-second3"
                    >
                      Custom Web Application
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-second3 font-medium">
                    Number of pages
                  </label>
                  <select
                    name="pages"
                    value={formData.pages}
                    onChange={handleChange}
                    className="bg-primary border border-second3/20 rounded-lg p-3 text-second3 focus:outline-none focus:border-second3 transition-colors cursor-pointer"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-primary text-second3"
                    >
                      Select...
                    </option>
                    <option value="1 – 3" className="bg-primary text-second3">
                      1 – 3
                    </option>
                    <option value="4 – 6" className="bg-primary text-second3">
                      4 – 6
                    </option>
                    <option value="7 – 10" className="bg-primary text-second3">
                      7 – 10
                    </option>
                    <option value="10+" className="bg-primary text-second3">
                      10+
                    </option>
                    <option
                      value="Not sure yet"
                      className="bg-primary text-second3"
                    >
                      Not sure yet
                    </option>
                  </select>
                </div>
              </div>

              {/* Budget Range & Preferred Response Method */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-second3 font-medium">
                    Budget range *
                  </label>
                  <select
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="bg-primary border border-second3/20 rounded-lg p-3 text-second3 focus:outline-none focus:border-second3 transition-colors cursor-pointer"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-primary text-second3"
                    >
                      Select budget range...
                    </option>
                    <option
                      value="199 - 499"
                      className="bg-primary text-second3"
                    >
                      $199 – $499
                    </option>
                    <option
                      value="500 - 750"
                      className="bg-primary text-second3"
                    >
                      $500 – $750
                    </option>
                    <option
                      value="750 ke atas"
                      className="bg-primary text-second3"
                    >
                      Above $750
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-second3 font-medium">
                    Preferred Response Method *
                  </label>
                  <select
                    name="preferredResponse"
                    required
                    value={formData.preferredResponse}
                    onChange={handleChange}
                    className="bg-primary border border-second3/20 rounded-lg p-3 text-second3 focus:outline-none focus:border-second3 transition-colors cursor-pointer"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-primary text-second3"
                    >
                      Select method...
                    </option>
                    <option value="Email" className="bg-primary text-second3">
                      Email
                    </option>
                    <option
                      value="WhatsApp"
                      className="bg-primary text-second3"
                    >
                      WhatsApp
                    </option>
                  </select>
                </div>
              </div>

              {/* What do you need help with? (Message) */}
              <div className="flex flex-col gap-2">
                <label className="text-second3 font-medium">
                  What do you need help with?
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell me a bit about your project goals..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-primary border border-second3/20 rounded-lg p-3 text-second3 placeholder:text-second3/30 focus:outline-none focus:border-second3 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <span className="w-full flex justify-center">
                <ButtonSubmit
                  text={isSubmitting ? "Sending..." : "Send Message"}
                  isSubmitting={isSubmitting}
                />
              </span>
            </form>
          </div>

          {/* --- KOTAK KANAN: STICKY INFO KONTAK & LOKASI --- */}
          <div className="top-32 h-fit sticky w-full lg:w-80 border-[1px] border-second3/20 backdrop-blur-sm bg-primary/20 rounded-xl font-poppins flex flex-col p-6 gap-6 shrink-0 text-second3">
            <p className="font-medium border-b border-second3/20 pb-3">
              Direct Connect
            </p>

            {contactList.map((item, i) => (
              <div key={i} className="flex gap-3 items-center">
                <span className="text-second3">{item.icon}</span>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-second3/70 hover:text-second3 transition-colors duration-300"
                >
                  {item.value}
                </Link>
              </div>
            ))}

            <div className="flex gap-3 items-center border-t border-second3/20 pt-4 mt-2">
              <IoLocationSharp className="text-xl text-second3" />
              <span className="text-sm text-second3/70">
                {information.country} - Working globally
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 w-full h-full mt-96 lg:mt-64 z-0 pointer-events-none flex">
        <div className="h-[100%] w-[100%] relative flex mt-96 mx-auto opacity-50 justify-center items-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-contain pointer-events-none grayscale"
          >
            <source src="/assets/contact/globe.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  );
}
