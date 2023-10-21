import './menu.css';
import { Drink } from '../07_Drink/drink';

const response = await fetch('http://localhost:4000/api/drinks');
const dataJson = await response.json();

const events = dataJson.result;

export const Menu = ({ drinks }) => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {events.map((event) => (
            <Drink
              key={event.id}
              name={event.name}
              ordered={event.ordered}
              image={`http://localhost:4000${event.image}`}
              layers={event.layers}
            />
          ))}
        </div>

        <div className="order-detail">
          <a href="/objednavka">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
