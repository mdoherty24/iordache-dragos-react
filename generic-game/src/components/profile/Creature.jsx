import './Creature.css';

export const Creature = () => {
  return (
    <div className="creature">
      <div className="creature__eyes">
        <div className="eye eye--blinking creature__eye creature__eye--left">
          <div className="eye__iris"></div>

          <div className="eye__lid"></div>
        </div>

        <div className="eye eye--blinking creature__eye creature__eye--right">
          <div className="eye__iris"></div>

          <div className="eye__lid"></div>
        </div>
      </div>

      <div className="creature__nose-line">
        <div className="nose creature__nose">
          <div className="nose__nostril nose__nostril--left"></div>

          <div className="nose__nostril nose__nostril--right"></div>
        </div>
      </div>
    </div>
  );
};

// Rust

export default Creature;
