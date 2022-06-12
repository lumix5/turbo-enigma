import Head from "next/head";
import Script from "next/script";

function index() {
  return (
    <div>
      <Head>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WR6JDL9');
        `}
        </Script>
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
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WR6JDL9"
                height="0" width="0" style={{display: "none", visibility: "hidden" }}></iframe>
      </noscript>
    </div>
  );
}

export default index;
