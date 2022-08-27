import * as React from 'react';

import Header from '@components/Header/Header';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import styles from './App.module.scss';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Products from './pages/Products/Products';

function App() {
  const [items, setItems] = React.useState<any[]>([]);

  React.useEffect(() => {
    const apiUrl = 'https://fakestoreapi.com/products';
    axios.get(apiUrl).then((resp) => {
      setItems(resp.data);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />

      <Routes>
        <Route path="/" element={<Products items={items} />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
