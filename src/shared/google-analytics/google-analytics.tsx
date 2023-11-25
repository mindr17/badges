import Script from 'next/script';

interface Props {
  ga_id: string;
}

const GoogleAnalytics = (props: Props) => {
  const { ga_id } = props;

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');
        `,
        }}
        id='google-analytics'
      ></Script>
    </>
  );
};
export default GoogleAnalytics;
