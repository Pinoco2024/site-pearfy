
import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (url: string) => void;
  defaultImage?: string;
  className?: string;
  alt?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ 
  onImageUpload, 
  defaultImage, 
  className = "w-20 h-20", 
  alt = "Imagem carregada" 
}) => {
  const [imageUrl, setImageUrl] = useState<string>(defaultImage || '');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageUrl(result);
        onImageUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    inputRef.current?.click();
  };

  return (
    <div className="relative">
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      
      {imageUrl ? (
        <div className={`relative ${className} cursor-pointer overflow-hidden`} onClick={triggerFileInput}>
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <Upload className="text-white" size={24} />
          </div>
        </div>
      ) : (
        <div 
          className={`${className} flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors`}
          onClick={triggerFileInput}
        >
          <Upload className="text-gray-400" size={24} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
