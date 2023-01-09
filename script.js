//first udemy example
var int
let landing;
window.addEventListener("load", (event) => {
	let heading = document.querySelectorAll('.heading');
	let subtext = heading.nextElementSibling;
	
	heading.forEach(el => el.addEventListener('click', event => {
		event.target.nextElementSibling.classList.toggle("hidden");
	}));
	
	let idCheck = document.getElementById("id-check")
	landing = document.getElementById("landing")
	//hiding homepage until user fills out form
	if (idCheck){
		let root = document.getElementById("root-container");
		root.style.display = "none";
		let enter = document.getElementById("enter")
		let progress = document.getElementById("progress");
		let circles = document.querySelectorAll(".circle") 
		let increase = 100/(circles.length -1)
		console.log(circles.length)
		
		let next = document.getElementById("next");
		next.addEventListener('click', event => {
			let progressData = Number(progress.dataset.index);
			progressData++;
			if (progressData < circles.length){
				let newWidth = (progressData * increase).toString();
				console.log(newWidth)
				progress.dataset.index = progressData ;
				progress.style.width =  newWidth+"%";
				console.log(progress.dataset.index)
				showQuestion(progressData);
			}
			if (progressData == circles.length -1 ){
				enter.classList.remove("hidden");
			}
		});
		let prev = document.getElementById("prev");
		prev.addEventListener('click', event => {
			let progressData = Number(progress.dataset.index);
			progressData --
			if (progressData >= 0){
				let newWidth = ((progressData) * increase).toString();
				console.log(newWidth)
				progress.dataset.index = progressData;
				progress.style.width =  newWidth+"%";
				console.log(progress.dataset.index)
				showQuestion(progressData);
			}
		});
		enter.addEventListener("click", event =>{
			idCheck.style.display = "none";
			root.style.display = "flex";
			int = setInterval(blurring, 50)
		})
	}
	
	function showQuestion(currQ){
		console.log(currQ)
		let questions = document.querySelectorAll(".question")
		questions.forEach(el => {
			if(el.dataset.question == (currQ) ){
				el.classList.remove("hidden")
			}else{
				el.classList.add("hidden")
			}
		})
	}

});


//blur 
let load = 100;
function blurring(){
	load--
	landing.style.filter = `blur(${load})`
	//console.log(load)
	if (load == 0){
		console.log("end")
		clearInterval(int)
	}
}



window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
	const boxes = document.querySelectorAll('.box')
    const triggerBottom = window.innerHeight / 5 * 4
	console.log(window.innerHeight)
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

