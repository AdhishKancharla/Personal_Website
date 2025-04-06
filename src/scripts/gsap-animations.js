import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Animate hero section
  gsap.from('.hero-title', {
    opacity: 0,
    y: -50,
    duration: 1
  });
  
  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.4
  });
  
  gsap.from('.hero-description', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.7
  });
  
  // Animate elements that scroll into view
  gsap.utils.toArray('.gsap-reveal').forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1
    });
  });
});