const TextArray = [
	"Everything always starts out so innocent.", 
	"See, I just wanted to mess around.",
	"Maybe build an infinite scrolling website.",
	"Rooted in the idea that maybe we really do scroll too much.",
	"Because, Mum, you were right, it really is that damn phone.",
	"So recently I've been asking myself some questions.", 
	"Questions like:",
	"What is the place for entertainment in our lives?",
	"Is this a sane default existence?",
	"How 'entertaining' are these 5-10 second videos really?",
	"Of course I only started thinking about all this when I read someone's blog.",
	"It was written as an essay about scrolling.",
	"Seemed harmless enough.",
	"But how interesting could it really be?",
	"It's just scrolling.",
	"You know?",
	"But that's the thing."
]


const before_loading = 
	document.getElementById("content-before-loading"); 
before_loading.style.display = "block"; 
let c = 0; 
function getInformation() { 
	setTimeout(() => { 
		for (let i = 0; i < TextArray.length; i++) { 
			const new_div = document.createElement("div"); 
			new_div.className = "sub-block"; 
			new_div.innerHTML = `Card ${c}${i}`; 
			new_div.innerHTML = TextArray[i];
			before_loading.appendChild(new_div); 
		} 
		c++; 
	}, 100); 
} 

window.addEventListener("scroll", () => { 
	if ( 
		document.documentElement.scrollTop + 
		document.documentElement.clientHeight >= 
		document.documentElement.scrollHeight 
	) { 
		getInformation(); 
	} 
}); 
getInformation();
