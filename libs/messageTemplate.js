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
  { type: 'text', text: '請輸入您的學號與密碼\n格式如下:' },
  { type: 'text', text: 'C107123456\n123456' },
];

const logoutMessage = {
  type: 'template',
  altText: '登出成功',
  template: {
    type: 'buttons',
    title: '登出成功',
    text: '您已登出系統成功',
    actions: [{
      type: 'postback',
      label: '重新登入',
      data: 'login',
    },
    ],
  },
};

const functionSelectMessage = {
  type: 'template',
  altText: '其他功能選擇',
  template: {
    type: 'buttons',
    title: '其他功能選擇',
    text: ' 請選擇功能',
    actions: [{
      type: 'postback',
      label: '登出',
      data: 'logout',
    },
    {
      type: 'postback',
      label: '校園分機查詢',
      data: 'phoneNumber',
    },
    {
      type: 'uri',
      label: '分享給朋友',
      uri: 'line://nv/recommendOA/@642fwkuy',
    },
    ],
  },
};

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
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '106-下',
          text: '106-下',
          data: 'course&106&2',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '106-上',
          text: '106-上',
          data: 'course&106&1',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '105-下',
          text: '105-下',
          data: 'course&105&2',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '105-上',
          text: '105-上',
          data: 'course&105&1',
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
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '106-下',
          text: '106-下',
          data: 'score&106&2',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '106-上',
          text: '106-上',
          data: 'score&106&1',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '105-下',
          text: '105-下',
          data: 'score&105&2',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '105-上',
          text: '105-上',
          data: 'score&105&1',
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
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '106-下',
          text: '106-下',
          data: 'leave&106&2',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '106-上',
          text: '106-上',
          data: 'leave&106&1',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '105-下',
          text: '105-下',
          data: 'leave&105&2',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '105-上',
          text: '105-上',
          data: 'leave&105&1',
        },
      },
    ],
  },
};

const midWarningSelectMessage = {
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
          data: 'midWarning&108&1',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '107-下',
          text: '107-下',
          data: 'midWarning&107&2',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '107-上',
          text: '107-上',
          data: 'midWarning&107&1',
        },
      },
    ],
  },
};

const schoolInfoSelectMessage = {
  type: 'template',
  altText: '請選擇您要查詢的資訊',
  template: {
    type: 'buttons',
    title: '校園資訊查詢',
    text: '請選擇您要查詢的校園資訊',
    actions: [{
      type: 'postback',
      label: '最新消息',
      data: 'news',
    },
    {
      type: 'postback',
      label: '活動消息',
      data: 'activity',
    },
    {
      type: 'postback',
      label: '行政公告',
      data: 'administrative',
    },
    {
      type: 'postback',
      label: '徵才公告',
      data: 'recruit',
    },
    ],
  },
};

