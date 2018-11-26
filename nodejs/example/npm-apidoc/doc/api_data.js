define({ "api": [
  {
    "type": "GET",
    "url": "/coin/all",
    "title": "all coins",
    "description": "<p>all coins</p>",
    "name": "all",
    "group": "Coin",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>success always return 200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>coin info array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.coin",
            "description": "<p>coin, HPS eth.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 200,\n  \"data\": {\n    coin: \"HPS\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>the error code</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>the error msg</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": -10005,\n  \"msg\": \"invalid password!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "filename": "./01.js",
    "groupTitle": "Coin"
  },
  {
    "type": "GET",
    "url": "/coin/history",
    "title": "history",
    "description": "<p>user coin history</p>",
    "name": "history",
    "group": "Coin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "userId",
            "description": "<p>user id</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "nickname",
            "description": "<p>user nickname</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "coin",
            "description": "<p>coin in upperCase</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "year",
            "description": "<p>year</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "month",
            "description": "<p>month</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "day",
            "description": "<p>day</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "start",
            "description": "<p>paginate start</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "end",
            "description": "<p>paginate end</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>success always return 200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>deposit info array</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.userId",
            "description": "<p>userId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.coin",
            "description": "<p>coin</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.amount",
            "description": "<p>deposit amount</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.balance",
            "description": "<p>balance before deposit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>DEPOSIT</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.time",
            "description": "<p>deposit received &amp; checked time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>remark</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 200,\n  \"data\": {\n    userId: 1,\n    coin: \"HPS\",\n    amount: 0.01,\n    type: 'DEPOSIT',\n    balance: 0,\n    time: 1512321321421,\n    remark: 'xxxxx'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>the error code</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>the error msg</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": -10005,\n  \"msg\": \"invalid password!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "filename": "./01.js",
    "groupTitle": "Coin"
  },
  {
    "type": "GET",
    "url": "/coin/request/withdraw",
    "title": "withdraw request",
    "description": "<p>user withdraw request</p>",
    "name": "request_withdraw",
    "group": "Coin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "userId",
            "description": "<p>user id</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "nickname",
            "description": "<p>user nickname</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "coin",
            "description": "<p>coin in upperCase</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "year",
            "description": "<p>year</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "month",
            "description": "<p>month</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "status",
            "description": "<p>withdraw Request status to show, 0-applying, 1-passed, -1-rejected, -9-canceled, -99-all</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "day",
            "description": "<p>day</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "start",
            "description": "<p>paginate start</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "end",
            "description": "<p>paginate end</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>success always return 200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>deposit info array</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.userId",
            "description": "<p>userId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.coin",
            "description": "<p>coin</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.amount",
            "description": "<p>deposit amount</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.fee",
            "description": "<p>fee</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.time",
            "description": "<p>deposit received &amp; checked time</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.status",
            "description": "<p>status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.remark",
            "description": "<p>remark</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.reason",
            "description": "<p>reason rejected</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.dealer",
            "description": "<p>admin dealer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 200,\n  \"data\": {\n    userId: 1,\n    coin: \"HPS\",\n    amount: 0.01,\n    fee: 0,\n    time: 1512321321421,\n    status: 0, // 1-passed, -1-rejected, -9-canceled\n    remark: 'xxxxx',\n    reason: 'yyyyyyy',\n    dealer: 'admin'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>the error code</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>the error msg</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": -10005,\n  \"msg\": \"invalid password!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "filename": "./01.js",
    "groupTitle": "Coin"
  },
  {
    "type": "POST",
    "url": "/coin/request/withdrawPass",
    "title": "pass request",
    "description": "<p>pass user withdraw request</p>",
    "name": "request_withdrawPass",
    "group": "Coin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "requestId",
            "description": "<p>withdraw request id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>success always return 200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>pass result</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.success",
            "description": "<p>true if pass operation is success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 200,\n  \"data\": {\n    success: true\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>the error code</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>the error msg</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": -10005,\n  \"msg\": \"invalid password!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "filename": "./01.js",
    "groupTitle": "Coin"
  },
  {
    "type": "POST",
    "url": "/coin/request/withdrawReject",
    "title": "reject request",
    "description": "<p>reject user withdraw request</p>",
    "name": "request_withdrawReject",
    "group": "Coin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "requestId",
            "description": "<p>withdraw request id</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "reason",
            "description": "<p>withdraw request reject reason</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>success always return 200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>pass result</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.success",
            "description": "<p>true if pass operation is success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 200,\n  \"data\": {\n    success: true\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>the error code</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>the error msg</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": -10005,\n  \"msg\": \"invalid password!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "filename": "./01.js",
    "groupTitle": "Coin"
  },
  {
    "type": "GET",
    "url": "/coin/userCoin",
    "title": "user coins",
    "description": "<p>user coins</p>",
    "name": "userCoin",
    "group": "Coin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "userId",
            "description": "<p>user id</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "nickname",
            "description": "<p>user nickname</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "coin",
            "description": "<p>coin in upperCase</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "start",
            "description": "<p>paginate start</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "end",
            "description": "<p>paginate end</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>success always return 200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>coin info array</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.userId",
            "description": "<p>userId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.coin",
            "description": "<p>coin</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.balance",
            "description": "<p>balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.freeze",
            "description": "<p>freeze coin</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.depositAddress",
            "description": "<p>coin deposit address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.withdrawAddress",
            "description": "<p>user' coin withdraw address</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.lastFaucetTime",
            "description": "<p>if coin is HPS</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"code\": 200,\n  \"data\": {\n    userId: 1,\n    coin: \"HPS\",\n    balance: 0,\n    freeze: 0,\n    depositAddress: '',\n    withdrawAddress: '',\n    lastFaucetTime: 151212321312\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>the error code</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>the error msg</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"code\": -10005,\n  \"msg\": \"invalid password!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.1.0",
    "filename": "./01.js",
    "groupTitle": "Coin"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "D__project_note_cd_nodejs_example_npm_apidoc_doc_main_js",
    "groupTitle": "D__project_note_cd_nodejs_example_npm_apidoc_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/user/info",
    "title": "{get} /user/info获取用户信息 adsda",
    "description": "<p>获取aaa</p>",
    "deprecated": {
      "content": "use now (#Group:Name)."
    },
    "name": "userInfo",
    "group": "User",
    "sampleRequest": [
      {
        "url": "http://test.github.com"
      }
    ],
    "permission": [
      {
        "name": "none权限"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>顶啊花好</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "age",
            "defaultValue": "18",
            "description": "<p>Optional Age with default 18.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "charge_type",
            "description": "<p>计费类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "defaultValue": "DE",
            "description": "<p>Mandatory with default value &quot;DE&quot;.</p>"
          }
        ],
        "Login": [
          {
            "group": "Login",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>Only logged</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage: ",
        "content": "curl -i http://localhost/user/4711",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>success always return 200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>user info array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"code\":200,\n\"msg\":\"asdasd\",\n\"data\":{\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>the error code</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n       \"code\": -100,\n        \"msg\":\"asdasd\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.2.3",
    "filename": "./02.js",
    "groupTitle": "User"
  }
] });
