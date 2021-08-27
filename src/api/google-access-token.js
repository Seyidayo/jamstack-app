const { google } = require("googleapis");
const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirectUri = process.env.GOOGLE_REDIRECT_URI;

const appRedirectUrl = process.env.APP_REDIRECT_URI;

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  redirectUri
);

google.options({ auth: oauth2Client });

const googleAccessTokenHandler = async (req, res) => {
  const code = req.query.code;
  const token = await oauth2Client.getToken(code);
  const tokens = JSON.stringify(token.tokens);
  return res.redirect(`${appRedirectUrl}?token=${tokens}`);
};

export default googleAccessTokenHandler;