const phoneNumberSelectMessage = {
  type: 'text',
  text: '請選擇您要查詢的校區',
  quickReply: {
    items: [
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '建工',
          text: '建工',
          data: 'jiangong',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '燕巢',
          text: '燕巢',
          data: 'yanchao',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '第一',
          text: '第一',
          data: 'first',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '楠梓',
          text: '楠梓',
          data: 'nanzi',
        },
      },
      {
        type: 'action',
        action: {
          type: 'postback',
          label: '旗津',
          text: '旗津',
          data: 'cijin',
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

let midWarningMessage = '';
const setMidWarningMessage = midWarningData => new Promise((resolve, reject) => {
  const midWarningContent = [{
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
      text: '老師',
      size: 'sm',
      color: '#111111',
      align: 'center',
    },
    {
      type: 'text',
      text: '預警',
      size: 'sm',
      color: '#111111',
      align: 'center',
    },
    ],
  },
  ];

  for (let i = 0; i < midWarningData.length; i += 8) {
    const index = i;
    midWarningContent.push({
      type: 'box',
      layout: 'horizontal',
      contents: [{
        type: 'box',
        layout: 'horizontal',
        contents: [{
          type: 'text',
          // 科目欄位
          text: midWarningData[index + 2],
          size: 'sm',
          color: '#555555',
          flex: 0,
        }],
      },
      {
        type: 'text',
        // 老師欄位
        text: midWarningData[index + 4],
        size: 'sm',
        color: '#111111',
        align: 'center',
      },
      {
        type: 'text',
        // 預警結果
        text: midWarningData[index + 5],
        size: 'sm',
        color: '#111111',
        align: 'center',
      },
      ],
    });
  }

  midWarningMessage = {
    type: 'flex',
    altText: '期中預警',
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
              text: '期中預警',
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
              contents: midWarningContent,
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
  resolve(midWarningMessage);
});

let schoolInfoMessage = '';
const setSchoolInfoMessage = (itemName, itemLink, schoolInfoData) => new Promise((resolve,
  reject) => {
  const schoolInfoContent = [];

  for (let i = 0; i < schoolInfoData.length; i += 3) {
    const index = i;
    schoolInfoContent.push({
      type: 'box',
      layout: 'horizontal',
      spacing: 'sm',
      contents: [
        {
          type: 'box',
          layout: 'vertical',
          flex: 5,
          contents: [
            {
              type: 'text',
              size: 'md',
              text: schoolInfoData[index + 1],
              align: 'start',
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'text',
                  text: schoolInfoData[index],
                  align: 'start',
                },
              ],
            },
          ],
        },
        {
          type: 'separator',
        },
        {
          type: 'button',
          flex: 2,
          height: 'sm',
          gravity: 'center',
          style: 'secondary',
          action: {
            type: 'uri',
            label: '查看',
            uri: schoolInfoData[index + 2],
          },
        },
      ],
    },
    {
      type: 'separator',
    });
  }

  schoolInfoMessage = {
    type: 'flex',
    altText: `校園資訊 ${itemName}`,
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
              text: itemName,
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
              contents: schoolInfoContent,
            },
            {
              type: 'separator',
              margin: 'xxl',
            },
            {
              type: 'button',
              height: 'sm',
              action: {
                type: 'uri',
                label: 'More Info',
                uri: itemLink,
              },
            },
          ],
        },
      }],
    },
  };
  resolve(schoolInfoMessage);
});

const jiangongPhoneNumber = {
  type: 'flex',
  altText: '建工校區',
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
            text: '建工校區',
            weight: 'bold',
            size: 'xxl',
            margin: 'xl',
            color: '#457E9B',
          },
          {
            type: 'text',
            text: '校安中心',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '0800550995,1',
              uri: 'tel:0800550995,1',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'text',
            text: '校安專線',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '0916507506',
              uri: 'tel:0916507506',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'text',
            text: '事務組',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '073814526,2650',
              uri: 'tel:073814526,2650',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'text',
            text: '營繕組',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '073814526,2630',
              uri: 'tel:073814526,2630',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'text',
            text: '課外活動組',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '073814526,2525',
              uri: 'tel:073814526,2525',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'text',
            text: '圖書館',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '073814526,3100',
              uri: 'tel:073814526,3100',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: 'More Info',
              uri: 'http://tel.nkust.edu.tw/',
            },
          },
        ],
      },
    }],
  },
};

const yanchaoPhoneNumber = {
  type: 'flex',
  altText: '燕巢校區',
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
            text: '燕巢校區',
            weight: 'bold',
            size: 'xxl',
            margin: 'xl',
            color: '#457E9B',
          },
          {
            type: 'text',
            text: '校安中心',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '0800550995,4',
              uri: 'tel:0800550995,4',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'text',
            text: '校安專線',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '0925350995',
              uri: 'tel:0925350995',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: 'More Info',
              uri: 'http://tel.nkust.edu.tw/',
            },
          },
        ],
      },
    }],
  },
};

