import { useState } from "react";

export default function useUploadImage() {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleUploadImage = (event: any) => {
    if (event.target.files === null) {
      return;
    }

    const imageFile = event.target.files[0];

    setImage((prev) => imageFile);
    setImageUrl((prev) => URL.createObjectURL(imageFile));
  };

  return { image, imageUrl, handleUploadImage };
}
