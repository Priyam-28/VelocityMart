/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import useSellitems from "../../hooks/useSellitems";
import usePreviewImg from "../../hooks/usePreviewImg";
import toast from "react-hot-toast";

const Modal = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    category: "",
    phone: "",
    address: "",
  });
  const { isLoading, handleSellItem } = useSellitems();
  const imageRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
  const modalRef = useRef(null); // Ref to the dialog element

  const handleSellingItem = async () => {
    // Validate if any field is empty
    if (!inputs.title || !inputs.description || !inputs.category || !selectedFile) {
      toast.error("Please fill in all fields and select an image");
      return;
    }

    try {
      await handleSellItem(
        selectedFile,
        inputs.title,
        inputs.description,
        inputs.category,
        inputs.phone,
        inputs.address
      );
      setSelectedFile(null);
      setInputs({
        title: "",
        description: "",
        category: "",
        phone: "",
        address: ""
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
        className="btn btn-primary bg-transparent border-0 w-full flex items-center gap-6 text-white text-lg font-semibold cursor-pointer rounded-xl hover:bg-slate-200 hover:text-black px-[1rem] h-[2.5rem] hover:bg-transparent"
        onClick={() => modalRef.current.showModal()}
      >
        Post Item
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
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
              <span className="label-text-alt">Alt label</span>
            </div>
            <select
              className="select select-bordered text-white"
              id=""
              onChange={(e) =>
                setInputs({ ...inputs, category: e.target.value })
              }
              value={inputs.category}
            >
              <option disabled value="">
                Pick one
              </option>
              <option>Electrical And Mechanics</option>
              <option>Academics</option>
              <option>Ameneties</option>
              <option>Sports And Gym</option>
              <option>Others</option>
            </select>
            <div className="label">
              <span className="label-text-alt">Alt label</span>
            </div>
          </label>

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
                Contact number
              </label>
              <input
                type="tel"
                name="contact-num"
                id="contact-num"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="input input-bordered text-white w-1/2"
                value={inputs.phone}
                onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
              />
            </div>
            <div className="address-container flex flex-col gap-2 my-2">
              <label htmlFor="address" className="label-text">
                Room-no and block name
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="input input-bordered text-white w-1/2"
                value={inputs.address}
                onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="btn bg-red-500 text-white mt-3"
              onClick={handleSellingItem}
            >
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;