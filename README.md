
# dkrm-mongoose-paginate

> Pagination plugin for [Mongoose](http://mongoosejs.com)

## Installation

```sh
npm install dkrm-mongoose-paginate
```

## Usage

Add plugin to a schema and then use model `paginate` method:

```js
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({ /* schema definition */ });
schema.plugin(mongoosePaginate);

var Model = mongoose.model('Model',  schema); // Model.paginate()
```

### Model.paginate().find({ _id: '12345'}).exec()
