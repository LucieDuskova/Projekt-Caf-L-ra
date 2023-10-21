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

// vybirám 
const navBtnElement = document.querySelector('.nav-btn')

const rolloutNavElement = document.querySelector('.rollout-nav')




// posluchač - přepínám třídu nav-closed
// Zobrazování a skrývání navigačního menu uděláme tak, že budeme prvku .rollout-nav přidávat nebo odebírat třídu nav-closed. V hlavním index.jsx vyberte ikonku .nav-btn a připojte k ní posluchač události click. Tento posluchač bude přepínat třídu nav-closed na prvku .rollout-nav. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.


const prepinamTriduNav = () => {
  rolloutNavElement.classList.toggle('nav-closed')
}

navBtnElement.addEventListener('click', prepinamTriduNav)



// posluchač - pridávam třídu nav-closed na libovolný položku
// Navigaci budeme chtít schovat i po kliknutí na odkaz na nějakou sekci. Připojte tedy další posluchač události přímo na prvek .rollout-nav. V posluchači události zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala (tj. prvku .rollout-nav přidáte třídu nav-closed, obdobně, jako v předchozím kroku při přepínání).

const pridamTriduNavClosed = () => {
  rolloutNavElement.classList.add('nav-closed');
};

rolloutNavElement.addEventListener('click', pridamTriduNavClosed)


