import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Partners from '../../components/Partners/Partners';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Partners />
      <Outlet />
    </>
  )
}