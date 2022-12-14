import Image from "next/image";

const ContactUsPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div>
        <Image
          src={"/contactus.jpg"}
          alt={"contact photo"}
          width={300}
          height={400}
        />
      </div>
      <div>
        <p>
          123-456-7890
          <br />
          ITGlobalpro.com
        </p>
      </div>
    </div>
  );
};
export default ContactUsPage;
