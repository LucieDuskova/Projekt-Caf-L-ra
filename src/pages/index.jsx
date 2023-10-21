import { render } from '@czechitas/render';
import { Header } from '../components/01_Header/Header.jsx';
import { Footer } from '../components/06_Footer/footer.jsx';
import { Banner } from '../components/02_Banner/Banner.jsx';
import { Menu } from '../components/03_Menu/menu.jsx';
import { Gallery } from '../components/04_Gallery/gallery.jsx';
import { Contact } from '../components/05_Contact/contact.jsx';
import '../global.css';
import './index.css';




document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />

    <main>
      <Banner />
      <Menu/>
      <Gallery/>
      <Contact/>
    </main>

    <Footer />
  </div>
);
