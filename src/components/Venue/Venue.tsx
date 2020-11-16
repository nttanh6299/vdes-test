import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import FilterOptions from '@components/FilterOptions/FilterOptions';
import { RowType, GridType } from '@components/Icon';

import { FILTER_VENUE } from '@constants/FilterConstants';
import { IVenueProduct } from '@constants/Type';

import firebase from '../../../config/firebase-config';

import styles from './Venue.module.scss';
import VenueProduct from '@components/Product/VenueProduct';

const Venue = ({ query }) => {
  const [params, setParams] = useState<object>({});
  const [data, setData] = useState<IVenueProduct[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (query) {
      const paramsFromUrl = Object.keys(query).reduce((res, key) => {
        if ((query[key] as string).split(',').length > 1) {
          res[key] = (query[key] as string).split(',');
        } else {
          res[key] = query[key];
        }
        return res;
      }, {});

      setParams(paramsFromUrl);
    }
  }, []);

  const fetchData = (filteredParams: any = {}) => {
    setParams({ ...filteredParams });

    firebase
      .firestore()
      .collection('venues')
      .where('eventTypes', 'array-contains', filteredParams.eventType || '')
      .where('spaceType', 'in', filteredParams.spaceTypes || [''])
      .get()
      .then(res => {
        setData(
          res.docs.map(doc => {
            const resData = doc.data();

            let product: IVenueProduct = {
              id: doc.id,
              address: resData.address,
              eventTypes: resData.eventTypes,
              image: resData.image,
              name: resData.name,
              price: resData.price,
              province: resData.province,
              spaceType: resData.spaceType
            };

            return product;
          })
        );
      });

    const queryString = Object.keys(filteredParams)
      .reduce((res, key) => {
        if (filteredParams[key]) {
          if (Array.isArray(filteredParams[key])) {
            const mulipleValue = filteredParams[key].join(',');
            res.push(`${key}=${mulipleValue}`);
          } else {
            res.push(`${key}=${filteredParams[key]}`);
          }
        }
        return res;
      }, [])
      .join('&');
    router.push({ pathname: '/venue', query: queryString });
  };

  return (
    <>
      <div className={styles.ads_group}>
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className={styles.ads}>Ads</div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className={styles.ads}>Ads</div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className={styles.ads}>Ads</div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <div className={styles.ads}>Ads</div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 col-12">
          <FilterOptions
            dataFilter={FILTER_VENUE}
            params={params}
            fetchData={fetchData}
          />
        </div>
        <div className="col-sm-9 col-12">
          <div className={styles.view}>
            <div className={styles.view_tabs}>
              <div className={`${styles.tab} ${styles.tab_active}`}>
                Địa điểm
              </div>
              <div className={styles.tab}>Dịch vụ</div>
            </div>

            <div className={styles.view_by}>
              <span>Hiển thị theo: </span>
              <select>
                <option value="">Sản phẩm</option>
              </select>
            </div>

            <div className={styles.view_type}>
              <div
                className={`${styles.view_type_btn} ${styles.view_type_btn_active}`}
              >
                <RowType />
              </div>
              <div className={styles.view_type_btn}>
                <GridType />
              </div>
            </div>
          </div>
          <div className={styles.venue_list}>
            {data?.map(prod => (
              <VenueProduct key={prod.id} {...prod} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Venue;
