export const mongoDbLogger = store => next => action => {
  console.log('logged action', action);
  return next(action);
}