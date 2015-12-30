
function test(){
	var images=document.querySelectorAll("img");
	for(var i = 0;i<images.length;i++){
		images[i].src = "https://lh4.googleusercontent.com/-Nc6EyTTEpWM/AAAAAAAAAAI/AAAAAAAAAao/wgLeoBrFPuQ/s120-c/photo.jpg";
	}
}
setInterval(test,5000);