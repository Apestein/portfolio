migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3mw0vbqti8th5bv")

  // remove
  collection.schema.removeField("dorrwkeo")

  // remove
  collection.schema.removeField("wvn65uju")

  // remove
  collection.schema.removeField("rrc8meyn")

  // remove
  collection.schema.removeField("s4hvykxj")

  return dao.saveCollection(collection)
}, (db) => {
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rrc8meyn",
    "name": "repo",
    "type": "url",
    "required": true,
    "unique": true,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

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
})
