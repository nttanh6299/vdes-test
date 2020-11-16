import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { IFilterVenue } from '@constants/FilterConstants';

import styles from './FilterOptions.module.scss';

interface Props {
  dataFilter: IFilterVenue[];
  params: object;
  fetchData: (params) => void;
}

const FilterOptions: React.FC<Props> = ({ dataFilter, params, fetchData }) => {
  const onTextChange = e => {
    const { name, value } = e.target;
  };

  const onSelectChange = e => {
    const { name, value } = e.target;
    emitChangeFilter(name, value);
  };

  const onListCheckboxChange = e => {
    const { name, value } = e.target;
    emitChangeFilter(name, value, 'checkboxes');
  };

  const emitChangeFilter = (
    key: string,
    value: string | number,
    type?: string
  ) => {
    const filterParams = { ...params };

    if (type === 'checkboxes') {
      // not exists any value
      if (!filterParams[key] || filterParams[key]?.indexOf(value) < 0) {
        filterParams[key] = !filterParams[key]
          ? [value]
          : [...filterParams[key], value];
      } else {
        // remove unchecked value
        filterParams[key] = filterParams[key].reduce((res, item) => {
          if (item !== value) res.push(item);
          return res;
        }, []);

        // return undefined if key is []
        filterParams[key] =
          filterParams[key].length !== 0 ? filterParams[key] : undefined;
      }
    } else {
      filterParams[key] = value ? ('' + value).trim() : undefined;
    }

    fetchData(filterParams);
  };

  return (
    <div className={styles.filter}>
      {dataFilter.map(option => {
        switch (option.type) {
          case 'text':
            return (
              <div key={option.name} className={styles.input_group}>
                <input
                  type="text"
                  placeholder={option.placeholder}
                  onChange={onTextChange}
                  name={option.name}
                />
              </div>
            );
          case 'select':
            return (
              <div key={option.name} className={styles.input_group}>
                <label className={styles.label} htmlFor={option.name}>
                  {option.label}
                </label>
                <select
                  id={option.name}
                  name={option.name}
                  onChange={onSelectChange}
                >
                  {option.options?.map((item, index) => (
                    <option key={'select-' + index} value={item.key}>
                      {item.value}
                    </option>
                  ))}
                </select>
              </div>
            );
          case 'checkboxes':
            return (
              <div key={option.name} className={styles.input_group}>
                <label className={styles.label}>Loại hình dịch vụ</label>
                {option.options?.map((item, index) => (
                  <div key={'checkboxes-' + index} className={styles.checkbox}>
                    <label htmlFor={item.value + ''}>
                      <input
                        type="checkbox"
                        id={item.value + ''}
                        name={option.name}
                        value={item.key}
                        onChange={onListCheckboxChange}
                      />{' '}
                      {item.value}
                    </label>
                  </div>
                ))}
              </div>
            );
        }
      })}
    </div>
  );
};

export default React.memo(FilterOptions);
