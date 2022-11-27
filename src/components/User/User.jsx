import PropTypes from 'prop-types';

export const User = ({ user: { name, email } }) => {
  return (
    <>
      <p>
        Name: <span>{name}</span>
      </p>
      <p>
        Email: <span>{email}</span>
      </p>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
