console.log("customer 1 is calling");
// console.log("server is waiting 5 min to fetch");
// console.log("after fetching delivered result");
setTimeout(callback2,5000); //while its waiting 5 min to call callback2 before that it pprocess other activities like other 2,3 logs
//though its first but sequentially not executed while waiting below activities executed

console.log("customer 2 is calling");
// console.log("server is waiting 5 min to fetch");
// console.log("after fetching delivered result");
setTimeout(callback3,3000);

console.log("customer 3 is calling");
// console.log("server is waiting 5 min to fetch");
// console.log("after fetching delivered result");
setTimeout(callback4,4000);

function callback2(){
	console.log("after waiting for 5 min delivered")
}

function callback3(){
	console.log("after waiting for 3 min delivered")
}

function callback4(){
	console.log("after waiting for 4 min delivered")
}


