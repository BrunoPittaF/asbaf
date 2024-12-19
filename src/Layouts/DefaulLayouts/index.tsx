import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Partners from '../../components/Partners/Partners';
import GiantLogo from '../../components/GiantLogo/GiantLogo';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <GiantLogo />
      <Partners />
      <Outlet />
    </>
  );
}
