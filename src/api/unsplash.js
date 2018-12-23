import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 77a57ee22707f28f4245fc736d12819669adaf1a14ec39630fda7ae0e8187581'
  }
});
