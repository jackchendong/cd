/**
* @fileOverview 简单的方法标注示例
* @author <a href=”llying.javaeye.com”>llying</a>
* @version 0.1
*/

/**
* @description 加法运算
* @param {Num} num1 加数
* @param {Num} num2 被加数
* @return {Num} result 结果
*/
function add(num1,num2){
    return num1 + num2;
}

/**
* @description 减法运算
* @param {Num} num1 减数
* @param {Num} num2 被减数
* @return {Num} result 结果
*/
function minus(num1,num2){
    return num1 - num2;
}

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
  function asdasd(num1,num2){
    return num1 - num2;
    }