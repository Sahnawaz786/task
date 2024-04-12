import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import styles from '../style.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { a } from 'react-router-dom';

const LeftBar = () => {
  const [display, setDisplay] = useState(true);

  const handlToggle = (control) => {
    setDisplay(control);
  };

  return (
    <div className={styles.leftbar}>
      {display ? (
        <>
          <div
            className={styles.logoText}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div className={styles.logoText}>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYXelNvTYzqH7ndMP0MZlMWQPiQJRhPFft33kyoiCGg&s'
                alt='image'
                className={styles.imageIcon}
              />
              <p>SUPPLIER</p>
            </div>

            <p onClick={() => handlToggle(false)}>
              <ImCross />
            </p>
          </div>

          <div className={styles.leftbarParent}>
            <div className={styles.leftbarChild}>
              <div className={styles.logoText}>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYXelNvTYzqH7ndMP0MZlMWQPiQJRhPFft33kyoiCGg&s'
                  alt='image'
                  className={styles.imageIcon}
                />
                <p>Medtronic</p>
              </div>

              <div className={styles.leftbarOptions}>
                <a herf='/'>Details</a>
                <a herf='/'>Onboarding status</a>
                <a herf='/'>View Contract details</a>
              </div>
            </div>

            <div className={styles.leftbarChild}>
              <div className={styles.logoText}>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYXelNvTYzqH7ndMP0MZlMWQPiQJRhPFft33kyoiCGg&s'
                  alt='image'
                  className={styles.imageIcon}
                />
                <p>Medtronic</p>
              </div>

              <div className={styles.leftbarOptions}>
                <a herf='/'>Details</a>
                <a herf='/'>Onboarding status</a>
                <a herf='/'>View Contract details</a>
              </div>
            </div>

            <div className={styles.leftbarChild}>
              <div className={styles.logoText}>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYXelNvTYzqH7ndMP0MZlMWQPiQJRhPFft33kyoiCGg&s'
                  alt='image'
                  className={styles.imageIcon}
                />
                <p>Medtronic</p>
              </div>

              <div className={styles.leftbarOptions}>
                <a herf='/'>Details</a>
                <a herf='/'>Onboarding status</a>
                <a herf='/'>View Contract details</a>
              </div>
            </div>

            <div className={styles.leftbarChild}>
              <div className={styles.logoText}>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYXelNvTYzqH7ndMP0MZlMWQPiQJRhPFft33kyoiCGg&s'
                  alt='image'
                  className={styles.imageIcon}
                />
                <p>Medtronic</p>
              </div>

              <div className={styles.leftbarOptions}>
                <a herf='#'>Details</a>
                <a herf='/'>Onboarding status</a>
                <a herf='/'>View Contract details</a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p onClick={() => handlToggle(true)}>
          <FaArrowRight />
        </p>
      )}
    </div>
  );
};

export default LeftBar;
