// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var ourScene = new ScrollMagic.Scene({
  triggerElement: '.title-cube'
})
.setClassToggle('.title-cube', 'show')
.addIndicators({
    name: 'fade scene',
    colorTrigger: 'black',
    colorStart: 'pink',
    colorEnd: 'black'
})
.addTo(controller); // assign the scene to the controller

var boxStack = new ScrollMagic.Scene({
    triggerElement: '#smallSquare'
  })
  .setClassToggle('.start', 'end')
  .addTo(controller); // assign the scene to the controller
  
  
  











