import toast from 'react-hot-toast';
import usePreviewImg from "../../hooks/usePreviewImg";
import useSellitems from '../../hooks/useSellitems';
import { useRef, useState } from 'react';

export default function CreatePost() {
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        category: "",
    });
    const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
    const { isLoading, handleSellItem } = useSellitems();
    const imageRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleAddCreation = async () => {
        try {
            await handleSellItem(selectedFile, inputs.title, inputs.description, inputs.category);
            setSelectedFile(null);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <div>
                <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>List Item</button>
                <dialog id="my_modal_3" className="modal ">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">List New Item</h3>

                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered border-2 input-ghost w-full max-w-xs mt-5"
                            value={inputs.title}
                            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
                        />
                        <textarea
                            placeholder="Describe Your Product"
                            className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-5 p-1"
                            value={inputs.description}
                            onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
                        ></textarea>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Pick Category</span>
                                <span className="label-text-alt">Alt label</span>
                            </div>
                            <select
                                className="select select-bordered"
                                value={inputs.category}
                                onChange={(e) => setInputs({ ...inputs, category: e.target.value })}
                            >
                                <option disabled selected>Pick one</option>
                                <option>Electrical</option>
                                <option>Sports and Gym</option>
                                <option>Academics</option>
                                <option>Amenities</option>
                                <option>Star Trek</option>
                            </select>
                            <div className="label">
                                <span className="label-text-alt">Alt label</span>
                                <span className="label-text-alt">Alt label</span>
                            </div>
                        </label>

                        <div className="input-part flex justify-between items-center pr-5">
                            <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" 
                            ref={imageRef} onChange={handleImageChange}/>
                            
                            <button type="submit" className='btn btn-primary' onClick={handleAddCreation}>Submit</button>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    );
}
