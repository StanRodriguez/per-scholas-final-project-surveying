


// let slide = {
// 	folder: '',
// 	image: [],
// 	current: 0,
// 	slides: [1],
// 	setValues() {
// 		this.folder = './images/slideshow/';
// 		this.image = ['1.jpg','2.jpg','3.jpg','4.jpg'];
// 		this.current = 0;
// 		this.slides = document.getElementsByClassName('slides');
// 	},
// 	makeSlide(index) {
// 		// body...
// 		slide.setValues();
// 		console.log(this.current)
// 		this.current += index;
// 		//start from 0;
// 		if (this.current > slide.image.length-1) {
// 			this.current = 0;
// 		}
// 		//start from last
// 		if (this.current < 0) {
// 			this.current = this.image.length -1;
// 		}

// 		//make everything invicible
// 		for (var i = 0; i < this.slides.length; i++) {
// 			this.slides[i].style.display='none'
// 		}

// 		this.slides[this.current].style.display = 'block'
// 	},
// 	freeze() {
//  		clearInterval(interval)
// 	},
// 	start() {
//  		interval = setInterval(this.makeSlide, 3000,1)
// 	}
// }
// let interval=setInterval(this.makeSlide, 3000,1);


// ########Speech recognition #######
const speech = () =>{

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

	const recognition = new SpeechRecognition();

	//has to be true for live results
	recognition.interimResults = true;

	let p = document.getElementById('speech');
	let img = document.getElementById("pic");
	 
	// var p = document.createElement('p');
	//p.setAttribute('id', 'speech');
	// const words = document.querySelector('.words');
	// words.appendChild(p);

	recognition.addEventListener('result', e =>{
		let transcript = Array.from(e.results)
			.map(result => result[0])
			.map(result => result.transcript)
			.join('');

			//p.textContent = transcript;
			// if (e.results[0].isFinal) {
			// 	p = document.createElement('p');
			// 	const words = document.querySelector('.words');
			// 	words.appendChild(p);
			// }
			//console.log(transcript);
			img.src = "";
			if (transcript.includes('hello')) {
		 		p.textContent = 'Hi';
			}else if (transcript.includes('not working')) {
		 		p.textContent = 'I am working, you dumb!';
			}else if (transcript.includes('what time is it')) {
				let date = new Date();
		 		p.textContent = `It is ${date.toLocaleTimeString()}`;
			}else if (transcript.includes('what is your name') || transcript.includes("what\'s your name")) {
		 		p.textContent = 'I am Stanlybot and you?';
			}else if (transcript.includes('Nando')) {
		 		p.textContent = 'Nice to meet you, coder King of the North';
		 		
		 		  img.src = "../images/nando.png";
			}else if (transcript.includes('I am ') || transcript.includes('I\'m ')) {
		 		let name = transcript.split(' ');

		 		// if (transcript.includes('Nando')) {
		 		// 	p.textContent == `Nice to meet you, fake King of the North`
		 		// } else{
		 		p.textContent =`Nice to meet you, ${name[name.length-1]}`;
		 	

			}else if (transcript.includes('index')) {
		 		window.open(`../index.html`,'_self');
			}

	});
		 console.log(p.textContent);
		// if (p.textContent.search("Google") >-1 ) {
		// 		window.open("http://google.com");
		// 	}
	recognition.addEventListener('end',recognition.start);
	recognition.start();

}

// #########################


const slide = (index) =>{

	let slides = document.getElementsByClassName('slides')
	current += index;
	//start from 0;
	if (current > images.length-1) {
		current = 0;
	}
	//start from last
	if (current < 0) {
		current = images.length -1;
	}

	//make everything invicible
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display='none'
	}

	slides[current].style.display = 'block'
}
let interval;


//dont change the slideshow
const freeze = ()=>{
	clearInterval(interval)
}

//re start the slideshow
const start = () =>{
	interval = setInterval(slide, 3000,1);
}

//send mail
let emailto = {
	fname: '',
	lname: '',
	phone: '',
	subject: '',
	email: 'dssdominicana@gmail.com',
	message: '',
	mailto: '',
	setEmail: function(){
		
			this.subject = document.getElementById('contact-subject').value;
			this.message = document.getElementById('contact-message').value;
			this.fname = document.getElementById('contact-fname').value;
			this.lname = document.getElementById('contact-lname').value;
			this.phone = document.getElementById('contact-phone').value;
			this.subject = encodeURI(document.getElementById('contact-subject').value);
			// this.email = encodeURI(document.getElementById('contact-email').value);
			this.message = encodeURI(document.getElementById('contact-message').value+"\n\n\n"+this.fname+" "+this.lname+"\n"+this.phone);
			this.mailto = `mailto:${this.email}?subject=${this.subject}&body=${this.message}`;
	
	},
	sendEmail: function () {
		// body...
		this.setEmail();
		if (document.getElementById('contact-email').value == '') {
			document.getElementById('contact-email').style.border = '5px solid red';
			document.getElementById('contact-email').focus();
		}else if (document.getElementById('contact-subject').value == '') {
			document.getElementById('contact-subject').style.border = '5px solid red';
			document.getElementById('contact-subject').focus();
		}else if (document.getElementById('contact-message').value == '') {
			document.getElementById('contact-message').style.border = '5px solid red';
			document.getElementById('contact-message').focus();
		}else{
			window.open(this.mailto);
		}
	}
}
const isEmpty = (e) =>{
	if(e.value == '') {
		e.style.border = '5px solid red';
	}else{
		e.style = 'unset';
	}
}


