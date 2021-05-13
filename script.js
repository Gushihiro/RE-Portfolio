
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

  const observer2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('vedomy-animate');
      }
    });
  });
  
  observer2.observe(document.querySelector('#vedomyss'));

  const observer3 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('vedomy-animate');
      }
    });
  });
  observer2.observe(document.querySelector('#ouicirclesss'));


  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('Gushihiro', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}