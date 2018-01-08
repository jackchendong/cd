1:	
	if(true){
		var a=10;
	}
	console.log(a);  //10

2：
	if(true){
		let a=10;
	}
	console.log(a);  //undefined

3:
	function cd(callback){
		var a =10;
		callback();     //这里要把a传过去
	}

	function aaaa(){
		console.log(a)
	}

	cd(aaaa);   //报错  a is not defined

4:
	(function(){
		var a =10;
		cd(function(){console.log(a)})   //输出10，本身就在匿名函数里面
	})()
	function cd(callback){
			callback();
	}