const appearArrow = ()=>{

if (document.body.scrollTop < 350 || document.documentElement.scrollTop < 350) {
		document.getElementById('arrow').className = "arrow";

    }

	if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
		document.getElementById('arrow').className = "appear-arrow";
    }
}
//appear sections
const appear = ()=>{
	if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
		document.getElementById('service-two').className = "appear";
    }


    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
		document.getElementById('service-three').className = "appear";

    }
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
		document.getElementById('service-four').className = "appear";

    }
}



// $( "#news" ).load( "../pages/contact.html", function() {
//   alert( "Load was performed." );
// });



class News {

	constructor(){
		this.headers =['Nuevo Logo empresarial','Nuevo deslinde en la parte norte de la region del Cibao','Escaneo tridimencional disponible en toda la Republica Dominicana'];
		this.images =['../images/logo.png','../images/news/deslindes_mexicali_0.png'];
		this.descriptions = [
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nobis voluptates officia cumque nulla consequatur in quia, amet doloribus fugiat, molestiae, minima perferendis saepe? Aliquid itaque excepturi cumque neque odit!',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut magni nulla recusandae tenetur magnam officiis, distinctio adipisci fugiat rem facere, necessitatibus nemo voluptas sint aspernatur a asperiores, ducimus eaque laboriosam!',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut magni nulla recusandae tenetur magnam officiis, distinctio adipisci fugiat rem facere, necessitatibus nemo voluptas sint aspernatur a asperiores, ducimus eaque laboriosam!'
		]
		this.wholeDescriptions = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reiciendis dolores eligendi, enim, veritatis nam provident unde. Officia facere ipsam distinctio eveniet mollitia, repudiandae minima! Ad, fugit eveniet nemo delectus.",
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos libero ipsam, eveniet cupiditate. Voluptatem reiciendis ducimus consequuntur repellat dolorem corrupti dignissimos quis, distinctio culpa aspernatur fugit hic officiis quasi accusantium?",
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos libero ipsam, eveniet cupiditate. Voluptatem reiciendis ducimus consequuntur repellat dolorem corrupti dignissimos quis, distinctio culpa aspernatur fugit hic officiis quasi accusantium?"
		]
	}
	createNews(){
		for (let i = 0; i < this.headers.length; i++) {
			let h1 = document.createElement("h1");
			let h1Content = document.createTextNode(this.headers[i]);
			h1.appendChild(h1Content);

			let p = document.createElement("p");
			let pContent = document.createTextNode(this.descriptions[i]);
			p.appendChild(pContent);


			let button = document.createElement("button");
			let ButtonContent = document.createTextNode("Leer mas");
			button.appendChild(ButtonContent);

			let a = document.createElement("a");
			a.href = `new.html?new=${i}`;

			a.appendChild(button);
			// button.value="Read More";

			 // let hr = document.createElement("hr");

			document.getElementById('news').appendChild(h1);
			if (this.images[i]!=null) {
				let img = document.createElement("img");
				img.src = this.images[i];
				document.getElementById('news').appendChild(img);
			}
			document.getElementById('news').appendChild(p);
			document.getElementById('news').appendChild(a);
			 // document.getElementById('news').appendChild(hr);
		}

	}
	createNew(index){
		let h1 = document.createElement("h1");
			let h1Content = document.createTextNode(this.headers[index]);
			h1.appendChild(h1Content);

			let pHeading = document.createElement("p");
			let pHeadingContent = document.createTextNode(this.descriptions[index]);
			pHeading.appendChild(pHeadingContent);

			let p = document.createElement("p");
			let pContent = document.createTextNode(this.wholeDescriptions[index]);
			p.appendChild(pContent);


			// let button = document.createElement("button");
			// let ButtonContent = document.createTextNode("Read More");
			// button.appendChild(ButtonContent);

			// let a = document.createElement("a");
			// a.href = "new.html";

			// a.appendChild(button);
			// button.value="Read More";
			document.getElementById('new').appendChild(h1);
			document.getElementById('new').appendChild(pHeading);
			if (this.images[index]!=null) {
				let img = document.createElement("img");
				img.src = this.images[index];
				document.getElementById('new').appendChild(img);
			}

			document.getElementById('new').appendChild(p);
			// document.getElementById('new').appendChild(a);

	}
}

//control which code is going to run in each page
//only run on index.html
if (window.location.href.match('index.html') != null) {
	folder = './images/slideshow/';
	images =['1.jpg','2.jpg','3.jpg','4.jpg'];
	current = 0;
	interval=setInterval(slide, 3000,1);

}else if (window.location.href.match('works.html') != null) {
	folder = '../images/works_slideshow/';
	images =['certificado.jpg','deslinde.jpg','medicion_construccion.jpg','plano_catastro.jpg'];
	current = 0;

	interval=setInterval(slide, 3000,1);

}else if (window.location.href.match('services.html') != null) {
		window.onscroll = function () {
		appearArrow();
		appear();
	}
}else if (window.location.href.match('news.html') != null) {
	let news = new News(); 
	news.createNews();
	window.onscroll = function () {
		appearArrow();
	}
}else if (window.location.href.match('us.html') != null) {
	window.onscroll = function () {
		appearArrow();
	}
}else if (window.location.href.match('new.html') != null) {
	let index = window.location.href[window.location.href.length-1];
	let news = new News(); 
	news.createNew(index);
	window.onscroll = function () {
		appearArrow();
	}
}else if (window.location.href.match('intro.html') != null) {
	window.onload = speech;
}
