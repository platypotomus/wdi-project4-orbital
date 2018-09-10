const dbURI = process.env.DBURI || 'mongodb://localhost/orbital';
const port = 4000;
const secret = process.env.SECRET || 'afsd93DkafdpysDiaIDSAFadfsiaFdfs,304iaPdsfaXdf';

const giphyApiKey = process.env.GIPHY_API_KEY;

module.exports = {
  dbURI, port, secret, giphyApiKey
};
