import React from "react";
import "./Modal.css";

export default function Modal() {
  return (
    <div>
      <form action="">
        <table>
          <tr>
            <td>
              <div>
                <input placeholder="Name" />
              </div>
            </td>
            <td>
              <div>
                <input placeholder="Price" />
              </div>
            </td>

            <td>
              <div>
                <input placeholder="Quantity" />
              </div>
            </td>
            <td>
              <div>
                <input placeholder="Total Price" />
              </div>
            </td>
            <td>
              <div>
                <input type="submit" />
              </div>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
