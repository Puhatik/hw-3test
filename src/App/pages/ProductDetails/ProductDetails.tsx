import React from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

import CardDetail from './components/CardDetail/CardDetail';
import RelatedItems from './components/RelatedItems/RelatedItems';
import styles from './ProductDetails.module.scss';

type ProductDetailsProps = {};

const ProductDetails: React.FC<ProductDetailsProps> = ({}) => {
  const params = useParams();

  const [item, setItem] = React.useState<any>({});

  React.useEffect(() => {
    const apiUrl = `https://fakestoreapi.com/products/${params.id}`;
    axios.get(apiUrl).then((resp) => {
      setItem(resp.data);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <CardDetail item={item} />
      <RelatedItems />
    </div>
  );
};

export default ProductDetails;
