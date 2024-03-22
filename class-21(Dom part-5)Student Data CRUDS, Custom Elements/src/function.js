/**
 * create validation alert
 * @param {*} msg 
 * @param {*} type 
 */

const  createAlert = (msg , type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button class ="btn-close" data-bs-dismiss="alert"></button></p>`;
};
/**
 * check a email is email
 * @param {*} email 
 * @returns 
 */
const isEmail = (email) => {
    const pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{2,}\.[a-z]{2,4}$/;
 return pattern.test(email);
};

/**
 * check a mobile is mobile
 * @param {*} mobile
 * @returns 
 */
const isMobile = (mobile) => {
    const pattern = /^(\+8801|8801|01)[0-9]{9}$/;
 return pattern.test(mobile);
};



const createID = () => {
    const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    const machineId = "xxxxxxxxxxxx".replace(/[x]/g, function () {
      return ((Math.random() * 16) | 0).toString(16);
    });
    const processId = (Math.floor(Math.random() * 1000) % 1000)
      .toString(16)
      .padStart(3, "0");
    const counter = ((Math.random() * 16777216) | 0)
      .toString(16)
      .padStart(6, "0");
  
    return timestamp + machineId + processId + counter;
  };


