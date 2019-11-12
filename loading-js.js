const radials = [...document.querySelectorAll('.radial')];
let degrees = 0;

for(i=0; i < radials.length; i++) {
	degrees += 0;
	radials[i].style.transform = `rotate(${degrees}deg)`;
	degrees += 45;
}


radials.forEach((radial, index) => {
	
	setTimeout(function() {
		
		radial.classList.add('glow');
		
	},index * 200);
	
});