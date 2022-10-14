import Image from 'next/image';

type CustomImgProps = {
  src: string;
  alt?: string;
  className?: string;
};

const CustomImg = ({ src, alt, className }: CustomImgProps) => {
  return (
    <div className={`relative ${className ? className : 'w-full h-full'}`}>
      <Image src={src} alt={alt} layout='fill' objectFit='contain' priority />
    </div>
  );
};

export default CustomImg;
