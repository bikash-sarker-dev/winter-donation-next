const LeftBodyPart = ({ campDetails }) => {
  const { image, description, title, status, contactInfo } = campDetails ?? {};

  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBodyPart;
