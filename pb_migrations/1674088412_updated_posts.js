migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3mw0vbqti8th5bv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1wcjeflo",
    "name": "link",
    "type": "url",
    "required": true,
    "unique": true,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3mw0vbqti8th5bv")

  // remove
  collection.schema.removeField("1wcjeflo")

  return dao.saveCollection(collection)
})
