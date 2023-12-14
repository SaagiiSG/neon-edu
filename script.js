function home(){
    location.href = '#home';
}
function facebook(){
	location.href = 'https://www.facebook.com/neon.edu.mn';
}
function instagram(){
	location.href = 'https://www.instagram.com/neon.edu.mn/';
}
var slider_img = document.querySelector('.slider-img');
var images = ['./score-photos/7.5-1.png', './score-photos/7.5-1.png', './score-photos/7.5-1.png', './score-photos/7.5-1.png', './score-photos/7.5-1.png'];
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

function sendMail() {
	var params = {
	  name: document.getElementById("name").value,
	  email: document.getElementById("email").value,
	  message: document.getElementById("textarea").value,
	};
  
	const serviceID = "service_4pqhkg8";
	const templateID = "template_2bm8u66";
  
	  emailjs.send(serviceID, templateID, params)
	  .then(res=>{
		  document.getElementById("name").value = "";
		  document.getElementById("email").value = "";
		  document.getElementById("textarea").value = "";
		  console.log(res);
		  alert("Your message sent successfully!!");
  
	  })
	  .catch(err=>console.log(err));
	  
  }