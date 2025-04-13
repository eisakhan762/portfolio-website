import { useState } from "react";
import "./PricingSectionStyles.css";

const pricingSections = {
  "Static Websites": [
    {
      title: "Basic Plan",
      price: "₹4,999",
      subtitle:
        "Perfect for individuals who want to mark their digital presence.",
      features: [
        "1–2 Page Website (e.g., Home + Contact)",
        "Custom design with personal branding",
        "Responsive on all devices",
        "Fast-loading + SEO-ready",
        "Deployed to your domain (you provide hosting)",
      ],
      delivery: "3–5 Days",
      idealFor: "Students, personal portfolios, resumes",
    },
    {
      title: "Premium Plan",
      price: "₹9,999",
      subtitle: "For creators who want more room to showcase their story.",
      features: [
        "3–5 Pages (Home, About, Projects, Contact, Services)",
        "Unique design with animations & interactions",
        "Domain & Hosting setup support",
        "SEO + Performance Optimization",
        "Social media/contact integrations",
      ],
      delivery: "5–7 Days",
      idealFor: "Freelancers, developers, creators",
    },
    {
      title: "Business Plan",
      price: "₹19,999",
      subtitle: "Your full digital identity, built with care.",
      features: [
        "5–7 Pages + Blog or CMS Integration",
        "Includes custom admin features (if needed)",
        "SSL Security, analytics, and form submissions",
        "Performance tuning + custom loading screens",
        "Premium animations (Framer Motion/GSAP)",
        "Scalable architecture (React/Next.js if needed)",
      ],
      delivery: "7–12 Days",
      idealFor: "Startups, agencies, professional portfolios",
    },
  ],
  "Full Stack Web Apps (MERN)": [
    {
      title: "MERN Launch",
      price: "₹16,999",
      subtitle: "Kickstart your web app idea with full-stack capabilities.",
      features: [
        "Authentication, Dashboard, and Basic CRUD",
        "MongoDB + Express + React + Node",
        "REST API + Protected Routes",
        "Tailwind or CSS Modules styling",
        "Deployed to Vercel or Render",
      ],
      delivery: "7–10 Days",
      idealFor: "MVPs, internal tools, student projects",
    },
    {
      title: "MERN Pro",
      price: "₹24,999",
      subtitle: "A powerful and scalable full-stack web application.",
      features: [
        "Advanced authentication (OAuth, JWT)",
        "Admin panel + user roles",
        "Payments, notifications, or real-time features",
        "Optimized API + Modular structure",
        "Complete deployment setup",
      ],
      delivery: "10–14 Days",
      idealFor: "Startups, SaaS apps, business platforms",
    },
  ],
  "Mobile Apps (React Native)": [
    {
      title: "App Starter",
      price: "₹14,999",
      subtitle: "Launch your mobile app idea on both Android and iOS.",
      features: [
        "Home + Auth + 1–2 functional screens",
        "React Native + Expo or CLI",
        "Custom UI + responsive layout",
        "Navigation and basic state management",
        "Published to Play Store (optional)",
      ],
      delivery: "6–10 Days",
      idealFor: "Basic apps, concepts, portfolios",
    },
    {
      title: "App Pro",
      price: "₹21,999",
      subtitle: "Feature-rich cross-platform mobile experience.",
      features: [
        "5+ screens, advanced logic",
        "Integration with APIs, Firebase, etc.",
        "Authentication, forms, and storage",
        "Custom animations & transitions",
        "Play Store + App Store ready",
      ],
      delivery: "10–14 Days",
      idealFor: "Business apps, client projects, startups",
    },
  ],
  "Desktop Apps (Electron / Tauri)": [
    {
      title: "Desktop Lite",
      price: "₹18,999",
      subtitle: "Simple cross-platform software for Windows/Linux/macOS.",
      features: [
        "2–3 screens or tools",
        "Electron or Tauri framework",
        "Basic storage or file handling",
        "Custom UI with HTML/CSS/JS",
        "Installer + auto-update setup",
      ],
      delivery: "7–10 Days",
      idealFor: "Tools, dashboards, offline apps",
    },
    {
      title: "Desktop Pro",
      price: "₹26,999",
      subtitle: "Full-featured desktop software with advanced features.",
      features: [
        "Advanced features (e.g. DB, APIs, local caching)",
        "Multi-window support",
        "System tray, notifications, dark mode",
        "Cross-platform packaging",
        "Tauri for lightweight + fast performance",
      ],
      delivery: "12–16 Days",
      idealFor: "Business apps, productivity software",
    },
  ],
};

const addOns = [
  { icon: "📝", title: "WhatsApp Or Chat Integration", price: "₹499" },
  { icon: "🧭", title: "SEO Deep Optimization", price: "₹999" },
  { icon: "🧱", title: "Extra Page", price: "₹999 / page" },
  {
    icon: "🧑‍",
    title: "Admin Panel with Firebase or Sanity",
    price: "₹2,499+",
  },
];

export default function PricingSection() {
  const [selectedCategory, setSelectedCategory] = useState("Static Websites");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const selectedPlans = pricingSections[selectedCategory];

  return (
    <div className="pricing-grid">
      {/* Modern Custom Category Selector */}
      <div className="custom-selector">
        {/* <div className="selector-label">Choose a Category</div> */}
        <div className="selector">
          {Object.keys(pricingSections).map((category, index) => (
            <div
              key={index}
              className={`selector-item ${
                selectedCategory === category ? "selected" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Display selected category plans */}
      <div>
        <div className="pricing-category">
          <h2 className="category-title" style={{marginBottom: "1rem"}}>{selectedCategory}</h2>
          <div className="category-cards">
            {selectedPlans.map((plan, index) => (
              <div key={index} className="pricing-card">
                <div className="pricing-content">
                  <h2 className="pricing-title">{plan.title}</h2>
                  <p className="pricing-price">{plan.price}</p>
                  <p className="pricing-subtitle">{plan.subtitle}</p>
                  <ul className="pricing-features">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        <span className="feature-icon">✔</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pricing-meta">
                    <p>
                      <strong>Delivery:</strong> {plan.delivery}
                    </p>
                    <p>
                      <strong>Ideal for:</strong> {plan.idealFor}
                    </p>
                  </div>
                  <button className="pricing-button">Get Started</button>
                </div>
              </div>
            ))}

            {/* Add-ons Section */}
            <div className="addons-card">
              <h3 className="addons-title">Optional Add-Ons</h3>
              <ul className="addons-list">
                {addOns.map((addon, index) => (
                  <li key={index} className="addon-item">
                    <span className="addon-icon">{addon.icon}</span>
                    <span className="addon-title">{addon.title}</span>
                    <span className="addon-price">{addon.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
