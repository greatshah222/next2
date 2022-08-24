import { useRouter } from 'next/router';
import React from 'react';

export default function Doc() {
  const router = useRouter();

  const { params = [] } = router.query;
  console.log('params', params?.length);

  if (params?.length === 2) {
    return (
      <h1>
        viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params?.length === 1) {
    return <h1>viewing docs for feature {params[0]}</h1>;
  }

  return <div>Doc...</div>;
}
