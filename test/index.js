var ReduxMongoLogger = require('../dist/index');
var expect = require('expect');

expect(ReduxMongoLogger.mongoDbLogger()).toNotThrow();
expect(ReduxMongoLogger.mongoDbLogger({ collection: 'baz' })).toNotThrow();

var foo = ReduxMongoLogger.mongoDbLogger({ collection: 'baz' });