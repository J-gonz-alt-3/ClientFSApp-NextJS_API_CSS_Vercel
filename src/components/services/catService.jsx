import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatService = () => {
  return (
    <div>
      <h1>Services for {pageName}</h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/services/${ev.service}/${ev.id}`} passHref>
            <Image width={300} height={300} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatService;
