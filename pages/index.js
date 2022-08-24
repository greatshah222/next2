import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Home() {
  const router = useRouter();

  const handlClick = () => {
    console.log('order places successfully ');
    router.push('/product');
  };
  return (
    <>
      <h1>Home page</h1>

      <Link href='/blog'>Blog</Link>
      <Link href='/product'>Product</Link>
      <Link href='/about'>About</Link>

      <button onClick={handlClick}> Place order</button>
    </>
  );
}
