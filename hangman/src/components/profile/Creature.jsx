import { useSelector } from 'react-redux';
import './Creature.css';

const modifierMap = {
  worried: 'eye--worried',
  annoyed: 'eye--annoyed eye--worried',
  dead: 'eye--closed',
};

const eyeDefaults = 'eye eye--blinking creature__eye';

export const Creature = ({ modifier }) => {
  const { mainColor, secondaryColor, eyeColor } = useSelector((state) => {
    return {
      ...state.profile.creature,
    };
  });

  let eyeClasses = eyeDefaults;

  if (modifier) {
    eyeClasses = `${eyeClasses} ${modifierMap[modifier]}`;
  }

  return (
    <div
      className="creature"
      style={{
        backgroundColor: mainColor,
        borderColor: secondaryColor,
      }}
    >
      <div className="creature__eyes">
        <div className={`${eyeClasses} creature__eye--left`}>
          <div
            className="eye__iris"
            style={{ backgroundColor: eyeColor }}
          ></div>

          <div
            className="eye__lid"
            style={{
              backgroundColor: secondaryColor,
            }}
          ></div>
        </div>
        <div className={`${eyeClasses} creature__eye--right`}>
          <div
            className="eye__iris"
            style={{ backgroundColor: eyeColor }}
          ></div>

          <div
            className="eye__lid"
            style={{
              backgroundColor: secondaryColor,
            }}
          ></div>
        </div>
      </div>

      <div className="creature__nose-line">
        <div
          className="nose creature__nose"
          style={{ backgroundColor: secondaryColor, borderColor: mainColor }}
        >
          <div
            className="nose__nostril nose__nostril--left"
            style={{ backgroundColor: mainColor }}
          ></div>
          <div
            className="nose__nostril nose__nostril--right"
            style={{ backgroundColor: mainColor }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Creature;
