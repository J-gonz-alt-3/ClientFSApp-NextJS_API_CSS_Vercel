// import "../styles/globals.css";
import "../styles/general.scss";
import MainLayout from "../src/components/layout/main-layout";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
