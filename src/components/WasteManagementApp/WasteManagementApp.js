import React from "react";
import Header from "../Header/Header";
import SectionCard from "../SectionCard/SectionCard";
import Footer from "../Footer/Footer";
import { wasteManagementData } from "../../data/wasteManagementData";
import { useToggle } from "../../hooks/useToggle";
import "./WasteManagementApp.css";

const WasteManagementApp = () => {
  const [expandedId, toggleExpanded] = useToggle();

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        {wasteManagementData.map((item) => (
          <SectionCard
            key={item.id}
            item={item}
            isExpanded={expandedId === item.id}
            onToggle={toggleExpanded}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default WasteManagementApp;
