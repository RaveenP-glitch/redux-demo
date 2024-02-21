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
    <div className="h-screen" style={{ backgroundColor: '#f0f0f0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="avatarInput"
        accept="image/*"
      />
      <label htmlFor="avatarInput" style={{ cursor: 'pointer' }}>
        <img
          src={preview}
          height={185}
          width={385}
          style={{ objectFit: 'cover', height: '14rem', width: '29rem' }}
          alt=""
        />
        <p style={{color: 'gray'}}>Click on the image to change.</p>
      </label>
  
      <Modal open={openModal} handleClose={() => setOpenModal(false)}>
        <ImageCropModalContent handleDone={handleDone} handleClose={() => setOpenModal(false)} handleRotateLeft={handleRotateLeftCw} handleRotateRight={handleRotateRightCw}/>
      </Modal>
    </div>
  );
};

export default ImageCrop;