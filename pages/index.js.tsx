import Head from "next/head";
import Script from "next/script";

function index() {
  return (
    <div>
      <Head>
        <title>Rainbow Six Tier List</title>
        <meta name="title" content="Rainbow Six Tier List"/>
        <meta
          name="description"
          content="find out the best characters in p6 and vote yourself"
        />
        <meta
          name="keyword"
          content="rainbow six tier list, r6 tier list, rainbow six operator tier list, r6 operator tier list, r6 meta, Best Operator Rainbow Six, r6 meta"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZVKEZB5WMT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZVKEZB5WMT');
        `}
      </Script>
    </div>
  );
}

export default index;
