import { Component } from 'react';
import { Container } from '../components/common';
import { Authorize } from '../components/auth';
import { Creature, ProfileForm, UserProfile } from '../components/profile';

class ProfilePage extends Component {
  render() {
    return (
      <Authorize>
        <Container>
          <header>
            <h1 className="text-3xl bold">Profile</h1>
          </header>

          <section className="flex justify-between flex-wrap mt-8">
            <div className="w-full md:w-8/12">
              <UserProfile></UserProfile>
            </div>

            <div className="w-full md:w-4/12 flex justify-center mt-8 md:mt-0">
              <Creature></Creature>
            </div>
          </section>

          <section className="mt-4 md:w-1/4 md:mt-12 mx-auto">
            <ProfileForm></ProfileForm>
          </section>
        </Container>
      </Authorize>
    );
  }
}

export default ProfilePage;
