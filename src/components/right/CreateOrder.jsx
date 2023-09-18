import React, { useState } from "react";
import "./CreateOrder.css";
import Modal from "../Modal";

export default function CreateOrder() {
  const [showModal,setShowModal] = useState(false)
  return (
    <div className="search">
      <div>
        <button
          className="btn-order"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Create Order
        </button>
      </div>
      <div>
        {showModal && <Modal />}
      </div>
    </div>
  );
}
