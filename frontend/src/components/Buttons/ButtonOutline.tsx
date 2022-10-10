type ButtonOutlineProps = {
  className?: string;
  btnText: string;
};

const ButtonOutline = ({ className = '', btnText }: ButtonOutlineProps) => {
  return (
    <button
      className={`border-2 border-ecom-03 p-2 rounded-full text-center ${className}`}
    >
      {btnText}
    </button>
  );
};

export default ButtonOutline;
