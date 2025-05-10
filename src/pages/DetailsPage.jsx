import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

const DetailsPage = () => {
  const { id } = useParams();
  let path = useLocation();
  let convertToNumber = parseFloat(id);

  const [campDetails, setCampDetails] = useState({});
  useEffect(() => {
    async function getCamp() {
      let res = await fetch("../donation.json");
      let data = await res.json();
      let stor = data.forEach((camp) => {
        if (camp.id === convertToNumber) {
          setCampDetails(camp);
        }
      });
      //   console.log(stor);
    }
    getCamp();
  }, []);
  console.log(campDetails);
  return <div>DetailsPage</div>;
};

export default DetailsPage;
