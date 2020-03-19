// include express so that methods like .Router() are available
const express = require("express");
// reference to the items file in order to write using writeJSONFile
const allItems = __dirname + "/../../model/items.json";
// work with an array of data from items
const items = require(allItems);
// helper functions:writeJSONFile and getNewId
const helper = require("../../helper/helper");
// express router
const router = express.Router();

// get all items
router.get("/", (req, res) => {
  const getItems = items.map(item => {
    return {
      id: item.id
    };
  });
  res.json(getItems);
});

// create new item
router.post("/", (req, res) => {
  const newItem = {
    id: helper.getNewId(),
    // ownedBy: ,
    title: req.body.title,
    type: req.body.type,
    text: req.body.text,
    area: req.body.area,
    conversations: []
  };
  items.push(newItem);
  helper.writeJSONFile(allItems, items);
  res.json(items);
});

module.exports = router;
