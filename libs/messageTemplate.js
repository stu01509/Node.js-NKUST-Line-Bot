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

const courseSelectMessage = {
  type: 'text',
  text: '請選擇您要查詢的學期',
  quickReply: {
    items: [
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '108-上',
          text: '108-上',
          data: 'course&108&1',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '107-下',
          text: '107-下',
          data: 'course&107&2',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '107-上',
          text: '107-上',
          data: 'course&107&1',
        },
      },
    ],
  },
};

const scoreSelectMessage = {
  type: 'text',
  text: '請選擇您要查詢的學期',
  quickReply: {
    items: [
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '108-上',
          text: '108-上',
          data: 'score&108&1',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '107-下',
          text: '107-下',
          data: 'score&107&2',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '107-上',
          text: '107-上',
          data: 'score&107&1',
        },
      },
    ],
  },
};

const leaveSelectMessage = {
  type: 'text',
  text: '請選擇您要查詢的學期',
  quickReply: {
    items: [
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '108-上',
          text: '108-上',
          data: 'leave&108&1',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '107-下',
          text: '107-下',
          data: 'leave&107&2',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '107-上',
          text: '107-上',
          data: 'leave&107&1',
        },
      },
    ],
  },
};

let courseMessage = '';
const setCourseMessage = courseData => new Promise((resolve, reject) => {
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
                  text: '第一節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[1],
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
                  text: '第二節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[9],
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
                  text: '第三節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[17],
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
                  text: '第四節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[25],
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
                  text: '第五節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[41],
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
                  text: '第六節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[49],
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
                  text: '第七節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[57],
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
                  text: '第八節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[65],
                  size: 'sm',
                  color: '#111111',
                  align: 'end',
                },
                ],
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [{
                  type: 'text',
                  text: '第九節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[73],
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
                  text: '第十節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[81],
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
                  text: '第十一節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[89],
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
                  text: '第十二節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[97],
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
                  text: '第十三節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[105],
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
      }, {
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
              text: '星期二',
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
                  text: '第一節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[2],
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
                  text: '第二節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[10],
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
                  text: '第三節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[18],
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
                  text: '第四節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[26],
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
                  text: '第五節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[42],
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
                  text: '第六節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[50],
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
                  text: '第七節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[58],
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
                  text: '第八節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[66],
                  size: 'sm',
                  color: '#111111',
                  align: 'end',
                },
                ],
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [{
                  type: 'text',
                  text: '第九節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[74],
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
                  text: '第十節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[82],
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
                  text: '第十一節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[90],
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
                  text: '第十二節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[98],
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
                  text: '第十三節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[106],
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
      }, {
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
              text: '星期三',
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
                  text: '第一節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[3],
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
                  text: '第二節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[11],
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
                  text: '第三節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[19],
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
                  text: '第四節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[27],
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
                  text: '第五節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[43],
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
                  text: '第六節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[51],
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
                  text: '第七節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[59],
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
                  text: '第八節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[67],
                  size: 'sm',
                  color: '#111111',
                  align: 'end',
                },
                ],
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [{
                  type: 'text',
                  text: '第九節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[75],
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
                  text: '第十節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[83],
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
                  text: '第十一節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[91],
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
                  text: '第十二節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[99],
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
                  text: '第十三節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[107],
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
      }, {
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
              text: '星期四',
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
                  text: '第一節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[4],
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
                  text: '第二節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[12],
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
                  text: '第三節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[20],
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
                  text: '第四節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[28],
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
                  text: '第五節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[44],
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
                  text: '第六節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[52],
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
                  text: '第七節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[60],
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
                  text: '第八節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[68],
                  size: 'sm',
                  color: '#111111',
                  align: 'end',
                },
                ],
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [{
                  type: 'text',
                  text: '第九節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[76],
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
                  text: '第十節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[84],
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
                  text: '第十一節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[92],
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
                  text: '第十二節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[100],
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
                  text: '第十三節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[108],
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
      }, {
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
              text: '星期五',
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
                  text: '第一節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[5],
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
                  text: '第二節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[13],
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
                  text: '第三節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[21],
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
                  text: '第四節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[29],
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
                  text: '第五節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[45],
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
                  text: '第六節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[53],
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
                  text: '第七節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[61],
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
                  text: '第八節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[69],
                  size: 'sm',
                  color: '#111111',
                  align: 'end',
                },
                ],
              },
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'horizontal',
                contents: [{
                  type: 'text',
                  text: '第九節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[77],
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
                  text: '第十節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[85],
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
                  text: '第十一節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[93],
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
                  text: '第十二節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[101],
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
                  text: '第十三節',
                  size: 'sm',
                  color: '#555555',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: courseData[109],
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
  resolve(courseMessage);
});

