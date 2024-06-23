const autoPost: {[key: string]: string} = {
  "img": "https://dummyimage.com/300x200/000/fff",
  "url": "projects/auto-post",
};
const naverKinScraper: {[key: string]: string} = {
  "img": "https://dummyimage.com/300x200/000/fff",
  "url": "projects/naver-kin-scraper",
};


const waisMission: {[key: string]: string} = {
  "img": "https://dummyimage.com/300x200/000/fff",
  "url": "projects/wais-mission",
};
const waisTools: {[key: string]: string} = {
  "img": "https://dummyimage.com/300x200/000/fff",
  "url": "projects/wais-tools",
};


const pythonScraper: {[key: string]: string} = {
  "img": "https://dummyimage.com/300x200/000/fff",
  "url": "projects/python-scraper",
};
const palcord: {[key: string]: string} = {
  "img": "https://dummyimage.com/300x200/000/fff",
  "url": "projects/palcord",
};
const lambsBaaing: {[key: string]: string} = {
  "img": "https://dummyimage.com/300x200/000/fff",
  "url": "projects/lambs-baaing",
};
const miniScheduler: {[key: string]: string} = {
  "img": "https://dummyimage.com/300x200/000/fff",
  "url": "projects/mini-scheduler",
};


const neverEndingStory: {[key: string]: string} = {
  "img": "https://dummyimage.com/300x200/000/fff",
  "url": "projects/never-ending-story",
};
const codebee: {[key: string]: string} = {
  "img": "https://dummyimage.com/300x200/000/fff",
  "url": "projects/codebee",
};
const camp23: {[key: string]: string} = {
  "img": "https://dummyimage.com/300x200/000/fff",
  "url": "projects/camp23",
};


const outsourcingCards: Array<{[key: string]: string}> = [
  autoPost,
  naverKinScraper,
];
const companyCards: Array<{[key: string]: string}> = [
  waisMission,
  waisTools,
];
const personalCards: Array<{[key: string]: string}> = [
  pythonScraper,
  palcord,
  lambsBaaing,
  miniScheduler,
];
const teamCards: Array<{[key: string]: string}> = [
  neverEndingStory,
  codebee,
  camp23,
];


const projectCards: Array<Array<{[key: string]: string}>> = [
  outsourcingCards,
  companyCards,
  personalCards,
  teamCards,
];


export default projectCards;