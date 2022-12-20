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
    <div className="service_single_page">
      <h1>{data.title}</h1>
      <Image
        style={{
          borderRadius: "10px",
          objectFit: "cover",
          overflow: "hidden",
        }}
        src={data.image}
        width={800}
        height={500}
        alt={data.title}
        className="img-fluid"
      />

      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Reserve a Seat</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Type email here"
        />
        <button>Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleService;
