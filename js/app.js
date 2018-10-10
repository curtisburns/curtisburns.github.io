window.onload = () => {

  const about = document.querySelector('#about');
  const projects = document.querySelector('#projects');
  const skills = document.querySelector('#skills');
  const aboutNav = document.querySelector('.about-nav');
  const projectsNav = document.querySelector('.projects-nav');
  const skillsNav = document.querySelector('.skills-nav');
  const projectsNumber = document.querySelectorAll('.project-links').length;

  const projectCount = document.createElement('span');
  projectCount.setAttribute('class', 'project-count');
  projectCount.textContent = projectsNumber;
  projectsNav.parentNode.appendChild(projectCount);


  const isInView = function(sectionId, nextSectionId) {
    if (nextSectionId) {
      if (sectionId.getBoundingClientRect().top < window.innerHeight && nextSectionId.getBoundingClientRect().top > window.innerHeight ) {
        return true;
      }
    } else if (sectionId.getBoundingClientRect().top < window.innerHeight) {
      return true;
    } else
      return false;
  };




  window.onscroll = () =>  {

    switch(true) {
      case(isInView(about, projects)):
        // console.log('ABOUT is active');
        aboutNav.classList.add('active');
        projectsNav.classList.remove('active');
        skillsNav.classList.remove('active');
        break;
      case(isInView(projects, skills)):
        // console.log('PROJECTS is active');
        aboutNav.classList.remove('active');
        projectsNav.classList.add('active');
        skillsNav.classList.remove('active');
        break;
      case(isInView(skills)):
        // console.log('SKILLS is active');
        aboutNav.classList.remove('active');
        projectsNav.classList.remove('active');
        skillsNav.classList.add('active');
        break;
      default:
      // console.log('Nothing is active');
        aboutNav.classList.remove('active');
        projectsNav.classList.remove('active');
        skillsNav.classList.remove('active');
    }
  };
};
