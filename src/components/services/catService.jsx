import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatService = ({ data, pageName }) => {
  return (
    <div className="bg-dark text-light p-4 p-lg-0 text-center text-sm-start">
      <div className="container">
        <div className="row justify-content md-center">
          <h1 className="text-warning">Services for {pageName}</h1>
          <div className="row row-lg-2 m-0">
            {data.map((ev) => (
              <Link
                legacyBehavior
                key={ev.id}
                href={`/services/${ev.service}/${ev.id}`}
                passHref
              >
                <a className="col w-100">
                  <Image
                    style={{
                      borderRadius: "10px",
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                    width={300}
                    height={300}
                    alt={ev.title}
                    src={ev.image}
                  />
                  <h2 className="text-info">{ev.title}</h2>
                  <p className="text-white">{ev.description}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatService;
