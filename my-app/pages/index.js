import Head from 'next/head';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import itemList from '../src/components/itemList';

export default function Home() {
  const [list, setlist] = useState([]);
  const API_URL = 'http://markup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData() {
    Axios.get(API_URL).then( res => {
      console.log(res.data);
      setlist(res.data)
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
      <itemList list={list} />
    </div>
  )
}
