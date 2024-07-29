/* eslint-disable no-unused-vars */
import React from "react";
import Modal4 from "./Modal4";

function Modal2() {
  const closeModal = () => {
    const modal = document.getElementById("my_modal_1");
    modal.close();
  };
  return (
    <div>
      <button
        className="btn bg-red-500 text-black border-0 text-base w-full hover:text-white mt-4"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Details
      </button>
      <dialog id="my_modal_1" className="modal p-6">
        <div className="modal-box">
          <div className="img-cont w-full rounded-lg border-6 border-white">
            <img src="college-3.svg" alt="" className="w-full object-cover" />
          </div>
          <h3 className="font-bold text-lg mt-2 text-white">Item name</h3>
          <p className="desc py-2">
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus animi, pariatur, ea, magnam illo eveniet odio placeat
            aliquam totam vero eos cupiditate? Consequatur corrupti id
            architecto repellendus error et odio!
          </p>
          <h3 className="font-semibold text-lg text-white">Owner Name</h3>
          <p className="phone-num py-2">Contact number</p>
          <p className="address py-2">Room-no 242 A-block</p>
          <div className="modal-action mt-3  w-full flex justify-between">
            <Modal4 />
            <form method="dialog w-full flex justify-between">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Modal2;
