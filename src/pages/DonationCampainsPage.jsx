import React, { useEffect, useState } from "react";
import DonationCard from "../components/DonationCamp/DonationCard";

const DonationCampainsPage = () => {
  const [camp, setCamp] = useState([]);
  useEffect(() => {
    async function getCamp() {
      let res = await fetch(`./donation.json`);
      let data = await res.json();
      setCamp(data);
    }
    getCamp();
  }, []);
  console.log(camp);
  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
        {camp.map((camp) => (
          <DonationCard key={camp.id} camp={camp} />
        ))}
      </div>
    </div>
  );
};

export default DonationCampainsPage;
