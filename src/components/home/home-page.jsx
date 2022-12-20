import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  // Cards
  <section className="p-5">
    <div className="container">
      <div className="row text-center g-4">
        <div className="col-md">
          <div className="card bg-dark text-light">
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
                  />

                  <h2 className="card-title mb-3 text-primary">{ev.title}</h2>
                  <p className="card-text text-info">{ev.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
