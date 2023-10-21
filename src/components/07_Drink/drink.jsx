import { Layer } from '../08_Layer/layer';



export const Drink = ({ id, name, ordered, image, layers }) => {
 
const nazevTlacitka = ordered ? 'Zrušit' : 'Objednat'

const tridaTlacitka = ordered ? 'order-btn order-btn--ordered' : 'order-btn '

  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>

          {layers.map((layer) => {
            return <Layer color={layer.color} label={layer.label} />;
          })}
        </div>
      </div>
      <div className="drink__controls">
        <form className="drink_form">
          <button className={tridaTlacitka} type="submit">
            {nazevTlacitka}
          </button>
          <input type="hidden" value={id} />
        </form>
      </div>
    </div>
  );
};
