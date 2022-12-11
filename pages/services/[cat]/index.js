import Image from "next/image";

const ServicesCatPage = ({ data }) => {
  return (
    <div>
      <h1>Courses Offered</h1>
      <div>
        {data.map((ev) => (
          <a key={ev.id} href={`/services/${ev.service}/${ev.id}`}>
            <Image width={300} height={200} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
export default ServicesCatPage;

export async function getStaticPaths() {
  const { service_categories } = await import("/data/data.json");

  const allPaths = service_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allservices } = await import("/data/data.json");

  const data = allservices.filter((ev) => ev.service === id);

  return {
    props: { data },
  };
}
