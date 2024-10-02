const { getConnectedClient } = require("../database");

const getCollection = () => {
  const client = getConnectedClient();
  const collection = client.db("todosdbtwo").collection("todostwo");
  return collection;
};

module.exports = { getCollection };