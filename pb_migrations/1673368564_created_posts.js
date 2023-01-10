migrate((db) => {
  const collection = new Collection({
    "id": "3mw0vbqti8th5bv",
    "created": "2023-01-10 16:36:04.141Z",
    "updated": "2023-01-10 16:36:04.141Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gp4dmvu0",
        "name": "field",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3mw0vbqti8th5bv");

  return dao.deleteCollection(collection);
})
