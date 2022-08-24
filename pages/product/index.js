import Link from 'next/link';
import React from 'react';

export default function Products({ productId = 100 }) {
  return (
    <>
      <Link href='/'>HOme</Link>

      <h2>
        {/* // replace the link like other react route */}
        <Link href={`/product/${productId}`} replace>
          p1
        </Link>
      </h2>
      <h2>
        <Link href={'/product/2'}>p2 </Link>
      </h2>
      <h2>
        <Link href={'/product/3'}>p3</Link>
      </h2>
    </>
  );
}
