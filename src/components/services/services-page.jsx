import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllServices = ({ data }) => {
  return (
    <div className="p-5 bg-dark">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                {data.map((ev) => (
                  <Link key={ev.id} href={`/services/${ev.id}`} passHref>
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
