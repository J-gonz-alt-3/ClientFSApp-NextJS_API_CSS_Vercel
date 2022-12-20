import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  // Showcase

  <section>
    <div className="bg-dark text-light p-5 p-lg-0 text-center text-sm-start">
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
    </div>

    {/* Newsletter */}

    <div className="bg-primary text-light p-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0"> Sign Up For Our Newsletter</h3>
          <div className="input-group news-input">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
            />
            <button className="btn btn-dark btn-lg" type="button">
              Register!
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Cards */}

    <div className="p-5 bg-dark">
      <div className="container">
        <div className="row text-center g-4">
          <div className="col-md">
            <div className="card-body text-center">
              {data.map((ev) => (
                <Link
                  className=""
                  key={ev.id}
                  href={`/services/${ev.id}`}
                  passHref
                >
                  <Image
                    style={{
                      borderRadius: "10px",
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                    width={400}
                    height={300}
                    alt={ev.title}
                    src={ev.image}
                    className="img-fluid"
                  />

                  <h2 className="card-title mb-3 text-warning pt-3">
                    {ev.title}
                  </h2>
                  <p className="card-text text-white pb-4">{ev.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Instructors */}

    <div id="instructors" className="p-5 bg-primary">
      <div className="container">
        <h2 className="text-center text-white">Our Instructors</h2>
        <p className="lead text-center text-white mb-5">
          Our Instructors all have 5+ years working in their respective fields!
        </p>
        <div className="row g-4">
          {/* Instructor 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  className="rounded-circle mb-3"
                  alt="random male image"
                />
                <h3 className="card-title mb-3">John Doe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Beatae id explicabo deserunt ratione, repellendus incidunt
                  iste eius at architecto nostrum nesciunt delectus tempora sit
                  tenetur rerum magnam omnis perferendis laborum.
                </p>
                <a href="#">
                  <i class="bi bi-twitter text-dark mx-1"></i>{" "}
                </a>
                <a href="#">
                  <i class="bi bi-facebook text-dark mx-1"></i>{" "}
                </a>
                <a href="#">
                  <i class="bi bi-linkedin text-dark mx-1"></i>{" "}
                </a>
                <a href="#">
                  <i class="bi bi-instagram text-dark mx-1"></i>{" "}
                </a>
              </div>
            </div>
          </div>

          {/* Instructor 2 */}
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  class="rounded-circle mb-3"
                  alt="random images"
                />
                <h3 class="card-title mb-3">Jane Doe</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, voluptatibus. Error soluta modi quo, eligendi, ut,
                  veritatis officiis assumenda delectus quibusdam laborum quae
                  reprehenderit natus dicta possimus sed atque suscipit!
                </p>
                <a href="#">
                  <i class="bi bi-twitter text-dark mx-1"></i>{" "}
                </a>
                <a href="#">
                  <i class="bi bi-facebook text-dark mx-1"></i>{" "}
                </a>
                <a href="#">
                  <i class="bi bi-linkedin text-dark mx-1"></i>{" "}
                </a>
                <a href="#">
                  <i class="bi bi-instagram text-dark mx-1"></i>{" "}
                </a>
              </div>
            </div>
          </div>

          {/* Instructor 3 */}
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  class="rounded-circle mb-3"
                  alt="random images"
                />
                <h3 class="card-title mb-3">Steve Smith</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, voluptatibus. Error soluta modi quo, eligendi, ut,
                  veritatis officiis assumenda delectus quibusdam laborum quae
                  reprehenderit natus dicta possimus sed atque suscipit!
                </p>
                <a href="#">
                  <i class="bi bi-twitter text-dark mx-1"></i>{" "}
                </a>
                <a href="#">
                  <i class="bi bi-facebook text-dark mx-1"></i>{" "}
                </a>
                <a href="#">
                  <i class="bi bi-linkedin text-dark mx-1"></i>{" "}
                </a>
                <a href="#">
                  <i class="bi bi-instagram text-dark mx-1"></i>{" "}
                </a>
              </div>
            </div>
          </div>

          {/* Instructor 4 */}
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  class="rounded-circle mb-3"
                  alt="random images"
                />
                <h3 class="card-title mb-3">Sarah Smith</h3>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, voluptatibus. Error soluta modi quo, eligendi, ut,
                  veritatis officiis assumenda delectus quibusdam laborum quae
                  reprehenderit natus dicta possimus sed atque suscipit!
                </p>
                <a href="#">
                  <i class="bi bi-twitter text-dark mx-1"></i>{" "}
                </a>
                <a href="#">
                  <i class="bi bi-facebook text-dark mx-1"></i>{" "}
                </a>
                <a href="#">
                  <i class="bi bi-linkedin text-dark mx-1"></i>{" "}
                </a>
                <a href="#">
                  <i class="bi bi-instagram text-dark mx-1"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
