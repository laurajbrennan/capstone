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
      id: item.id,
      ownedBy: item.ownedBy,
      type: item.type,
      title: item.title,
      description: item.description,
      area: item.area,
      conversations: item.conversations
    };
  });
  res.json(getItems);
});

// get a specific item
router.get("/:id", (req, res) => {
  let item = items.find(item => {
    return item.id === req.params.id;
  });
  if (item.id === req.params.id) {
    return res.json(item);
  } else {
    res.status(404).json({
      error: `Item ID${req.params.id} is not found`
    });
  }
});

// create new item
router.post("/", (req, res) => {
  const newItem = {
    id: helper.getNewId(),
    ownedBy: req.body.ownedBy,
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

// add conversations to an item
router.put("/:id", (req, res) => {
  console.log(req);
  const newMessage = {
    id: helper.getNewId(),
    sentBy: req.body.sentBy,
    item: req.body.item,
    itemOwner: req.body.itemOwner,
    text: req.body.text
  };
  const found = items.some(item => item.id === req.params.id);
  if (found) {
    items.forEach(item => {
      if (item.id === req.params.id) {
        item.conversations.push(newMessage);
      }
      helper.writeJSONFile(allItems, items);
      res.json(items);
    });
  } else {
    res
      .status(404)
      .json({ errorMessage: `Item with ID: ${req.params.id} not found` });
  }
});

module.exports = router;
