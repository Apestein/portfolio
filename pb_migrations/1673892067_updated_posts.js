migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3mw0vbqti8th5bv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dorrwkeo",
    "name": "content",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gp4dmvu0",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3mw0vbqti8th5bv")

  // remove
  collection.schema.removeField("dorrwkeo")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})