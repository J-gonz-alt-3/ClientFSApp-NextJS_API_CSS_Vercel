import AllServices from "../../src/components/services/services-page";

const ServicesPage = ({ data }) => {
  return <AllServices data={data} />;
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
