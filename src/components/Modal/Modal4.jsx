import ChatModal from "../../chatuser/ChatModal";

/* eslint-disable react/no-unescaped-entities */
const Modal4 = () => {
  return (
    <div>
      <button
        className="btn bg-red-500 font-bold text-black text-[15px] hover:text-white"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Chat with owner
      </button>
      <dialog id="my_modal_4" className="modal">
        <ChatModal />
      </dialog>
    </div>
  );
};

export default Modal4;
