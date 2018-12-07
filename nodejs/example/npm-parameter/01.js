var Parameter = require('parameter');

var parameter = new Parameter({
//   translate: function() {
//     var args = Array.prototype.slice.call(arguments);
//     // Assume there have I18n.t method for convert language.
//     return I18n.t.apply(I18n, args);
//   },
  validateRoot: true, // restrict the being validate value must be a object
});

var data = {
  name: 'asdsasad',
  age: 18,
  gender: 'male',
  bir: 'asjdas'  // 日期
};

var rule = {
  name: {
      type:'number',
      required: true,
      allowEmpty: false,
      widelyUndefined: true, // 可以为空
      convertType: (a,obj) => {  // 重载
          // if(a === ''){
          //   console.log(obj)
          // }
          // console.log(a)
		 // console.log(obj)
          return a  // 这里返回就没有问题
      }
  },
  age: {
      type: 'int',
      require: true,
      min: 12,
      max: 20
  },
  gender: ['male', 'female', 'unknown'],
  bir: {
    type: 'date'
  }
};

var errors = parameter.validate(rule, data);

console.log(data)