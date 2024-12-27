import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Partners from '../../components/Partners/Partners';
import GiantLogo from '../../components/GiantLogo/GiantLogo';
import Footer from '../../components/Footer/footer';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <GiantLogo />
      <Partners />
      <Outlet />
      <Footer />
    </>
  );
}