const firstPhoneNumber = {
  type: 'flex',
  altText: '第一校區',
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
            text: '第一校區',
            weight: 'bold',
            size: 'xxl',
            margin: 'xl',
            color: '#457E9B',
          },
          {
            type: 'text',
            text: '校安中心',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '0800550995,3',
              uri: 'tel:0800550995,3',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'text',
            text: '生輔組',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '076011000,31212',
              uri: 'tel:076011000,31212',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'text',
            text: '課外活動組',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '076011000,31211',
              uri: 'tel:076011000,31211',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'text',
            text: '圖書館',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '076011000,1599',
              uri: 'tel:076011000,1599',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: 'More Info',
              uri: 'http://tel.nkust.edu.tw/',
            },
          },
        ],
      },
    }],
  },
};

const nanziPhoneNumber = {
  type: 'flex',
  altText: '楠梓校區',
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
            text: '楠梓校區',
            weight: 'bold',
            size: 'xxl',
            margin: 'xl',
            color: '#457E9B',
          },
          {
            type: 'text',
            text: '校安中心',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '0800550995,2',
              uri: 'tel:0800550995,2',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'text',
            text: '課外活動組',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '073617141,22070',
              uri: 'tel:073617141,22070',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: 'More Info',
              uri: 'http://tel.nkust.edu.tw/',
            },
          },
        ],
      },
    }],
  },
};

const cijinPhoneNumber = {
  type: 'flex',
  altText: '旗津校區',
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
            text: '旗津校區',
            weight: 'bold',
            size: 'xxl',
            margin: 'xl',
            color: '#457E9B',
          },
          {
            type: 'text',
            text: '校安中心',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '0800550995,5',
              uri: 'tel:0800550995,5',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'text',
            text: '生輔組',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '073617141,23967',
              uri: 'tel:073617141,23967',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'text',
            text: '課外活動組',
            weight: 'bold',
            color: '#457E9B',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: '073617141,25065',
              uri: 'tel:073617141,25065',
            },
          },
          {
            type: 'separator',
          },
          {
            type: 'button',
            height: 'sm',
            action: {
              type: 'uri',
              label: 'More Info',
              uri: 'http://tel.nkust.edu.tw/',
            },
          },
        ],
      },
    }],
  },
};

module.exports.loginMessage = loginMessage;
module.exports.loginNotifyMessage = loginNotifyMessage;
module.exports.logoutMessage = logoutMessage;
module.exports.functionSelectMessage = functionSelectMessage;
module.exports.courseMessage = courseMessage;
module.exports.setCourseMessage = setCourseMessage;
module.exports.courseSelectMessage = courseSelectMessage;
module.exports.scoreMessage = scoreMessage;
module.exports.setScoreMessage = setScoreMessage;
module.exports.scoreSelectMessage = scoreSelectMessage;
module.exports.leaveMessage = leaveMessage;
module.exports.setLeaveMessage = setLeaveMessage;
module.exports.leaveSelectMessage = leaveSelectMessage;
module.exports.midWarningMessage = midWarningMessage;
module.exports.setMidWarningMessage = setMidWarningMessage;
module.exports.midWarningSelectMessage = midWarningSelectMessage;
module.exports.schoolInfoMessage = schoolInfoMessage;
module.exports.setSchoolInfoMessage = setSchoolInfoMessage;
module.exports.schoolInfoSelectMessage = schoolInfoSelectMessage;
module.exports.phoneNumberSelectMessage = phoneNumberSelectMessage;
module.exports.jiangongPhoneNumber = jiangongPhoneNumber;
module.exports.yanchaoPhoneNumber = yanchaoPhoneNumber;
module.exports.firstPhoneNumber = firstPhoneNumber;
module.exports.nanziPhoneNumber = nanziPhoneNumber;
module.exports.cijinPhoneNumber = cijinPhoneNumber;
