import React from "react";
import Image from "next/image";

export const Showcase = () => {
  return (
    <section className="bg-dark text-light p-5 p-lg-0 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Become a <span class="text-warning">Web Developer</span>
            </h1>
            <p className="lead my-4">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first
              developer role.
            </p>
            <button
              class="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >
              Start Enrollment Today!
            </button>
          </div>
          <Image
            src={"/homepagelogo.jpg"}
            width={500}
            height={400}
            alt={"showcase"}
            style={{ borderRadius: 10 }}
            className="img-fluid w-50 d-none d-sm-block"
          />
        </div>
      </div>
    </section>
  );
};
