import React, { useState } from "react";
import { TableData } from "./TableData";
import "./Table.css";
const TablePage = () => {
  const [newData, setNewData] = useState([]);
  const [show, setShow] = useState(false);
  const showDetail = (id) => {
    setNewData(TableData.filter((data) => data.id === id));
    setShow(false);
  };

  return (
    <div>
      <h1>Employee Name Table</h1>

      <button onClick={() => setShow(!show)}>Select item</button>
      <table>
        <thead>
          <tr>
            {["Name", "Title", "Age", "Gander", "Designation"].map((data) => (
              <th key={data}>{data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {newData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.title}</td>
              <td>{data.age}</td>
              <td>{data.gander}</td>
              <td>{data.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {show ? (
        <div className="div_modal">
          <table>
            <thead>
              <tr>
                {["Name", "Title"].map((data) => (
                  <th key={data}>{data}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TableData.map((data, index) => (
                <tr key={index} onClick={(e) => showDetail(data.id)}>
                  <td>{data.name}</td>
                  <td>{data.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default TablePage;
