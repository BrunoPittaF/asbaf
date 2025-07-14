import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../Layouts/DefaulLayouts";
import { Home } from "../pages/Home";
import Directors from "../pages/Directors";
import BigGallery from "../pages/Gallery";
import Legislation from "../pages/legislation/Legislation";
import Legal from "../pages/Legal/Legal";
import Status from "../pages/Status/Status";
import Join from "../pages/Join";
import Notice from "../pages/Notice/Notice";
import { GlobalProvider } from "../context/useGlobalContext";
import Partner from "../pages/Partner";
import Admin from "../pages/Admin";
import EditNotice from "../pages/Admin/EditNotice";
import EditPartner from "../pages/Admin/EditPartner";
import { AdminLayout } from "../Layouts/AdminLayout";

export function Router() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/diretores" element={<Directors />} />
          <Route path="/galeria" element={<BigGallery />} />
          <Route path="/legislacao/:id" element={<Legislation />} />
          <Route path="/juridico" element={<Legal />} />
          <Route path="/estatuto" element={<Status />} />
          <Route path="/associe-se" element={<Join />} />
          <Route path="/seja-parceiro-asbaf" element={<Partner />} />
        </Route>
        <Route path="/manager" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="noticia/:id" element={<EditNotice />} />
          <Route path="parceiro/:id" element={<EditPartner />} />
        </Route>
        <Route path="/notice/:id" element={<Notice />} />
      </Routes>
    </GlobalProvider>
  );
}
