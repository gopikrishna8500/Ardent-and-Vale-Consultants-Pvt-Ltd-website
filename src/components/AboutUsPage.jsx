import React from "react";
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import TestimonialSection from "./TestimonialSection";

import appDevelopmentImg from "../assets/Techeminence/app-development.png";
import webDevelopmentImg from "../assets/Techeminence/development.svg";
import staffManagementImg from "../assets/Techeminence/staff-management.svg";

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">

            {/* Hero Section */}
            <div className="relative py-20 bg-cover bg-center overflow-hidden"

                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1600&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-slate-900/80"></div>
                <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-6">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 wrap-break-word">

                        About Ardent & Vale Consultants Pvt Ltd
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200">
                        IT Consulting • Staffing Solutions • Business Services
                    </p>
                    <div className="flex justify-center items-center text-gray-300 mt-4">
                        <Link to="/" className="hover:text-white transition">Home</Link>
                        <ChevronRight className="mx-2 h-4 w-4 text-slate-300" />
                        <span className="text-white font-medium">About Us</span>
                    </div>
                </div>
            </div>

            {/* Company Overview */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">
                    Company Overview
                </h2>
                <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-center leading-relaxed">
                    Ardent & Vale Consultants Pvt Ltd (CIN: U78100TS2025PTC200214) delivers strategic
                    consulting, IT staffing, and professional solutions for global organizations.
                    Headquartered in Shaikpet, Telangana — we enable business scalability and talent growth.
                </p>

                {/* Image Left + Cards Right (SAME HEIGHT) */}
                <div className="mt-20 flex flex-col md:flex-row items-stretch gap-12">

                    {/* LEFT IMAGE */}
                    <div className="w-full md:w-1/2 h-auto md:h-[520px] overflow-hidden rounded-xl shadow-2xl">
                        <img
                            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                            alt="Company Team Collaboration"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    {/* RIGHT CARDS */}
                    <div className="w-full md:w-1/2 flex flex-col justify-between space-y-8">

                        {/* Card 1 */}
                        <div className="bg-white shadow-lg p-8 rounded-xl border border-gray-200 
                            transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] cursor-pointer flex-1 flex flex-col">
                            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Key Company Details</h3>
                            <ul className="text-gray-700 space-y-3 flex-1">
                                Ardent & Vale Consultants Pvt Ltd is a professional consulting and
                                workforce solutions company dedicated to connecting businesses with
                                skilled talent while enabling sustainable organizational growth. We
                                work across multiple industries helping organizations build strong,
                                scalable, and people-focused work environments.
                                {/* <li><strong>Incorporation:</strong> 21 June 2025</li>
                                <li><strong>Office:</strong> Ilabs Centre, Shaikpet, Hyderabad</li>
                                <li><strong>Authorized Capital:</strong> ₹1.00 M</li>
                                <li><strong>Paid-up Capital:</strong> ₹0.10 M</li>
                                <li><strong>Status:</strong> Active • Unlisted</li> */}
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-lg p-8 rounded-xl border border-gray-200 
                            transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] cursor-pointer flex-1 flex flex-col">
                            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Mission & Vision</h3>
                            <p className="text-gray-700 leading-relaxed flex-1">
                                Our mission is to deliver measurable value through professional staffing,
                                consulting strategy, and operational excellence — while maintaining trust,
                                transparency, and long-term partnerships for sustained growth.
                            </p>
                        </div>

                    </div>
                </div>
            </div>


            {/* Services */}

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Mobile App Development */}
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-slate-700 hover:text-white">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                            <img src={appDevelopmentImg} alt="Mobile App Development" className="w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                        Mobile App Development
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                        We engineer high-performance, custom mobile apps that drive massive user acquisition and ensure long-term market leadership.
                    </p>
                    <Link to="/mobile">
                        <button className="bg-slate-900 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition-colors">
                            Read More
                        </button>
                    </Link>
                </div>

                {/* Web Development */}
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-slate-700 hover:text-white">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                            <img src={webDevelopmentImg} alt="Web Development" className="w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                        Web Development
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                        We build intuitive, scalable web platforms designed to convert visitors into loyal customers and accelerate your business growth.
                    </p>
                    <Link to="/webdesign">
                        <button className="bg-slate-900 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition-colors">
                            Read More
                        </button>
                    </Link>
                </div>

                {/* Staff Augmentation */}
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-slate-700 hover:text-white">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                            <img src={staffManagementImg} alt="Staff Augmentation" className="w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                        Staff Augmentation
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                        We provide elite, vetted developers on-demand, enabling you to rapidly scale teams, modernize systems, and accelerate transformation.
                    </p>
                    <Link to="/staff-augmentation">
                        <button className="bg-slate-900 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition-colors">
                            Read More
                        </button>
                    </Link>
                </div>

            </div>
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

                    {[{
                        title: "Job Seekers",
                        img: appDevelopmentImg,
                        desc: "Meaningful career opportunities in top organizations.",
                        link: "/mobile"
                    }, {
                        title: "Employees",
                        img: staffManagementImg,
                        desc: "Permanent & contract staffing with onboarding support.",
                        link: "/webdesign"
                    }, {
                        title: "Clients",
                        img: webDevelopmentImg,
                        desc: "Trusted supply of skilled professionals.",
                        link: "/staff-augmentation"
                    }].map((card, i) => (
                        <div key={i} className="bg-white p-8 shadow-xl rounded-lg hover:bg-slate-700 hover:text-white transition">
                            <div className="flex justify-center mb-6">
                                <img src={card.img} className="w-16 h-16" alt="service" />
                            </div>
                            <h3 className="text-xl font-bold text-center">{card.title}</h3>
                            <p className="text-center my-4">{card.desc}</p>
                            <div className="text-center">
                                <Link to={card.link} className="inline-block bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-md transition">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            {/* Vision & Purpose Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-slate-800 mb-5">Our Vision & Purpose</h2>
                    <div className="space-y-12">
                        <p className="text-gray-600 leading-relaxed">
                            At Ardent and Vale Consultants  Pvt Ltd, we are committed to building the best IT careers possible by creating the perfect match between a job seeker’s expertise and client requirements, guaranteeing a long and fruitful association for all.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            To elevate the recruiting industry by changing the rules of the game. We're building a company made up of profoundly talented people who leverage data to deliver the top passive technology talent.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            By following our values to achieve significant growth and success, we aim to make a meaningful change in the way our industry partners with and is regarded by candidates and clients.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our purpose is to connect technology’s greatest minds with the world’s top companies while cultivating a work environment that reflects our values: Be Amazing, Have Fun, Do the Essential, Adapt, and Have Purpose.
                        </p>
                    </div>
                </div>

            </div>

            {/* Contact Snapshot */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-semibold text-slate-800 mb-8">Contact Snapshot</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[{
                        icon: <Phone className="text-slate-700" />,
                        label: "Phone",
                        value: "+91-XXXXXXXXXX"
                    }, {
                        icon: <Mail className="text-slate-700" />,
                        label: "Email",
                        value: "contact@ardentvaleconsultants.com"
                    }, {
                        icon: <MapPin className="text-slate-700" />,
                        label: "Headquarters",
                        value: "Shaikpet, Telangana, 500081"
                    }].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start bg-white shadow-md rounded-lg p-5">
                            <div className="p-3 bg-slate-100 rounded-md">{item.icon}</div>
                            <div>
                                <p className="text-sm text-gray-500">{item.label}</p>
                                <p className="font-medium text-gray-800">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <TestimonialSection />

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-slate-900 hover:bg-slate-600 text-white rounded-lg shadow-lg flex items-center justify-center transition-colors z-50"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>

        </div>
    );
};

export default AboutUsPage;
