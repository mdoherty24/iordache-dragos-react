import { Component } from 'react';
import { Button } from './../ui';
import { connect } from 'react-redux';
import { patchUserProfile, setCreatureColor } from '../../actions';

class ProfileForm extends Component {
  render() {
    const { mainColor, secondaryColor, eyeColor } = this.props.creature;
    const { id } = this.props.user;
    const dispatch = this.props.dispatch;

    const onColorPickerChange = (event) => {
      const element = event.currentTarget;
      const targetProperty = element.name;
      const colorValue = element.value;

      this.props.dispatch(setCreatureColor(targetProperty, colorValue));
    };

    const onSubmit = (event) => {
      event.preventDefault();
      dispatch(
        patchUserProfile(id, {
          mainColor,
          secondaryColor,
          eyeColor,
        }),
      );
    };

    return (
      <form onSubmit={onSubmit}>
        <div className="mb-4 flex justify-between">
          <label htmlFor="mainColor">Main Color</label>
          <input
            type="color"
            name="mainColor"
            id="mainColor"
            value={mainColor}
            onChange={onColorPickerChange}
          ></input>
        </div>

        <div className="mb-4 flex justify-between">
          <label htmlFor="secondaryColor">Secondary Color</label>
          <input
            type="color"
            name="secondaryColor"
            id="secondaryColor"
            value={secondaryColor}
            onChange={onColorPickerChange}
          ></input>
        </div>

        <div className="mb-4 flex justify-between">
          <label htmlFor="eyeColor">Eye Color</label>
          <input
            type="color"
            name="eyeColor"
            id="eyeColor"
            value={eyeColor}
            onChange={onColorPickerChange}
          ></input>
        </div>

        <div className="text-center">
          <Button type="submit">Save</Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ profile, auth }) => {
  return {
    creature: profile.creature,
    user: auth.user,
  };
};

export default connect(mapStateToProps)(ProfileForm);
