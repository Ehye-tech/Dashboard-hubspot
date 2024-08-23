const axios = require("axios");
const dotenv = require("dotenv");

// Setting for running server
dotenv.config();

function getDomain(email) {
  const domainRegex = /@([^.]+)\.[^.]+$/;
  const match = domainRegex.exec(email);
  return match ? match[1] : "";
}

function filterDomain(email, key, obj) {
  domainMap = {}
  domainMap[key] = domainMap[key] || [];
  domainMap[key].push(obj);
  return domainMap
}

function convertTimetoUnix(dateString) {
  // Create a Date object from the string
  const dateObject = new Date(dateString);

  // Convert the Date object to a Unix timestamp (milliseconds)
  return dateObject.getTime();
}

module.exports = {
  getDomain,
  filterDomain,
  convertTimetoUnix,
};


const header = {
  Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  "Content-Type": "application/json",
};

async function getAllContacts() {
  try {
    const endPoint = `${process.env.ENDPOINT}${process.env.CONTACT_PATH}`
    
    let domainMap = {};
    const res = await axios.get(
      `${endPoint}`,
      {
        headers: header,
      }
    );
    
    const result = res.data.results;
    result.forEach((element) => {
      element.timeStamp = convertTimetoUnix(element.createdAt);
    });

    result.forEach((element) => {
      const obj = {
        timeStamp: element.timeStamp,
        id: element.id,
        email: element.properties.email,
      };

      const domain = getDomain(element.properties.email);
      domainMap = filterDomain(element.properties.email, domain, obj);
    });
    return domainMap;
  } catch (error) {
    console.error("[Contact Service - getAllContacts] ERROR:", error);
    return []; // Handle error by returning an empty array
  }
}

module.exports = { getAllContacts };
