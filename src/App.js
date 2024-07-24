import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        openModal={openModal}
      />
    </div>
  );
};

export default App;
