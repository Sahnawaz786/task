import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaFile } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { FaPen } from "react-icons/fa";


const RightBar = () => {
  return (
    <div className='rightbar-conatiner'>
      <div className='right-bar'>
        <div className='right-bar-logo'>
          <p><IoMdSettings/></p>
          <p><FaFile/></p>
          <p><FaFolderOpen/></p>
          <p><IoTrashBin/></p>
          <p><FaPen/></p>
        </div>
        <div style={{display:"flex",gap:"5px",alignItems:"center"}}>
            <FaSearch/>
            <input type="text" name="" width={300} height={300} id="" />
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
