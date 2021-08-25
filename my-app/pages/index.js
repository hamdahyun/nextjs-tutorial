import Head from 'next/head';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import ItemList from '../src/components/itemList';
import { Divider, Header } from 'semantic-ui-react';

export default function Home() {
  const [list, setlist] = useState([]);
  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

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
      <Header as="h3" style={{ paddingTop: 40 }}>베스트 상품</Header>
      <Divider />
      <ItemList list={list} />
    </div>
  )
}
