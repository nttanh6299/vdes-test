import * as React from 'react';

import styles from './VenueProduct.module.scss';

export interface VenueProductProps {
  id: string;
  address: string;
  name: string;
  price: number;
  image: string;
}

const VenueProduct: React.FC<VenueProductProps> = ({
  id,
  address,
  name,
  price,
  image
}) => {
  return (
    <div className={styles.venue_prod}>
      <div className={styles.inner}>
        <a href={`/venue/${id}`}>
          <img className="img-fluid" src={image} alt={name} />
        </a>
        <div className={styles.info}>
          <a href={`/venue/${id}`} className={styles.name}>
            {name}
          </a>
          <span className={styles.address}>{address}</span>
          <span className={styles.price}>
            Giá: <span>{price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VenueProduct;
