# CycurID API with Typescript

How to use this Server:
Make sure to configure you .env with your clientID and clientSecret.

After Deploying The server your Frontend will need to make a post request to the server passing the code received from the widget in the params.

Example:

const response = await axios.post("http://localhost:3001/userInfo", {
code,
});
