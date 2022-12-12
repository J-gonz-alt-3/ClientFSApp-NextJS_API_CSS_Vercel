import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatService = ({ data, pageName }) => {
  return (
    <div className="cat_services">
      <h1>Services for {pageName}</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/services/${ev.service}/${ev.id}`} passHref>
            <p className="card">
              <Image width={300} height={300} alt={ev.title} src={ev.image} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatService;
