import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import LeftBodyPart from "../components/detailsPage/LeftBodyPart";
import RightSidebar from "../components/detailsPage/RightSidebar";

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
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-12 mt-10">
          <div className="col-span-9">
            <LeftBodyPart />
          </div>
          <div className="col-span-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
