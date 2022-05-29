import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';

function getDateDiff (dateFrom, dateTo) {
  const dateFromObj = DateTime.fromISO(dateFrom);
  const dateToObj = DateTime.fromISO(dateTo);
  
  return dateFromObj.diff(dateToObj, ['years', 'months', 'days']).toObject()
};

export default getDateDiff;