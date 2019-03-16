const arr = [10,12,15];

for (let i = 0; i < arr.length; i++){
	setTimeout(function(){
		console.log('Index' + i + ',element: ' + arr[i]);
	}, 3000);
}
