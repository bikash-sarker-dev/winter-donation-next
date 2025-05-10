import React from "react";
import { Link } from "react-router";

const DonationCard = ({ camp }) => {
  const { image, title, description } = camp ?? {};
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/details/${camp.id}`}
            className="btn bg-[#19685B] w-full text-white"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
