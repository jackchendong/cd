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
  name: 1212,
  age: 18,
  gender: 'male'
};

var rule = {
  name: {
      type:'string',
      required: true,
      allowEmpty: false,
      convertType: (a,obj) => {  // 重载
          //console.log(a)
		 // console.log(obj)
          return  "789" // 这里返回就没有问题
      }
  },
  age: {
      type: 'int',
      require: true,
      min: 12,
      max: 20
  },
  gender: ['male', 'female', 'unknown']
};

var errors = parameter.validate(rule, data);

console.log(data)