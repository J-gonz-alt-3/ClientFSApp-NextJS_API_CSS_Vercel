import Image from "next/image";

const ServicesPage = (data) => {
  return (
    <div>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};
export default ServicesPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allservices = data.allservices;

  const allPaths = allservices.map((path) => {
    return {
      params: {
        cat: path.service,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const { allservices } = await import("/data/data.json");
  const serviceData = allservices.find((ev) => id === ev.id);

  return {
    props: { data: serviceData },
  };
}
