import Link from "next/link";
import Image from "next/image";
import { MdColorLens } from "react-icons/md";

export const HomePage = ({ data }) => (
  <div className="home_wrapper">
    <div className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">IT Global Professionals</h1>
        <p style={{ fontSize: "20px", color: "whitesmoke" }}>
          <i>
            From a hands-on education to opportunities to work alongside top
            industry professionals, there are countless reasons students choose
            IT Global Pro!
          </i>
        </p>
      </div>
      <div className="app__wrapper_img">
        <Image
          src={"/homepagelogo.jpg"}
          width={500}
          height={400}
          alt={"new tech at work"}
          style={{ borderRadius: "5px" }}
        />
      </div>
    </div>
    <div className="home_body app__header app__wrapper section__padding ">
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
  </div>
);
