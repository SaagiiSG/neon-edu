function home(){
    location.href = '#home';
}
var slider_img = document.querySelector('.slider-img');
var images = ['../photos/6.5.png', '../photos/7.5-1.png', '../photos/7.5.png', '../photos/7.png', '../photos/8.png'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}