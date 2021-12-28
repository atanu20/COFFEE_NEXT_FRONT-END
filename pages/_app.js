import Head from 'next/head';
import '../styles/globals.css';
// import '../styles/st.js';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Coffee shop website design</title>
        <link rel="icon" type="image/png" href="images/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        {/* <script type="text/javascript" src="js/script.js"></script> */}
        <script
          dangerouslySetInnerHTML={{ __html: process.env.rawJsFromFile }}
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
