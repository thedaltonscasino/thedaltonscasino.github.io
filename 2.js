document.addEventListener('DOMContentLoaded', (event) => {

    const getElement = (context, selector) => {
      if (!context && !selector) {
        return null;
      }
  
      return context.querySelector(selector);
    };
  
    document.body.classList.add('loading');
  
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 500)
  
    // "modernizr" func"
    function isTouchDevice() {
      return 'ontouchstart' in window || navigator.maxTouchPoints;
    }
  
    // lazy-load
    const el = document.querySelectorAll('.lazy');
    window.observer = lozad(el);
    window.observer.observe();
  
   setTimeout(() => {
     MicroModal.show('modal-1', {
       onShow: () => {
         document.body.style.overflow = 'hidden';
       },
       onClose: () => {
         document.body.style.overflow = 'initial';
       }
     });
   }, 2000)
  
    function translateOnScroll(element) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            element.style.transform = `translateY(${scrollPosition * 0.1}px) translateX(${scrollPosition * 0.05}px)`; 
        });
    }
  
  
    const targetElement = document.querySelector('.bg-pic');
    translateOnScroll(targetElement);
  
    function backgroundOnScroll(element) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            element.style.backgroundSize = `${100 + scrollPosition * 0.1}% ${100 + scrollPosition * 0.1}%`; 
        });
    }
  
    const backgroundElement = document.querySelector('.top-board');
    backgroundOnScroll(backgroundElement);
  
  
  
  })