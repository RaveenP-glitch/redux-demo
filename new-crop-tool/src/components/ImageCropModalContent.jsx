import {useState} from 'react';
import { readFile } from '../helpers/cropImage';
import { useImageCropContext } from '../providers/ImageCropProvider';
import Button from '../components/base/Button';
import CropperTool from './cropper/ImageCropper';
import { RotationSlider, ZoomSlider } from '../components/cropper/Sliders';
import { LuRotateCcw, LuRotateCw } from "react-icons/lu";

const ImageCropModalContent = ({ handleDone, handleClose, handleRotateLeft, handleRotateRight }) => {
  const { setImage } = useImageCropContext();
  const [loading, setLoading] = useState(false);

  const handleFileChange = async ({ target: { files } }) => {
    try {
      setLoading(true);
      const file = files && files[0];
      const imageDataUrl = await readFile(file);
      setImage(imageDataUrl);
    } catch (error) {
      // Handle error as needed
      console.error('Error reading file:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <h5 style={{ color: '#333', marginBottom: '1rem', fontWeight: '600', textAlign: 'left' }}>Edit Image</h5>
      <p style={{ color: '#333', fontSize: '0.875rem', textAlign: 'left', marginBottom: '1rem' }}>Uploaded: user_1.png</p>
      {/* <div style={{ border: '1px dashed #e2e8f0', padding: '1.5rem' }}> */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='crop-container' style={{ marginBottom: '1rem' }}>
            <CropperTool />
          </div>
        </div>
        <p className='' style={{color: 'gray', fontSize: '0.75rem', lineHeight: '1rem'}}>Drag to reposition image</p>
        <button style={{ margin: '0.5rem' }} onClick={handleRotateLeft}>
          <LuRotateCcw />
        </button>
        <button style={{ margin: '0.5rem' }} onClick={handleRotateRight}>
          <LuRotateCw />
        </button>
        <ZoomSlider style={{ marginBottom: '1rem' }} />
        <RotationSlider style={{ marginBottom: '1rem' }} />

        <div>
        {loading ? (
            // Display loading screen or add the spinner here
            <div>Loading...</div>
        ) : (
            <input
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            id="avatarInput"
            accept="image/*"
            />
        )}
        </div>
  
        <button style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '100%', margin: '1rem 0', cursor: 'pointer' }} onClick={() => document.getElementById('avatarInput').click()}>
          Change Image
        </button>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button style={{ background: '#e2e8f0', color: '#333', padding: '0.5rem', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }} onClick={handleClose}>
            Cancel
          </button>
          <button style={{ background: '#3490dc', color: '#fff', padding: '0.5rem', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', width: '100%' }} onClick={handleDone}>
            Save
          </button>
        </div>
      {/* </div> */}
    </div>
  );
};

export default ImageCropModalContent;