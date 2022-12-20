import Image from "next/image";

const ContactUsPage = () => {
  return (
    <section className="p-5 bg-dark">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4 text-warning">Contact Us</h2>
            <div className="col md">
              <Image
                src={"/contactus.jpg"}
                alt={"contact photo"}
                width={400}
                height={500}
                className="img-fluid rounded float-left"
              />
            </div>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item bg-dark text-white">
                <span className="fw-bold text-info">Main Location:</span> 50
                Main St. Boston, MA
              </li>
              <li class="list-group-item bg-dark text-white">
                <span class="fw-bold text-info">Student Phone:</span> (333)
                333-3333
              </li>
              <li class="list-group-item bg-dark text-white">
                <span class="fw-bold text-info">Enrollment Email: </span>
                itglobalpro@itglobalpro.com
              </li>
              <li class="list-group-item bg-dark text-white">
                <span class="fw-bold text-info">Enrollment Email: </span>
                itglobalpro@itglobalpro.com
              </li>
              <li class="list-group-item bg-dark text-white">
                <span class="fw-bold text-info">Enrollment Email: </span>
                itglobalpro@itglobalpro.com
              </li>
              <li class="list-group-item bg-dark text-white">
                <span class="fw-bold text-info">Enrollment Email: </span>
                itglobalpro@itglobalpro.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUsPage;
