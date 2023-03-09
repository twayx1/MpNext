import React from 'react';
import Head from 'next/head';
import {
  Placeholder,
  //getPublicUrl,
  LayoutServiceData,
  //Field,
} from '@sitecore-jss/sitecore-jss-nextjs';

import Scripts from 'src/Scripts';
import 'uikit/dist/css/uikit.min.css';


// Prefix public assets with a public URL to enable compatibility with Sitecore editors.
// If you're not supporting Sitecore editors, you can remove this.
// const publicUrl = getPublicUrl();

interface LayoutProps {
  layoutData: LayoutServiceData;
}

// interface RouteFields {
//   [key: string]: unknown;
//   pageTitle: Field;
// }

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;

  //const fields = route?.fields as RouteFields;
  // @ts-ignore
  import( 'uikit/dist/js/uikit.min.js');
  return (
    <>
      <Scripts />
      <Head>

      </Head>
  

      {route && <Placeholder name="machupicchu-header" rendering={route} />}

      {route && <Placeholder name="machupicchu-stage" rendering={route} />}

      <main className="uk-section uk-section-default">
        {route && <Placeholder name="machupicchu-content" rendering={route} />}
      </main>
      {route && <Placeholder name="machupicchu-footer" rendering={route} />}
    </>
  );
};

export default Layout;
