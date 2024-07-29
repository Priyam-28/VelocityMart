/* eslint-disable no-unused-vars */
// Modal3.js
import { useRef, useState } from "react";
import usePreviewImg from "../../hooks/usePreviewImg";
import toast from "react-hot-toast";
import useRentitem from "../../hooks/useRentitem";

const Modal3 = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    from: "",
    to: "",
  });
  const { isLoading, handleRentItem } = useRentitem();
  const imageRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
  const modalRef = useRef(null); // Ref to the dialog element

  const handleRentingItem = async () => {
    // Validate if any field is empty
    if (
      !inputs.title ||
      !inputs.description ||
      !selectedFile ||
      !inputs.from ||
      !inputs.to
    ) {
      toast.error("Please fill in all fields and select an image");
      return;
    }

    try {
      await handleRentItem(
        selectedFile,
        inputs.title,
        inputs.description,
        inputs.to,
        inputs.from
      );
      setSelectedFile(null);
      setInputs({
        title: "",
        description: "",
        from: "",
        to: "",
      }); // Clear input fields after successful submission
      modalRef.current.close(); // Close the modal
      toast.success("Item successfully listed");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full">
      <button
        className="btn btn-primary bg-transparent border-0 w-full flex items-center gap-6 text-white text-lg font-semibold cursor-pointer rounded-xl hover:bg-slate-200 hover:text-black h-auto hover:bg-transparent"
        onClick={() => modalRef.current.showModal()}
      >
        Request Item
      </button>
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle bg-red-500 text-white absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-white">
            Enter Inputs For Listing Item
          </h3>

          <input
            type="text"
            placeholder="Enter Title"
            className="input input-bordered border-2 input-ghost w-full max-w-xs mt-5 text-white"
            value={inputs.title}
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
          />
          <textarea
            placeholder="Describe Your Product"
            className="textarea textarea-bordered text-[16px] w-full max-w-xs mt-5 p-4 text-white"
            value={inputs.description}
            onChange={(e) =>
              setInputs({ ...inputs, description: e.target.value })
            }
          ></textarea>

          <div className="input-submit-container flex flex-col justify-between text-[16px] text-white placeholder-text-white focus:placeholder-text-white">
            <input
              type="file"
              className="py-4"
              placeholder="Enter Image of Item here"
              ref={imageRef}
              onChange={handleImageChange}
            />
            <div className="contact-container flex flex-col gap-2">
              <label htmlFor="contact-num" className="label-text">
                From Date
              </label>
              <input
                type="date"
                name="from-date"
                id="from-date"
                className="input input-bordered text-white w-1/2"
                value={inputs.from}
                onChange={(e) => setInputs({ ...inputs, from: e.target.value })}
              />
            </div>
            <div className="address-container flex flex-col gap-2 my-2">
              <label htmlFor="todate" className="label-text">
                To Date
              </label>
              <input
                type="date"
                name="toDate"
                id="toDate"
                className="input input-bordered text-white w-1/2"
                value={inputs.to}
                onChange={(e) => setInputs({ ...inputs, to: e.target.value })}
              />
            </div>
            <button
              type="button"
              className="btn bg-red-500 text-white mt-3"
              onClick={handleRentingItem}
            >
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal3;
