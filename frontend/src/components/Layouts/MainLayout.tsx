import { PropsWithChildren } from 'react';
import MainNavbar from '../Navbars/MainNavbar';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <MainNavbar />
      <main className='container mx-auto px-2 sm:px-0'>{children}</main>
    </div>
  );
};

export default MainLayout;
