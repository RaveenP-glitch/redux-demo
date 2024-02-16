import { useState } from 'react';
import user1 from '../assets/user_1.png';
import Modal from '../components/base/Modal';
import { readFile } from '../helpers/cropImage';
import ImageCropModalContent from './ImageCropModalContent';
import { useImageCropContext } from '../providers/ImageCropProvider';

const ImageCrop = () => {
  const [openModal, setOpenModal] = useState(false);
  const [preview, setPreview] = useState(user1);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const { getProcessedImage, setImage, resetStates } = useImageCropContext();

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

  const toggleOverlay = () => {
    etIsOverlayOpen(!isOverlayOpen);
  }

  const Overlay = () => {
    return (
        <div><p>Hansani</p></div>
    )
  };



  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
        <p style={{zIndex:"1", fontSize:"100px", }}>gftyftyufyufyufguigiugiu</p>
      <input
        type="file"
        onChange={toggleOverlay}
        className="hidden"
        id="avatarInput"
        accept="image/*"
      />
      <button onClick={toggleOverlay}>Open Overlay</button>
      {isOverlayOpen && <Overlay />}
      {/* <label htmlFor="avatarInput" className="cursor-pointer">
        <img
          src={preview}
          height={192}
          width={192}
          className="object-cover rounded-full h-48 w-48"
          alt=""
        />
      </label> */}

      <Modal open={openModal} handleClose={() => setOpenModal(false)}>
        <ImageCropModalContent handleDone={handleDone} handleClose={() => setOpenModal(false)} />
      </Modal>
    </div>
  );
};

export default ImageCrop;