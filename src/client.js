import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// console.log(window.innerHeight);
// console.log(document.body.scrollHeight);
// console.log(window.innerWidth);
// console.log(window.visualViewport);
// console.log(window.devicePixelRatio);

// console.log(vh * 100);