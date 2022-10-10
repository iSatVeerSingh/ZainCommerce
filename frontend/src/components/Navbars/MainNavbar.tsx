import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart, FiSearch, FiUser } from 'react-icons/fi';
import { navlinks } from '../../../demodata/navlinks';

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='border-b relative z-50'>
      <nav className='container mx-auto py-2 px-2 sm:px-0 flex items-center justify-between'>
        <button className='xl:hidden' onClick={toggleMenu}>
          <FiMenu size='30px' />
        </button>
        <div className='text-xl font-medium'>
          <Link href='/'>
            <a>ZainCommerce</a>
          </Link>
        </div>
        <div
          className={`h-screen bg-white absolute top-0 ${
            isOpen ? 'left-0 visible' : '-left-[105%] invisible'
          } min-w-[300px] px-3 py-4 shadow-lg xl:h-auto xl:p-0 xl:shadow-none xl:static xl:visible`}
        >
          <button
            className='absolute top-2 right-2 xl:hidden'
            onClick={toggleMenu}
          >
            <FiX size='30px' />
          </button>
          <div className='flex flex-col gap-2 xl:flex-row'>
            {navlinks.map((linkItem) => (
              <Link href={linkItem.path} key={linkItem.id}>
                <a className='hover:underline'>{linkItem.name}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <button>
            <FiShoppingCart size='25px' />
          </button>
          <button>
            <FiSearch size='25px' />
          </button>
          <button>
            <FiUser size='25px' />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default MainNavbar;
