import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xF41DF1A7986E0b7aD44aB67192C225Df98d61957'
);

export default instance;
