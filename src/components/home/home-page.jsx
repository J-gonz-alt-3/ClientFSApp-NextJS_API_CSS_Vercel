import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  <div>
    <div className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">IT Global Professionals</h1>
        <p>
          From a hands-on education to opportunities to work alongside top
          industry professionals, there are countless reasons students choose IT
          Global Pro.
        </p>
      </div>
      <div className="app__wrapper_img">
        <Image src={""} alt={""} />
      </div>
    </div>
    <div className="home_body">
      {data.map((ev) => (
        <Link className="card" key={ev.id} href={`/services/${ev.id}`} passHref>
          <div className="image">
            <Image width={400} height={300} alt={ev.title} src={ev.image} />
          </div>
          <div className="content">
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);
