import { readFile } from '../helpers/cropImage';
import { useImageCropContext } from '../providers/ImageCropProvider';
import Button from '../components/base/Button';
import CropperTool from './cropper/ImageCropper';
import { RotationSlider, ZoomSlider } from '../components/cropper/Sliders';
import { LuRotateCcw, LuRotateCw } from "react-icons/lu";

const ImageCropModalContent = ({ handleDone, handleClose, handleRotateLeft, handleRotateRight }) => {
  const { setImage } = useImageCropContext();

  const handleFileChange = async ({ target: { files } }) => {
    const file = files && files[0];
    const imageDataUrl = await readFile(file);
    setImage(imageDataUrl);
  };

  return (
    <div className="text-center relative">
      <h5 className="text-gray-800 mb-4 font-semibold text-left">Edit Image</h5>
      <p className='text-gray-800 text-sm text-left mb-4'>Uploaded: user_1.png</p>
      <div className="border border-dashed border-gray-200 p-6">
        <div className="flex justify-center">
          <div className="crop-container mb-4">
            <CropperTool />
          </div>
        </div>
        <button className='m-2' onClick={handleRotateLeft}>
            <LuRotateCcw />
        </button>
        <button className='m-2' onClick={handleRotateRight}>
            <LuRotateCw />
        </button>
        <ZoomSlider className="mb-4" />
        <RotationSlider className="mb-4" />
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          id="avatarInput"
          accept="image/*"
        />

        <Button variant="light" className="shadow w-full mb-4 hover:shadow-lg">
          <label htmlFor="avatarInput">Change Image</label>
        </Button>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className="w-full" onClick={handleDone}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropModalContent;