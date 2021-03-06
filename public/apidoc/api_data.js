define({ "api": [
  {
    "type": "get",
    "url": "/category",
    "title": "List all categories",
    "name": "GetCategory",
    "group": "Category",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of category</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>date last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n {\n   createdAt: 1568910220223,\n   updatedAt: 1568910220223,\n   id: \"5d83ab8c6ae0bd5095e0d09c\",\n   name: \"Acaiteria\"\n },\n {\n   createdAt: 1568893456234,\n   updatedAt: 1568893456234,\n   id: \"5d83ab8c6ae0bd5095e0d09c\",\n   name: \"Padaria\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/CategoryController.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/category",
    "title": "Created category",
    "name": "PostCategory",
    "group": "Category",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of category</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n  createdAt: 1568910220223,\n  updatedAt: 1568910220223,\n  id: \"5d83ab8c6ae0bd5095e0d09c\",\n  name: \"Acaiteria\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/CategoryController.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/category",
    "title": "Created category",
    "name": "PostCategory",
    "group": "Category",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of category</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n  createdAt: 1568910220223,\n  updatedAt: 1568910220223,\n  id: \"5d83ab8c6ae0bd5095e0d09c\",\n  name: \"Acaiteria\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/RestaurantController.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/restaurant",
    "title": "List all restaurant",
    "name": "GetRestaurant",
    "group": "Restaurant",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of category</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of category</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>date created</p>"
          },
          {
            "group": "Success 200",
            "type": "Category",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>date last update</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "[\n {\n   rating: 4.9,\n   deliveryEstimate: \"25m\",\n   imagePath: \"assets/img/restaurants/breadbakery.png\",\n   hours: \"Funciona de segunda à sexta, de 8h às 23h\"\n   createdAt: 1568910220223,\n   updatedAt: 1568910220223,\n   id: \"5d83ab8c6ae0bd5095e0d09c\",\n   name: \"Bread & Bakery\"\n   categorys:[\n               {\n                 createdAt: 1568910220223,\n                 updatedAt: 1568910220223,\n                 id: \"5d83ab8c6ae0bd5095e0d09c\",\n                 name: \"Acaiteria\"\n               },\n             ]\n },\n {\n   rating: 4.9,\n   deliveryEstimate: \"25m\",\n   imagePath: \"assets/img/restaurants/breadbakery.png\",\n   hours: \"Funciona de segunda à sexta, de 8h às 23h\"\n   createdAt: 1568910220223,\n   updatedAt: 1568910220223,\n   id: \"5d83ab8c6ae0bd5095e0d09c\",\n   name: \"Bread & Bakery\",\n   categorys:[\n               {\n                 createdAt: 1568910220223,\n                 updatedAt: 1568910220223,\n                 id: \"5d83ab8c6ae0bd5095e0d09c\",\n                 name: \"Acaiteria\"\n               },\n             ]\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/controllers/RestaurantController.js",
    "groupTitle": "Restaurant"
  }
] });
