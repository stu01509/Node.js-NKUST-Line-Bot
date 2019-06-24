const loginMessage = {
  type: 'template',
  altText: '請先登入以取得個人資訊',
  template: {
    type: 'buttons',
    title: '系統登入',
    text: '登入系統後即代表您同意將使用者資訊儲存於伺服器中, 以利後續服務的查詢',
    actions: [{
      type: 'postback',
      label: '登入',
      data: 'login',
    },
    ],
  },
};

const loginNotifyMessage = [
  { type: 'text', text: '請輸入您的學號與密碼\n格式如下' },
  { type: 'text', text: 'C107123456\n123456' },
];

let courseData = [];
let courseMessage = '';

const setCourseMessage = data => new Promise((resolve, reject) => {
  // courseData = data.slice(0);
  // console.log(courseData[0]);
  courseMessage = {
    type: 'flex',
    altText: '個人課表',
    contents: {
      type: 'carousel',
      contents: [{
        type: 'bubble',
        styles: {
          footer: {
            separator: true,
          },
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '星期一',
              weight: 'bold',
              size: 'xl',
              margin: 'sm',
              color: '#457E9B',
            },
            {
              type: 'separator',
              margin: 'xxl',
            },
            {
              type: 'box',
              layout: 'vertical',
              margin: 'xxl',
              spacing: 'sm',
              contents: [{
                type: 'box',
                layout: 'horizontal',
                contents: [{
                  type: 'text',
                  text: '第9節 1730-1820',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: data[0],
                  size: 'sm',
                  color: '#111111',
                  align: 'end',
                },
                {
                  type: 'text',
                  text: '資001',
                  size: 'sm',
                  color: '#111111',
                  align: 'end',
                },
                ],
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [{
                  type: 'text',
                  text: data[1],
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: '張雲龍',
                  size: 'sm',
                  color: '#111111',
                  align: 'end',
                },
                {
                  type: 'text',
                  text: '資001',
                  size: 'sm',
                  color: '#111111',
                  align: 'end',
                },
                ],
              },
  
              ],
            },
            {
              type: 'separator',
              margin: 'xxl',
            },
          ],
        },
      }],
    },
  };
  resolve();
});


module.exports.loginMessage = loginMessage;
module.exports.loginNotifyMessage = loginNotifyMessage;
module.exports.courseMessage = courseMessage;
module.exports.setCourseMessage = setCourseMessage;
