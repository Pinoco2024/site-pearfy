
import React, { useState } from 'react';
import ImageUploader from './ImageUploader';

interface LogoUploaderProps {
  defaultLogo?: string;
  className?: string;
}

const LogoUploader: React.FC<LogoUploaderProps> = ({ 
  defaultLogo = "https://media.licdn.com/dms/image/v2/D4D0BAQGIDCEWUNy_aQ/company-logo_200_200/company-logo_200_200/0/1708393291420?e=2147483647&v=beta&t=KUM9ipnnAEn6OMhrVjL9RPfd6_zF99oOFe_hCIdjYjw", 
  className = "h-10 w-10 mr-2" 
}) => {
  const [logoUrl, setLogoUrl] = useState<string>(defaultLogo);

  const handleLogoChange = (url: string) => {
    setLogoUrl(url);
    // Aqui você pode adicionar lógica para salvar a imagem em um servidor ou banco de dados
    console.log("Nova logo carregada:", url);
  };

  return (
    <ImageUploader 
      onImageUpload={handleLogoChange} 
      defaultImage={logoUrl} 
      className={className}
      alt="Logo da Pearfy"
    />
  );
};

export default LogoUploader;
