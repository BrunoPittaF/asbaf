import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../Layouts/DefaulLayouts';
import { Home } from '../pages/Home';
import Directors from '../pages/Directors';
import Gallery from '../pages/Gallery';
import Legislation from '../pages/legislation/Legislation';
import Legal from '../pages/Legal/Legal';
import Status from '../pages/Status/Status';
import Join from '../pages/Join';
import Notice from '../pages/Notice/Notice';
import { UseGlobalContext } from '../context/useGlobalContext';
import Partner from '../pages/Partner';
import Admin from '../pages/Admin';

export function Router() {
  return (
    <UseGlobalContext>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/diretores" element={<Directors />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/legislacao/:id" element={<Legislation />} />
          <Route path="/juridico" element={<Legal />} />
          <Route path="/estatuto" element={<Status />} />
          <Route path="/associe-se" element={<Join />} />
          <Route path="/seja-parceiro-asbaf" element={<Partner />} />
        </Route>
        <Route path="/notice/:id" element={<Notice />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </UseGlobalContext>
  );
}
