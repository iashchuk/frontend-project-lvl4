import cookies from 'js-cookie';
import faker from 'faker';

const getUserName = () => {
  const userName = cookies.get('userName');

  if (userName) {
    return userName;
  }

  const newName = faker.name.findName();
  cookies.set('userName', newName);

  return newName;
};

export default getUserName;
