migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3mw0vbqti8th5bv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wvn65uju",
    "name": "img",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3mw0vbqti8th5bv")

  // remove
  collection.schema.removeField("wvn65uju")

  return dao.saveCollection(collection)
})
