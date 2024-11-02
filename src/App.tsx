import Carroussel from './components/Carroussel/Carroussel';
import GiantLogo from './components/GiantLogo/GiantLogo';
import Header from './components/Header/Header';
import Partners from './components/Partners/Partners';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <GiantLogo />
        <Partners />
        <Carroussel title="Últimas noticias" />
        <Carroussel title="Exclusivo associado" />
      </main>
    </>
  );
}

export default App;
