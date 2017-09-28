export const allUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};
