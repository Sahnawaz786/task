import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from '../style.module.css';

const RightBar = () => {
  return (
    <div className={styles.rightbarConatiner}>
      <div className={styles.rightBar}>
        <div className={styles.rightBarLogo}>
          <img
            src='https://cdn-icons-png.freepik.com/512/10703/10703269.png'
            width={30}
            height={30}
            alt=''
          />
          <img
            src='https://cdn-icons-png.freepik.com/512/7959/7959420.png'
            width={30}
            height={30}
            alt=''
          />
          <img
            src='https://cdn-icons-png.freepik.com/512/5994/5994710.png'
            width={30}
            height={30}
            alt=''
          />
          <img
            src='https://cdn-icons-png.freepik.com/512/9740/9740598.png'
            width={30}
            height={30}
            alt=''
          />
          <img
            src='https://cdn-icons-png.freepik.com/512/3425/3425921.png'
            width={30}
            height={30}
            alt=''
          />
        </div>
        <div className={styles.searchSection}>
          <FaSearch />
          <input type='text' name='' width={300} height={300} id='' />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Supplier Name</th>
            <th>Supplier Type</th>
            <th>Number</th>
            <th>Name</th>
            <th>Version</th>
            <th>Iteration</th>
            <th>Created By</th>
            <th>Created Date</th>
            <th>state</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Medtronic</td>
            <td>Manufacturer</td>
            <td>000091</td>
            <td>SCRW</td>
            <td>A</td>
            <td>1</td>
            <td>STEPHEN</td>
            <td>01-01-2024</td>
            <td>Open ＠</td>
          </tr>
          <tr>
            <td>Medtronic</td>
            <td>Manufacturer</td>
            <td>000091</td>
            <td>SCRW</td>
            <td>A</td>
            <td>1</td>
            <td>STEPHEN</td>
            <td>01-01-2024</td>
            <td>Open ＠</td>
          </tr>
          <tr>
            <td>Medtronic</td>
            <td>Manufacturer</td>
            <td>000091</td>
            <td>SCRW</td>
            <td>A</td>
            <td>1</td>
            <td>STEPHEN</td>
            <td>01-01-2024</td>
            <td>Open ＠</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RightBar;
