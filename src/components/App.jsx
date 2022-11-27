import { users } from './data/User.js';
import { User } from './User/User.jsx';
import { UsersList } from './UsersList/UsersList.jsx';
import { Section } from './Section/Section.jsx';

export const App = () => {
  return (
    <>
      <User user={users[0]} />
      <UsersList users={users} />
    </>
  );
};
