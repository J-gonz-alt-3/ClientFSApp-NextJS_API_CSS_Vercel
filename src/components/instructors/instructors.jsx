import React from "react";

export const Instructors = () => {
  return (
    <section id="instructors" className="p-5 bg-primary">
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
    </section>
  );
};
