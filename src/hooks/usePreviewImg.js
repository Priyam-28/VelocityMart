import { useState } from "react";
import toast  from 'react-hot-toast';


const usePreviewImg = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file && file.type.startsWith("image/")) {
			if (file.size > maxFileSizeInBytes) {
				toast.error("File size must be less than 2MB")
				setSelectedFile(null);
				return;
			}
			const reader = new FileReader();

			reader.onloadend = () => {
				setSelectedFile(reader.result);
			};

			reader.readAsDataURL(file);
		} else {
			toast.error("Select Image File")
			setSelectedFile(null);
		}
	};

	return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImg;
