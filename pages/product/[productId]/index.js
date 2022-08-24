import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import axios from 'axios';

export default function ProductDetail({ asset }) {
  console.log('asset', asset);
  const router = useRouter();

  const id = router?.query?.productId;

  return (
    <>
      <Head>
        <title>product detail - {id}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:image' content={asset?.bannerImageLarge} />
      </Head>
      <h2>product detail - {id}</h2>
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export async function getStaticProps() {
  const res = await axios.get(
    'https://suite.icareus.com/api/publishing/getAsset?version=03&organizationId=181282321&userId=182750701&userToken=eyJ0cyI6MTY2MTMyNTg1NjU3NSwidXNlcklkIjoxODI3NTA3MDEsIm9yZ2FuaXphdGlvbklkIjoxODEyODI5OTV9.ODNlNjMxYjc0ZTAyMTMyYmRlMWFjMzM2OTkyNGMwMWFkOTNhMmRjMjFiMTg3NGZiM2MwOWU1NWE3YWJiOGVmY2ZkZGY3NjM2MTEwYjc4ZTJiYzI1YzY1NjRmOWNjMzUxOGNlOWE3NzlhYTViMTY0Y2M3YmVlOGY0MzMyYTU4MGE=&assetProperty=&languageId=fi_FI&assetId=182604162&token=036305ef66998101070aa50e078f8ef7affc834c1f'
  );
  console.log('res', res);
  return {
    props: {
      asset: res?.data,
    },
  };
}
