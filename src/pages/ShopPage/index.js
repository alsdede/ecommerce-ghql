import React from 'react';
import SHOP_DATA from '../../constants/shopData';

import PreviewCollection from '../../components/PreviewCollection';

import './styles.scss';

const ShopPage = () => {
  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
