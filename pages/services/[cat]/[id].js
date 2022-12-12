import SingleService from "../../../src/components/services/single-service";

const ServicesPage = ({ data }) => <SingleService data={data} />;

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
  const id = context.params.id;
  const { allservices } = await import("/data/data.json");
  const serviceData = allservices.find((ev) => id === ev.id);

  return {
    props: { data: serviceData },
  };
}
