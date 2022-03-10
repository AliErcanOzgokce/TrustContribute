import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x4f32efD59fC3E01926b170EAB154a80Ef7efbd6c'
);

export default instance;
