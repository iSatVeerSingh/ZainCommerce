import CustomImg from '../Images/CustomImg';

type CarouselPaginationImageProps = {
  className?: string;
  src?: string;
};

const CarouselPaginationImage = ({
  className,
}: CarouselPaginationImageProps) => {
  return (
    <div className={`w-20 h-20 border ${className ? className : ''}`}>
      <CustomImg src='/images/pro1.png' />
    </div>
  );
};

export default CarouselPaginationImage;
