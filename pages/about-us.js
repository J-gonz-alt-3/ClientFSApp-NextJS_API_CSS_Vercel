import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div app__aboutus app__bg flex__center section__padding>
      <div className="app__aboutus-overlay flex__center">
        <Image src={""} alt={""} />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <p className="p__opensans">
            IT Global Pro is a leading provider of cutting-edge technologies and
            services, offering scalable solutions for companies of all sizes.
            Founded by a group of talented professionals who started by
            observing a need for training employees is lacking in today's
            competitive market, Today we offer smart, innovative services to
            dozens of clients worldwide. We built our solutions by closely
            listening to our potential clientele and understanding their
            expectations of our product. We know how to analyze this information
            and customize our offering to changing market needs. Why not join
            our fast-growing customer base? Get in touch today to learn more
            about the IT Global Pro story.
          </p>
        </div>
      </div>

      <div className="app__aboutus-content_history">
        <h2 className="headtext__cormorant">Our Mission</h2>
        <p className="p__opensans">
          At IT Global Pro, we empower organizations through education fostering
          collaborative thinking to drive workplace innovation. We believe that
          a company should act as a community quickly in a constant market
          change and use tools to solve the most complex IT issues and
          communicate quickly and efficiently.
        </p>
      </div>
      <div className="app__aboutus-content_history">
        <h2 className="headtext__cormorant">Our Vision</h2>
        <p className="p__opensans">
          We help organizations virtually manage the most complex IT
          cybersecurity training needs. We thrive because of our market
          knowledge and the great team behind our product.IT Global Pro is a
          leader in tech education. Using our next-generation data architecture,
          we offer training programs tailored to meet the needs of
          organizations, we offer the comprehensive capabilities and deep
          industry knowledge necessary to bring success in a constant market
          change.
        </p>
      </div>
      <div>
        <ul className="about_us_list app__aboutus-content_history">
          <li>
            <h2 className="headtext__cormorant">Our Team</h2>
            <p className="p__opensans">
              Our passion for creating meaningful change for clients is what
              sets us apart. The IT Global Pro team believes in the potential of
              our great idea, and it truly shows in all of our work! We work
              tirelessly to bring you a better tomorrow, and we’re proud of
              every single member of staff. To learn more about the incredible
              IT Global Pro team, please have a look below.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AboutUsPage;
