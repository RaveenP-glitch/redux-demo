import EasyCropper from 'react-easy-crop';
import Cropper from 'react-easy-crop';
import { useImageCropContext } from '../../providers/ImageCropProvider';

const CropperTool = () => {
  const { image, zoom, setZoom, rotation, setRotation, crop, setCrop, onCropComplete } =
    useImageCropContext();

  return (
    <EasyCropper
      image={image || undefined}
      crop={crop}
      zoom={zoom}
      rotation={rotation}
      cropShape="rect"
      aspect={1}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
      setRotation={setRotation}
      showGrid={false}
      cropSize={{ width: 225, height: 185 }}
      style={{
        containerStyle: {
          height: 220,
          width: 240,
          top: 8,
          bottom: 8,
          left: 8,
          right: 8
        }
      }}
    />
    // <Cropper
    //        image={image || undefined}
    //        crop={crop}
    //        zoom={zoom}
    //        onCropChange={setCrop}
    //        onCropComplete={onCropComplete}
    //        onZoomChange={setZoom}
    //        rotation={rotation}
    //        onRotationChange={setRotation}
    //         setRotation={setRotation}
    //         showGrid={false}
    //         style={{
    //             containerStyle: {
    //             height: 220,
    //             width: 240,
    //             top: 8,
    //             bottom: 8,
    //             left: 8,
    //             right: 8
    //             }
    //         }}
    //      />
  );
};

export default CropperTool;


