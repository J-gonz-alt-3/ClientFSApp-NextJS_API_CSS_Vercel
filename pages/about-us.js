import Image from "next/image";

const AboutUsPage = () => {
  return (
    <section className="p-3 bg-dark" id="learn">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <Image
              src={"/aboutus.jpg"}
              alt={"aboutus"}
              width={300}
              height={400}
              style={{ borderRadius: "8px" }}
              className="img-fluid"
            />
          </div>

          <div className="col-md p-3">
            <h1 className="text-warning">About Us</h1>
            <p className="lead text-white">
              IT Global Pro is a leading provider of cutting-edge technologies
              and services, offering scalable solutions for companies of all
              sizes. Founded by a group of talented professionals who started by
              observing a need for training employees is lacking in todays
              competitive market, Today we offer smart, innovative services to
              dozens of clients worldwide. We built our solutions by closely
              listening to our potential clientele and understanding their
              expectations of our product. We know how to analyze this
              information and customize our offering to changing market needs.
              Why not join our fast-growing customer base? Get in touch today to
              learn more about the IT Global Pro story.
            </p>
          </div>

          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md p-3">
                <h2 className="text-warning">Our Mission</h2>
                <p className="lead text-white">
                  At IT Global Pro, we empower organizations through education
                  fostering collaborative thinking to drive workplace
                  innovation. We believe that a company should act as a
                  community quickly in a constant market change and use tools to
                  solve the most complex IT issues and communicate quickly and
                  efficiently.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md p-3">
                <h3 className="text-warning">Our Vision</h3>
                <p className="lead text-white">
                  We help organizations virtually manage the most complex IT
                  cybersecurity training needs. We thrive because of our market
                  knowledge and the great team behind our product. IT Global Pro
                  is a leader in tech education. Using our next-generation data
                  architecture, we offer training programs tailored to meet the
                  needs of organizations, we offer the comprehensive
                  capabilities and deep industry knowledge necessary to bring
                  success in a constant market change.
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md p-3">
                <h4 className="text-warning">Our Team</h4>
                <p className="lead text-white">
                  Our passion for creating meaningful change for clients is what
                  sets us apart. The IT Global Pro team believes in the
                  potential of our great idea, and it truly shows in all of our
                  work! We work tirelessly to bring you a better tomorrow, and
                  we are proud of every single member of staff. To learn more
                  about the incredible IT Global Pro team, please have a look
                  below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUsPage;
