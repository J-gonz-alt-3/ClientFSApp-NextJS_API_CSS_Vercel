import Image from "next/image";
import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

export const SingleService = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setMessage("Please enter a valid email address");
    }
    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) {
        throw new Error(`ERROR: ${response.status}`);
      }
      const data = await response.json();

      setMessage(data.message);
      inputEmail.current.value = "";
      //POST fetch request
      // body emailValue and the eventId
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <div className="bg-dark text-light p-4 p-lg-0 text-center text-sm-start">
      <div className="container">
        <h1 className="text-warning">{data.title}</h1>
        <Image
          style={{
            borderRadius: "10px",
            objectFit: "cover",
            overflow: "hidden",
          }}
          src={data.image}
          width={600}
          height={400}
          alt={data.title}
          className="img-fluid"
        />

        <p className="pt-3">{data.description}</p>
        <form onSubmit={onSubmit} className="email_registration">
          <label className="text-warning pb-2" style={{ display: "block" }}>
            Reserve a Seat
          </label>

          <div class="input-group mb-3">
            <input
              ref={inputEmail}
              type="email"
              id="email"
              placeholder="Type email here"
              className="form-control"
            />
            <div class="input-group-append bg-dark">
              <button type="button" class="btn btn-primary btn-md active">
                Submit
              </button>
            </div>
          </div>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SingleService;
