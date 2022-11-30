// 과제로 구현해야하는 부분 2번
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'http://localhost:3000/lists';

const scrapeData = async () => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const listItems = $('.table tbody tr');
    
    const users = [];

    listItems.each((idx, el) => {
      const user = {};
      
      user.name = $(el).children('.name').text();
      user.phoneNumber = $(el).children('.phoneNumber').text();
      user.birthdate = $(el).children('.birthdate').text();
      user.email = $(el).children('.email').text();

      users.push(user);
    });

    const writeStream = fs.createWriteStream('user-info.csv');

    writeStream.on('finish', () => {
      console.log('FINISH!!');
    });

    users.forEach((user) => {
      const value = Object.keys(user)
        .map((key) => {
          return user[key]; 
        })
        .join(',');

      writeStream.write(`${value}\n`);
    });

    writeStream.end();
  } catch (err) {
    console.error(err);
  }
};

scrapeData();