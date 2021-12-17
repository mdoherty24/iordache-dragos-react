import { Component } from 'react';
import { connect } from 'react-redux';
import { GrUserExpert } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';

class UserProfile extends Component {
  render() {
    const { firstName, lastName, email, avatar } = this.props.user;
    const fullName = `${firstName} ${lastName}`;

    return (
      <>
        <h2 className="text-xl bold">User Info</h2>

        <div className="flex flex-col md:flex-row justify-between mt-8">
          <picture className="mr-8 inline-block rounded-full self-center overflow-hidden shadow mb-4 md:mb-0">
            <img src={avatar} alt={fullName}></img>
          </picture>

          <ul className="border rounded-md shadow flex-grow">
            <li className="border-b p-3">
              <GrUserExpert className="mr-2"></GrUserExpert>
              {fullName}
            </li>

            <li className="border-b p-3">
              <HiOutlineMail className="mr-2"></HiOutlineMail>
              {email}
            </li>
          </ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
  };
};

export default connect(mapStateToProps)(UserProfile);
