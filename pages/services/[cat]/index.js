import CatService from "../../../src/components/services/catService";

const ServicesCatPage = ({ data, pageName }) => (
  <CatService data={data} pageName={pageName} />
);

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
    props: { data, pageName: id },
  };
}
