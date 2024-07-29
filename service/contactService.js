const {
  getDomain,
  filterDomain,
  compareTimeStamps,
  convertTimetoUnix,
} = require("./utilService");
const axios = require("axios");
const dotenv = require("dotenv");

// Setting for running server
dotenv.config();

const header = {
  Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  "Content-Type": "application/json",
};

async function getAllContacts() {
  try {
    const domainMap = {};
    const res = await axios.get(
      `${process.env.ENDPOINT}/${process.env.CONTACT_PATH}`,
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
      filterDomain(domainMap, element.properties.email, domain, obj);
    });
    return domainMap;
  } catch (error) {
    console.error("[Contact Service ERROR]:", error);
    return []; // Handle error by returning an empty array
  }
}

module.exports = { getAllContacts };
