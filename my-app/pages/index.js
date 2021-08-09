import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  const API_URL = 'http://markup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData() {
    Axios.get(API_URL).then( res => {
      console.log(res.data)
    })
  }
  useEffect(()=> {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | dahyun</title>
      </Head>

    </div>
  )
}
