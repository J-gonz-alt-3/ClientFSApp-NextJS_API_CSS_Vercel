import Link from "next/link";
import Image from "next/image";
import { MdColorLens } from "react-icons/md";

export const HomePage = ({ data }) => (
  // Cards
  <section>
    <div className="home_body app__header app__wrapper section__padding">
      {data.map((ev) => (
        <Link className="card" key={ev.id} href={`/services/${ev.id}`} passHref>
          <div className="image app__wrapper_img">
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
          </div>

          <div className="content app__wrapper_info">
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);
