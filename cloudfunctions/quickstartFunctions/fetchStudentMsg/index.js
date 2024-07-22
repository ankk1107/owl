const cloud = require('wx-server-sdk');
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
});

const db = cloud.database();

exports.main = async (event, context) => {
  if (!event.data) return {
    data: null
  }
  const result = await db.collection('student').where({
    '身份证号': event.data
  }).get();

  return {
    data: result?.data?.[0],
  }
};