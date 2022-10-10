import ButtonOutline from "../Buttons/ButtonOutline"
import CustomImg from "../Images/CustomImg"

const BrandFilters = () => {
  return (
    <div className="bg-ecom-04 p-3 rounded-md">
      <h3 className='text-xl mb-2 text-left lg:text-center'>Brands</h3>
      <ButtonOutline btnText="All Brands" className="w-full" />
      <div className="grid grid-cols-2 mt-3">
        <div className="h-32 border">
          <CustomImg src="/images/pro1.png"/>
        </div>
        <div className="h-32 border">
          <CustomImg src="/images/pro1.png"/>
        </div>
        <div className="h-32 border">
          <CustomImg src="/images/pro1.png"/>
        </div>
        <div className="h-32 border">
          <CustomImg src="/images/pro1.png"/>
        </div>
      </div>
    </div>
  )
}

export default BrandFilters