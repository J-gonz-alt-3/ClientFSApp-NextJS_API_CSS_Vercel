import Image from "next/image";

const ContactUsPage = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-cener mb-4">Contact Us</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location:</span> 50 Main St.
                Boston, MA
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Student Phone:</span> (333) 333-3333
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Enrollment Email:</span>
                itglobalpro@itglobalpro.com
              </li>
            </ul>
            <div className="col md">
              <Image
                src={"/contactus.jpg"}
                alt={"contact photo"}
                width={400}
                height={500}
                className="img-fluid rounded float-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUsPage;
