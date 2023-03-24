
let live = new Date();
let time=live.getMonth();
if(0<=time&&time<4)
{
	console.log("fall");
}
else if(4<=time&&time<8)
{
	console.log("summer");
}
else{
	console.log("winter");
}