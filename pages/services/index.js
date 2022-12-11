import Image from "next/image";

const ServicesPage = ({ data }) => {
  return (
    <div>
      <h1>Services Offered</h1>
      <div>
        {data.map((ev) => (
          <a key={ev.id} href={`/services/${ev.id}`}>
            <Image src={ev.image} alt={ev.title} width={300} height={200} />
            <h2>{ev.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};
export default ServicesPage;

export async function getStaticProps() {
  const { service_categories } = await import("/data/data.json");

  return {
    props: {
      data: service_categories,
    },
  };
}
