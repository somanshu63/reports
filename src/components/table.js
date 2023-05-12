import React from "react";

function Table() {
  return (
    <div className="w-49 md-width-full box table-con">
      <table>
        <tr>
          <th>Coach</th>
          <th>Sports</th>
          <th>Active Batches</th>
          <th>Institute</th>
        </tr>
        <tr>
          <td>Shubham Gupta</td>
          <td>Badminton | Tennis</td>
          <td>2</td>
          <td>Khelomore Coaching</td>
        </tr>
        <tr>
          <td>Dilip Patli</td>
          <td>Swimming | Badminton</td>
          <td>4</td>
          <td>Sportrix Academy</td>
        </tr>
        <tr>
          <td>Akash Gupta</td>
          <td>Football</td>
          <td>12</td>
          <td>Dee Sports Academy</td>
        </tr>
        <tr>
          <td>Shweta Tiwari</td>
          <td>Cricket</td>
          <td>4</td>
          <td>Khelomore Coaching</td>
        </tr>
        <tr>
          <td>Parul Kumari</td>
          <td>Squash | Tennis</td>
          <td>1</td>
          <td>Khelomore Coaching</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
