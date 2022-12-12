import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllServices = ({ data }) => {
  return (
    <div className="services_page">
      {data.map((ev) => (
        <Link key={ev.id} href={`/services/${ev.id}`} passHref>
          <p className="card">
            <Image src={ev.image} alt={ev.title} width={400} height={300} />{" "}
            <h2>{ev.title}</h2>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default AllServices;
