const SMSClient = require('@alicloud/sms-sdk')
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAIjlhqNMgP6KuM'
const secretAccessKey = '1FI3Rf5ufBeOufQrq8yhjqnBWrP7re'
//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey})
//发送短信
smsClient.sendSMS({
    PhoneNumbers: '18071996467',
    SignName: '派金',
    TemplateCode: 'SMS_150615206',
    TemplateParam: '{"code":"12345"}'
}).then(function (res) {
    let {Code}=res
    if (Code === 'OK') {
        //处理返回参数
        console.log(res)    

//         { Message: 'OK',
//   RequestId: '58EC5977-B0B0-44D6-8F74-105D379CB534',
//   BizId: '355607042005765811^0',
//   Code: 'OK' }

    }
}, function (err) {
    console.log(err)
})