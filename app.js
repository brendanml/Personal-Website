const jumpToClass = (className)=> {
  const target = document.querySelector(`.${className}`)
  console.dir(target)
  const dropDownMenu = document.querySelector('.drop-down-menu')
  const dropDownDisplay = window.getComputedStyle(dropDownMenu).getPropertyValue('display');

  //turn off the drop down menu
  //changed this from a toggle as if any link is clicked the drop down menu should be off (mobile of desktop)
  dropDownMenu.style.display = 'none';
  
  if(target) {
    const targetPos = target.getBoundingClientRect().top + window.scrollY - 60
    window.scrollTo({top:targetPos, behavior:'smooth'})
  }
}

const addNavLinks = ()=> {
  const projects = document.querySelectorAll('.projects-btn')
  const projectsArr = Array.from(projects)
  projectsArr.map(btn=> btn.addEventListener('click', ()=> {
    jumpToClass('projects')
  }))

  const story = document.querySelectorAll('.story-btn')
  const storyArr = Array.from(story)
  storyArr.map(btn=> btn.addEventListener('click', ()=> {
    jumpToClass('story')
  }))

  const hobbies = document.querySelectorAll('.hobbies-btn')
  const hobbiesArr = Array.from(hobbies)
  hobbiesArr.map(btn => btn.addEventListener('click', ()=> {
    jumpToClass('hobbies')
  }))

  const certifications = document.querySelectorAll('.certifications-btn')
  const certificationsArr = Array.from(certifications)
  certificationsArr.map(btn => btn.addEventListener('click', ()=> {
    jumpToClass('certifications')
  }))

  const contact = document.querySelectorAll('.contact-btn')
  const contactArr = Array.from(contact)
  contactArr.map(btn => btn.addEventListener('click', ()=> {
    jumpToClass('contact')
  }))

  const webApps = document.querySelector('.web-apps');
  webApps.addEventListener('click', ()=> {
    jumpToClass('campies')
  })

}

const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', ()=> {
  console.log(`hello`)
  
  const dropDownMenu = document.querySelector('.drop-down-menu')
  const dropDownDisplay = window.getComputedStyle(dropDownMenu).getPropertyValue('display');
  // Toggle the display style
  dropDownMenu.style.display = (dropDownDisplay === 'none') ? 'grid' : 'none';
})

const dropDownExit = document.querySelector('.drop-down-exit')

dropDownExit.addEventListener('click', ()=> {
  const dropDownMenu = document.querySelector('.drop-down-menu')
  const dropDownDisplay = window.getComputedStyle(dropDownMenu).getPropertyValue('display');
  dropDownMenu.style.display = (dropDownDisplay === 'none') ? 'grid' : 'none';
})


var scrollToTopButton = document.querySelector('#jump-to-top');
scrollToTopButton.addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'})
})


addNavLinks()