let scoreMessage = '';
const setScoreMessage = (scoreData, rankData) => new Promise((resolve, reject) => {
  const scoreContent = [{
    type: 'box',
    layout: 'horizontal',
    contents: [{
      type: 'box',
      layout: 'horizontal',
      contents: [{
        type: 'text',
        text: '科目',
        size: 'sm',
        color: '#555555',
        flex: 0,
      }],
    },
    {
      type: 'text',
      text: '學分數',
      size: 'sm',
      color: '#111111',
      align: 'center',
    },
    {
      type: 'text',
      text: '期中',
      size: 'sm',
      color: '#111111',
      align: 'center',
    },
    {
      type: 'text',
      text: '學期',
      size: 'sm',
      color: '#111111',
      align: 'center',
    },
    ],
  },
  ];

  for (let i = 0; i < scoreData.length; i += 4) {
    const index = i;
    scoreContent.push({
      type: 'box',
      layout: 'horizontal',
      contents: [{
        type: 'box',
        layout: 'horizontal',
        contents: [{
          type: 'text',
          // 科目欄位
          text: scoreData[index],
          size: 'sm',
          color: '#555555',
          flex: 0,
        }],
      },
      {
        type: 'text',
        // 學分數欄位
        text: scoreData[index + 1],
        size: 'sm',
        color: '#111111',
        align: 'center',
      },
      {
        type: 'text',
        // 期中分數
        text: scoreData[index + 2],
        size: 'sm',
        color: '#111111',
        align: 'center',
      },
      {
        type: 'text',
        // 學期分數
        text: scoreData[index + 3],
        size: 'sm',
        color: '#111111',
        align: 'center',
      },
      ],
    });
  }

  scoreMessage = {
    type: 'flex',
    altText: '個人成績',
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
              text: '個人成績單',
              weight: 'bold',
              size: 'xxl',
              margin: 'md',
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
              contents: scoreContent,
            },
            {
              type: 'separator',
              margin: 'xxl',
            },
            {
              type: 'box',
              layout: 'horizontal',
              margin: 'md',
              contents: [
                {
                  type: 'text',
                  text: rankData[0],
                  size: 'xs',
                  color: '#aaaaaa',
                  flex: 0,
                },
              ],
            },
            {
              type: 'box',
              layout: 'horizontal',
              margin: 'md',
              contents: [
                {
                  type: 'text',
                  text: rankData[1],
                  size: 'xs',
                  color: '#aaaaaa',
                  flex: 0,
                },
              ],
            },
          ],
        },
      }],
    },
  };
  resolve(scoreMessage);
});

let leaveMessage = '';
const setLeaveMessage = leaveData => new Promise((resolve, reject) => {
  const leaveContent = [];

  for (let i = 0; i < leaveData.length; i += 19) {
    const index = i;
    leaveContent.push({
      type: 'box',
      layout: 'vertical',
      margin: 'md',
      spacing: 'sm',
      contents: [
        {
          type: 'box',
          layout: 'horizontal',
          margin: 'md',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '日期:',
                  size: 'sm',
                  color: '#555555',
                },
              ],
              flex: 3,
            },
            {
              type: 'text',
              text: '1',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
            {
              type: 'text',
              text: '2',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
            {
              type: 'text',
              text: '3',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
            {
              type: 'text',
              text: '4',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
            {
              type: 'text',
              text: 'A',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
            {
              type: 'text',
              text: '5',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
            {
              type: 'text',
              text: '6',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
          ],
        },
        {
          type: 'box',
          layout: 'horizontal',
          margin: 'md',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: leaveData[index + 2],
                  size: 'sm',
                  color: '#555555',
                },
              ],
              flex: 3,
            },
            {
              type: 'text',
              text: leaveData[index + 5].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
            {
              type: 'text',
              text: leaveData[index + 6].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
            {
              type: 'text',
              text: leaveData[index + 7].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
            {
              type: 'text',
              text: leaveData[index + 8].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
            {
              type: 'text',
              text: leaveData[index + 9].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
            {
              type: 'text',
              text: leaveData[index + 10].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
            {
              type: 'text',
              text: leaveData[index + 11].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
          ],
        },
        {
          type: 'box',
          layout: 'horizontal',
          margin: 'md',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: '假單編號:',
                  size: 'sm',
                  color: '#555555',
                },
              ],
              flex: 3,
            },
            {
              type: 'text',
              text: '7',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
            {
              type: 'text',
              text: '8',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
            {
              type: 'text',
              text: '9',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
            {
              type: 'text',
              text: '10',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
            {
              type: 'text',
              text: '11',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
            {
              type: 'text',
              text: '12',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
            {
              type: 'text',
              text: '13',
              size: 'sm',
              color: '#aaaaaa',
              align: 'end',
            },
          ],
        },
        {
          type: 'box',
          layout: 'horizontal',
          margin: 'md',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: leaveData[index + 1],
                  size: 'sm',
                  color: '#555555',
                },
              ],
              flex: 3,
            },
            {
              type: 'text',
              text: leaveData[index + 12].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
            {
              type: 'text',
              text: leaveData[index + 13].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
            {
              type: 'text',
              text: leaveData[index + 14].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
            {
              type: 'text',
              text: leaveData[index + 15].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
            {
              type: 'text',
              text: leaveData[index + 16].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
            {
              type: 'text',
              text: leaveData[index + 17].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
            {
              type: 'text',
              text: leaveData[index + 18].substr(0, 1),
              size: 'sm',
              color: '#ff0000',
              align: 'end',
            },
          ],
        },
        {
          type: 'separator',
          margin: 'xxl',
        },
      ],
    });
  }

  leaveMessage = {
    type: 'flex',
    altText: '個人請假缺曠紀錄',
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
              text: '個人出席紀錄',
              weight: 'bold',
              size: 'xxl',
              margin: 'md',
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
              contents: leaveContent,
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
  resolve(leaveMessage);
});


module.exports.loginMessage = loginMessage;
module.exports.loginNotifyMessage = loginNotifyMessage;
module.exports.courseMessage = courseMessage;
module.exports.setCourseMessage = setCourseMessage;
module.exports.courseSelectMessage = courseSelectMessage;
module.exports.scoreMessage = scoreMessage;
module.exports.setScoreMessage = setScoreMessage;
module.exports.scoreSelectMessage = scoreSelectMessage;
module.exports.leaveMessage = leaveMessage;
module.exports.setLeaveMessage = setLeaveMessage;
module.exports.leaveSelectMessage = leaveSelectMessage;
