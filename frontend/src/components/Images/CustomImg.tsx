import Image from 'next/image';

type CustomImgProps = {
  src: string;
  alt?: string;
};

const CustomImg = ({ src, alt }: CustomImgProps) => {
  return (
    <div className='relative w-full h-full'>
      <Image src={src} alt={alt} layout='fill' objectFit='contain' />
    </div>
  );
};

export default CustomImg;
