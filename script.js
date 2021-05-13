

// function scrollHandler() {
//     var element = document.querySelector('.parallax');
  
//     var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
//     var elementHeight = element.offsetHeight;
//       var scrollTop = document.documentElement.scrollTop;
      
//       var opacity = 1;
      
//       if (scrollTop > distanceToTop) {
//           opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
//       }
      
//       if (opacity >= 0) {
//           element.style.opacity = opacity;
//       }}
      
  
//   window.addEventListener('scroll', scrollHandler);

// var header = document.querySelector('.parallax');

// function fadeOutOnScroll(element) {
// 	if (!element) {
// 		return;
// 	}
	
// 	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
// 	var elementHeight = element.offsetHeight;
// 	var scrollTop = document.documentElement.scrollTop;
	
// 	var opacity = 1;
	
// 	if (scrollTop > distanceToTop) {
// 		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
// 	}
	
// 	if (opacity >= 0.45) {
// 		element.style.opacity = opacity;
// 	}
// }

// function scrollHandler() {
// 	fadeOutOnScroll(header);
// }

// window.addEventListener('scroll', scrollHandler);

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('h3-animate');
      }
    });
  });
  
  observer.observe(document.querySelector('h3'));

  // const observer2 = new IntersectionObserver(entries => {
  //   // Loop over the entries
  //   entries.forEach(entry => {
  //     // If the element is visible
  //     if (entry.isIntersecting) {
  //       // Add the animation class
  //       const bgImage = document.body.style.backgroundImage = "none";
  //     }
  //   });
  // });
  
  // observer2.observe(document.querySelector('#vedomytitle'));