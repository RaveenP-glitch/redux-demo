import { useState } from 'react';
import user1 from '../assets/user_1.jpg';
import Modal from '../components/base/Modal';
import { readFile } from '../helpers/cropImage';
import ImageCropModalContent from './ImageCropModalContent';
import { useImageCropContext } from '../providers/ImageCropProvider';

const ImageCrop = () => {
  const [openModal, setOpenModal] = useState(false);
  const [preview, setPreview] = useState(user1);

  const { getProcessedImage, setImage, resetStates, handleRotateLeftCw, handleRotateRightCw } = useImageCropContext();

  const handleDone = async () => {
    const avatar = await getProcessedImage();
    setPreview(window.URL.createObjectURL(avatar));
    resetStates();
    setOpenModal(false);
  };

  const handleFileChange = async ({ target: { files } }) => {
    const file = files && files[0];
    const imageDataUrl = await readFile(file);
    setImage(imageDataUrl);
    setOpenModal(true);
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        id="avatarInput"
        accept="image/*"
      />
      <label htmlFor="avatarInput" className="cursor-pointer">
        <img
          src={preview}
          height={185}
          width={225}
          className="object-cover h-48 w-88"
          alt=""
        />
      </label>

      <Modal open={openModal} handleClose={() => setOpenModal(false)}>
        <ImageCropModalContent handleDone={handleDone} handleClose={() => setOpenModal(false)} handleRotateLeft={handleRotateLeftCw} handleRotateRight={handleRotateRightCw}/>
      </Modal>
    </div>
  );
};

export default ImageCrop;