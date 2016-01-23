import minimongo from 'minimongo';

export const mongoDbLogger = config => {
  const LocalDb = minimongo.MemoryDb;

  const db = new LocalDb();

  const { collection = 'redux-logs' } = config;

  db.addCollection(collection);

  return store => next => action => {
    db[collection].upsert(action, function() {
        return next(action);
    });
  }
}