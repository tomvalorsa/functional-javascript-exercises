// Pass in the list of good users
function checkUsersValid(goodUsers) {
  // Pass in a list of users to check
  return function (submittedUsers) {
    // Check to make sure that every submitted user...
    return submittedUsers.every(function (submittedUser) {
      // ...and some of the good users...
      return goodUsers.some(function (goodUser) {
        // ...match up.
        return goodUser.id === submittedUser.id;
        // Every submitted user needs to meet this condition, but only some of the good users have to.
        // This is why they are nested.
        // i.e. not all of the good users have to be in the submitted user list.
        // But all of the submitted users need to be found somewhere in the good user list
        // to let us know they are valid.
      });
    });
  };
}

module.exports = checkUsersValid