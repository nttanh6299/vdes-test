import React, { useState, useEffect } from 'react';

import {
  Logo,
  Search,
  Bill,
  Flag_vi,
  ArrowDown,
  Cart,
  User
} from '@components/Icon';

import useClickedOutside from '@hooks/useClickOutside';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const { clickedOutside, setElementRef } = useClickedOutside();

  const onToggleDropdown = () => {
    setExpanded(prev => !prev);
  };

  useEffect(() => {
    if (clickedOutside) {
      setExpanded(false);
    }
  }, [clickedOutside]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.search}>
        <Search />
        <input type="text" placeholder="Tìm kiếm" />
      </div>

      <div className={styles.menu}>
        <div className={styles.menu_item}>
          <a href="#" className={styles.menu_link}>
            <Bill />
            <span className={styles.text}>Báo giá nhanh</span>
          </a>
        </div>

        <div className={styles.menu_item}>
          <a href="#" className={styles.menu_link}>
            <Bill />
            <span className={styles.text}>Trở thành đối tác</span>
          </a>
        </div>

        <div className={styles.menu_item}>
          <div className={styles.intl}>
            <div className={styles.flag}>
              <Flag_vi />
            </div>

            <div className={styles.arrow}>
              <ArrowDown />
            </div>
          </div>
        </div>

        <div className={styles.menu_item}>
          <div className={styles.cart}>
            <Cart />
            <span className={styles.quantity}>4</span>
          </div>
        </div>

        <div className={styles.menu_item}>
          <div
            className={styles.user}
            ref={setElementRef()}
            onClick={onToggleDropdown}
          >
            <User />
            <div className={styles.arrow}>
              <ArrowDown />
            </div>

            {expanded && (
              <div className={styles.user_dropdown}>
                <div className={styles.dropdown_group}>
                  <a href="#" className={styles.dropdown_item}>
                    <User />
                    <span>Danh sách báo giá</span>
                  </a>
                  <a href="#" className={styles.dropdown_item}>
                    <User />
                    <span>Quản lý đơn hàng</span>
                  </a>
                  <a href="#" className={styles.dropdown_item}>
                    <User />
                    <span>Thông tin thanh toán</span>
                  </a>
                  <a href="#" className={styles.dropdown_item}>
                    <User />
                    <span>Nhận xét sản phẩm</span>
                  </a>
                  <a href="#" className={styles.dropdown_item}>
                    <User />
                    <span>Sản phẩm đã xem</span>
                  </a>
                  <a href="#" className={styles.dropdown_item}>
                    <User />
                    <span>Danh sách yêu thích</span>
                  </a>
                  <a href="#" className={styles.dropdown_item}>
                    <User />
                    <span>Hỏi đáp</span>
                  </a>
                </div>

                <div className={styles.dropdown_group}>
                  <a href="#" className={styles.dropdown_item}>
                    <User />
                    <span>Thông tin cá nhân</span>
                  </a>
                </div>

                <div className={styles.dropdown_group}>
                  <a
                    href="#"
                    className={styles.dropdown_item + ' ' + styles.logout}
                  >
                    <User />
                    <span>Đăng xuất</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
