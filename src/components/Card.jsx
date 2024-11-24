import React from "react";

const Card = ({ data, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
      <img src={data.image} alt={data.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#0d1b2a]">{data.title}</h3>
        <p className="text-gray-600 mt-2">{data.description}</p>
      </div>
    </div>
  );
};

export default Card;