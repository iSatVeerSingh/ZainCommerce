import { useState } from 'react';
import AboutProduct from '../Products/AboutProduct';
import ProductDetails from '../Products/ProductDetails';
import ProductSpec from '../Products/ProductSpec';
import TabNavBtn from './TabNavBtn';

const ProductTab = () => {
  const [current, setCurrent] = useState(1);

  const tabs = [
    {
      id: 1,
      tabTitle: 'About Product',
    },
    {
      id: 2,
      tabTitle: 'Details',
    },
    {
      id: 3,
      tabTitle: 'Specs',
    },
  ];

  return (
    <div className='mt-3'>
      <div className='flex gap-4'>
        {tabs.map((tab) => (
          <TabNavBtn
          key={tab.id}
            tabNavTitle={tab.tabTitle}
            isActive={current === tab.id}
            onClick={() => setCurrent(tab.id)}
          />
        ))}
      </div>
      <h3 className='text-3xl font-medium my-2'>MSI MPG Trident 3</h3>
      <div>
        {(current === 1 && <AboutProduct />) ||
          (current === 2 && <ProductDetails />) ||
          (current === 3 && <ProductSpec />)}
      </div>
    </div>
  );
};

export default ProductTab;
