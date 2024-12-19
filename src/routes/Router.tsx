import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../Layouts/DefaulLayouts';
import { Home } from '../pages/Home';
import Directors from '../pages/Directors';
import Gallery from '../pages/Gallery';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/diretores" element={<Directors />} />
        <Route path="/galeria" element={<Gallery />} />
      </Route>
    </Routes>
  );
}
