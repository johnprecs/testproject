'use strick'

let koa = require('koa');
let router = require('koa-route');
let library = require('./lib/lib.js');
	
let app = koa();
			
app.use(router.get('/',function *(){
	let input = [
  		'A',
  		[ 'B', 'C' ],
  		'D'
	]
		library.asyncOp(input); //it would display on the console but i'm not sure if im getting it right

var display = "";
for (var i = 0; i < input.length; i++) {
	if (i == 0 ){
    	display += "START : " + input[0] + "\r\n";
        display += "FINISH : "
    }
    else if(i == 1){
    	display += "START : " + input[1][0] + "\r\n";
        display += "START : " + input[1][1] + "\r\n";
        display += "FINISH : " + input[1][1] + "\r\n";
        display += "FINISH : " + input[1][0] + "\r\n";
     	continue;
    }
	else if (i == 2){
    	display += "START : " + input[2] + "\r\n";
        display += "FINISH : " ;
    }
    display += input[i] + "\r\n";
}
this.body = display;
}));


app.use(router.get('/stream',function *(){
	let source = new library.RandStream();
   		//source.pipe(process.stdout); <<--- this code also can be use for displaying the data
  		source.on('data', (data) => {
       		console.log(data);
   		})
   	this.body = "kindly check your terminal/cmd"
}));
				
app.use(router.get('/pooling',function *(){
	let ResourceManager = function(length) {
  		let text = "START" + "\r\n" + "";
  		let count = 1;
    		for(let i = 0; i < length; i++) {
       			text +=  "res : " + count + "\r\n" ;
        		count++
    		}
  		return text;
	}
		let input = "3"
		let timestamp = Date.now();
			this.body = ResourceManager(input) + "DURATION"  + " " +(Date.now() - timestamp); 
}));

app.listen(3000);
console.log("app listen at port:3000");