module.exports = {
  /**
   * @api {GET} /coin/all all coins
   * @apiDescription all coins
   * @apiName all
   * @apiGroup Coin
   * @apiSuccess {Number} code success always return 200
   * @apiSuccess {Object[]} data coin info array
   * @apiSuccess {String} data.coin coin, HPS eth.
   * @apiSuccessExample {json} Success-Response:
   *  {
   *    "code": 200,
   *    "data": {
   *      coin: "HPS"
   *    }
   *  }
   * @apiError {Number} code the error code
   * @apiError {String} msg the error msg
   * @apiErrorExample {json} Error-Response:
   *  {
   *    "code": -10005,
   *    "msg": "invalid password!"
   *  }
   * @apiVersion 0.1.0
   */
  'GET /coin/all': CoinController.allCoin,

  /**
   * @api {GET} /coin/userCoin user coins
   * @apiDescription user coins
   * @apiName userCoin
   * @apiGroup Coin
   * @apiParam userId user id
   * @apiParam email user email
   * @apiParam nickname user nickname
   * @apiParam coin coin in upperCase
   * @apiParam start paginate start
   * @apiParam end paginate end
   * @apiSuccess {Number} code success always return 200
   * @apiSuccess {Object[]} data coin info array
   * @apiSuccess {Number} data.userId userId
   * @apiSuccess {String} data.coin coin
   * @apiSuccess {Number} data.balance balance
   * @apiSuccess {Number} data.freeze freeze coin
   * @apiSuccess {String} data.depositAddress coin deposit address
   * @apiSuccess {String} data.withdrawAddress user' coin withdraw address
   * @apiSuccess {Number} data.lastFaucetTime if coin is HPS
   * @apiSuccessExample {json} Success-Response:
   *  {
   *    "code": 200,
   *    "data": {
   *      userId: 1,
   *      coin: "HPS",
   *      balance: 0,
   *      freeze: 0,
   *      depositAddress: '',
   *      withdrawAddress: '',
   *      lastFaucetTime: 151212321312
   *    }
   *  }
   * @apiError {Number} code the error code
   * @apiError {String} msg the error msg
   * @apiErrorExample {json} Error-Response:
   *  {
   *    "code": -10005,
   *    "msg": "invalid password!"
   *  }
   * @apiVersion 0.1.0
   */
  'GET /coin/userCoin': CoinController.userCoin,

  /**
   * @api {GET} /coin/history  history
   * @apiDescription user coin history
   * @apiName history
   * @apiGroup Coin
   * @apiParam userId user id
   * @apiParam email user email
   * @apiParam nickname user nickname
   * @apiParam coin coin in upperCase
   * @apiParam year year
   * @apiParam month month
   * @apiParam day day
   * @apiParam start paginate start
   * @apiParam end paginate end
   * @apiSuccess {Number} code success always return 200
   * @apiSuccess {Object[]} data deposit info array
   * @apiSuccess {Number} data.userId userId
   * @apiSuccess {String} data.coin coin
   * @apiSuccess {Number} data.amount deposit amount
   * @apiSuccess {Number} data.balance balance before deposit
   * @apiSuccess {String} data.type DEPOSIT
   * @apiSuccess {Number} data.time deposit received & checked time
   * @apiSuccess {String} data.remark remark
   * @apiSuccessExample {json} Success-Response:
   *  {
   *    "code": 200,
   *    "data": {
   *      userId: 1,
   *      coin: "HPS",
   *      amount: 0.01,
   *      type: 'DEPOSIT',
   *      balance: 0,
   *      time: 1512321321421,
   *      remark: 'xxxxx'
   *    }
   *  }
   * @apiError {Number} code the error code
   * @apiError {String} msg the error msg
   * @apiErrorExample {json} Error-Response:
   *  {
   *    "code": -10005,
   *    "msg": "invalid password!"
   *  }
   * @apiVersion 0.1.0
   */
  'GET /coin/history': CoinController.userCoinHistory,
  
  /**
   * @api {GET} /coin/request/withdraw withdraw request
   * @apiDescription user withdraw request
   * @apiName request/withdraw
   * @apiGroup Coin
   * @apiParam userId user id
   * @apiParam email user email
   * @apiParam nickname user nickname
   * @apiParam coin coin in upperCase
   * @apiParam year year
   * @apiParam month month
   * @apiParam status withdraw Request status to show, 0-applying, 1-passed, -1-rejected, -9-canceled, -99-all
   * @apiParam day day
   * @apiParam start paginate start
   * @apiParam end paginate end
   * @apiSuccess {Number} code success always return 200
   * @apiSuccess {Object[]} data deposit info array
   * @apiSuccess {Number} data.userId userId
   * @apiSuccess {String} data.coin coin
   * @apiSuccess {Number} data.amount deposit amount
   * @apiSuccess {Number} data.fee fee
   * @apiSuccess {Number} data.time deposit received & checked time
   * @apiSuccess {Number} data.status status
   * @apiSuccess {String} data.remark remark
   * @apiSuccess {String} data.reason reason rejected
   * @apiSuccess {String} data.dealer admin dealer
   * @apiSuccessExample {json} Success-Response:
   *  {
   *    "code": 200,
   *    "data": {
   *      userId: 1,
   *      coin: "HPS",
   *      amount: 0.01,
   *      fee: 0,
   *      time: 1512321321421,
   *      status: 0, // 1-passed, -1-rejected, -9-canceled
   *      remark: 'xxxxx',
   *      reason: 'yyyyyyy',
   *      dealer: 'admin'
   *    }
   *  }
   * @apiError {Number} code the error code
   * @apiError {String} msg the error msg
   * @apiErrorExample {json} Error-Response:
   *  {
   *    "code": -10005,
   *    "msg": "invalid password!"
   *  }
   * @apiVersion 0.1.0
   */
  'GET /coin/request/withdraw': CoinController.withdrawRequests,

  /**
   * @api {POST} /coin/request/withdrawPass pass request
   * @apiDescription pass user withdraw request
   * @apiName request/withdrawPass
   * @apiGroup Coin
   * @apiParam requestId withdraw request id
   * @apiSuccess {Number} code success always return 200
   * @apiSuccess {Object} data pass result
   * @apiSuccess {Boolean} data.success true if pass operation is success
   * @apiSuccessExample {json} Success-Response:
   *  {
   *    "code": 200,
   *    "data": {
   *      success: true
   *    }
   *  }
   * @apiError {Number} code the error code
   * @apiError {String} msg the error msg
   * @apiErrorExample {json} Error-Response:
   *  {
   *    "code": -10005,
   *    "msg": "invalid password!"
   *  }
   * @apiVersion 0.1.0
   */
  'POST /coin/request/withdrawPass': CoinController.passWithdrawRequest,

  /**
   * @api {POST} /coin/request/withdrawReject reject request
   * @apiDescription reject user withdraw request
   * @apiName request/withdrawReject
   * @apiGroup Coin
   * @apiParam requestId withdraw request id
   * @apiParam reason withdraw request reject reason
   * @apiSuccess {Number} code success always return 200
   * @apiSuccess {Object} data pass result
   * @apiSuccess {Boolean} data.success true if pass operation is success
   * @apiSuccessExample {json} Success-Response:
   *  {
   *    "code": 200,
   *    "data": {
   *      success: true
   *    }
   *  }
   * @apiError {Number} code the error code
   * @apiError {String} msg the error msg
   * @apiErrorExample {json} Error-Response:
   *  {
   *    "code": -10005,
   *    "msg": "invalid password!"
   *  }
   * @apiVersion 0.1.0
   */
  'POST /coin/request/withdrawReject': CoinController.rejectWithdrawRequest,
}