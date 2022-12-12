import React from "react";
import Image from "next/image";

export const SingleService = ({ data }) => {
  return (
    <div>
      <Image src={data.image} width={800} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <input type="email" />
      <button>Submit</button>
    </div>
  );
};

export default SingleService;
