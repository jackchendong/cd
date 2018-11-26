module.exports = {
    /**
     * @api {get} /user/info {get} /user/info获取用户信息 adsda
     * @apiDescription 获取aaa
     * @apiDeprecated use now (#Group:Name).
     * @apiName userInfo
     * @apiGroup User
     * @apiSampleRequest http://test.github.com
     * @apiPermission none权限
     * @apiHeader {String} access-key Users unique access-key.
     * @apiParam {Number} phone 顶啊花好
     * @apiExample {curl} Example usage: 
     *              curl -i http://localhost/user/4711
     * @apiParam {Number} [age=18]     Optional Age with default 18.
     * @apiParam {String} [charge_type] 计费类型 
     * @apiSuccess {Number} code success always return 200
     * @apiSuccess {Object[]} data user info array
     * @apiParam (Login) {String} pass Only logged
     * @apiParam {String} country="DE" Mandatory with default value "DE".
     * @apiSuccess {String} msg 信息
     * @apiSuccessExample {json} Success-Response:
     * {
     *  "code":200,
     * "msg":"asdasd",
     * "data":{
     * }
     * }
     * @apiError {Number} code the error code
     * @apiError {string} msg 错误信息
     * @apiErrorExample {json} Error-Response:
     * {
       "code": -100,
        "msg":"asdasd"
     * }
     * @apiVersion 1.2.3
     */


}