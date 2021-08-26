import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Item from '../../src/components/item';

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    const [item, setItem] = useState({});

    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}`;
    function getData() {
        axios.get(API_URL).then((res) => {
            console.log(res.data)
        });
    }

    useEffect(()=>{
        if(id && id > 0){
            getData();
        }
    }, [id]);

    return <Item item={item} />
}
export default Post