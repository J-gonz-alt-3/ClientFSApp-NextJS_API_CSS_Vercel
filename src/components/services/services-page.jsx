import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllServices = ({ data }) => {
  return (
    <div className="p-5 bg-dark">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-sm m-0">
            {data.map((ev) => (
              <Link
                legacyBehavior
                key={ev.id}
                href={`/services/${ev.id}`}
                passHref
              >
                <a className="col-sm">
                  <Image
                    style={{
                      borderRadius: "10px",
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                    src={ev.image}
                    alt={ev.title}
                    width={400}
                    height={300}
                    className="img-fluid"
                  />{" "}
                  <h2 className="card-title mb-3 text-warning pt-2">
                    {ev.title}
                  </h2>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
