migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3mw0vbqti8th5bv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s4hvykxj",
    "name": "json",
    "type": "json",
    "required": true,
    "unique": true,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3mw0vbqti8th5bv")

  // remove
  collection.schema.removeField("s4hvykxj")

  return dao.saveCollection(collection)
})
