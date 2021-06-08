//
// Helpers
//

// Gets element by id attribute
function find_id(id) {
	return document.getElementById(id);
}

// Gets element(s) by class attribute
function find_class(class_name) {
	return Array.from(document.getElementsByClassName(class_name));
}

// Attaches listener to click event
function on_click(element, callback, context) {
	element.addEventListener('click', callback(element, context));
}

//
// Main application class
//
class App 
{

	constructor() {
		//
	}

	// Scrolls to top of document	
	scroll_to_top() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	// Makes #post-meta appear when #post-title leaves the viewport
	post_meta_toggle() {
		let options = {
			root: null, // root document
			rootMargin: '0px',
			threshold: 0 // 0% of element must be visible to trigger
		};

		let observer = new IntersectionObserver(function(changes, observer) {
			changes.forEach(function(change) {
				if(change.isIntersecting) {
					find_id('post-meta').classList.add('invisible');
				} else {
					find_id('post-meta').classList.remove('invisible');					
				}
			});
		}, options);

		observer.observe(find_id('post-title'));
	}

}

const app = new App();

//
// Bind stuff
//

// Scroll to top
find_class('scroll-to-top').forEach(function(el) {
	el.addEventListener('click', function() { app.scroll_to_top(); });
});

if(find_id('post-meta')) { app.post_meta_toggle(); }
