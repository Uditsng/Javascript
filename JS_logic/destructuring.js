// Destructuring is a JavaScript feature that allows you to extract values from arrays and objects into distinct variables.
const user = {
    address: {
      zipCode: '12345'
    }
  };
  const { zipCode } = user.address;
  console.log(zipCode);