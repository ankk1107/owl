const fetchStudentMsg = require('./fetchStudentMsg/index');

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'fetchStudentMsg':
      return await fetchStudentMsg.main(event, context);
  }
};