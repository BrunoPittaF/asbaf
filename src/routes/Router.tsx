import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../Layouts/DefaulLayouts';
import { Home } from '../pages/Home';
import Directors from '../pages/Directors';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/diretores" element={<Directors />} />
      </Route>
    </Routes>
  );
}
