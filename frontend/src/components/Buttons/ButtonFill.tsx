type ButtonFillProps = {
  className?: string;
  btnText: string;
};


const ButtonFill = ({className = '', btnText}: ButtonFillProps) => {
  return (
    <button className={`bg-ecom-05 text-white p-2 text-center rounded-full ${className}`}>
      {btnText}
    </button>
  )
}

export default ButtonFill