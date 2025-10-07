import React from "react";
const rows = ["row", "row", "row", "row", "row"];

const UserTable = () => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th> Year </th>
          <th> Investment value</th>
          <th> Interest (Year)</th>
          <th> Total interest</th>
          <th> Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {rows.map((roy, index) => (
            <td key={index}>{roy}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
