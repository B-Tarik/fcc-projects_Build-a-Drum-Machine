import {TimelineMax, Expo, Elastic, Bounce} from "gsap/TweenMax";

// get Ids
const getId = (id) => document.getElementById(id),
      tomRightDrum     = getId('Tom-Right-Drum'),
      tomRightStandTop = getId('Tom-Right-Stand-Top'),
      tomLeftDrum      = getId('Tom-Left-Drum'),
      floorTom         = getId('Floor-Tom'),
      snare            = getId('Snare'),
      kick             = getId('Kick'),
      hiHats           = getId('Hi-Hats'),
      hiHatTop         = getId('Hi-Hat-Top'),
      hiHatStandTop    = getId('Hi-Hat-Stand-Top'),
      hiHatPedal       = getId('Hi-Hat-Pedal'),
      crashCymbal      = getId('Crash-Cymbal'),
      rideCymbal       = getId('Ride-Cymbal'),
      
// TweenMax animations
      newTl = () => new TimelineMax({paused: true}),
      tomRightDrumtl   = newTl(),
      tomLeftDrumtl    = newTl(),
      floorTomtl       = newTl(),
      snaretl          = newTl(),
      kicktl           = newTl(),
      hiHatstl         = newTl(),
      hiHatStandtl     = newTl(),
      crashCymbaltl    = newTl(),
      rideCymbaltl     = newTl();
      
tomRightDrumtl
  .to(tomRightDrum, 0.1, {scaleX: 1.03, rotation: -1, y: 2, transformOrigin: "50% 50%", ease: Expo.easeOut})
  .to(tomRightDrum, 0.1, {scaleY: 0.98,  transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
  .to(tomRightDrum, 0.4, {scale: 1, rotation: 0, y: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut})
  .to(tomRightStandTop, 0.1, {rotation: -1, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '0')
  .to(tomRightStandTop, 0.1, {rotation: 0, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '-=0.4');

tomLeftDrumtl
  .to(tomLeftDrum, 0.1, {scaleX: 1.03, rotation: 1, y: 2, transformOrigin: "50% 50%", ease: Expo.easeOut})
  .to(tomLeftDrum, 0.1, {scaleY: 0.98,  transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
  .to(tomLeftDrum, 0.4, {scale: 1, rotation: 0, y: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut})

floorTomtl
  .to(floorTom, 0.1, {scaleY: 0.99, transformOrigin: "50% 100%", ease: Expo.easeOut})
  .to(floorTom, 0.1, {scaleX: 1.01, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
  .to(floorTom, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

snaretl
  .to(snare, 0.1, {scaleX: 1.02, transformOrigin: "50% 50%", ease: Expo.easeOut})
  .to(snare, 0.1, {scaleY: 0.98, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
  .to(snare, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

kicktl
  .to(kick, 0.1, {scale: 0.99, transformOrigin: "50% 100%", ease: Expo.easeOut})
  .to(kick, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

hiHatstl
  .to(hiHats, 0.1, {rotation: -4, transformOrigin: "50% 50%"})
  .to(hiHats, 0.6, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1.5, 0.2)});

hiHatStandtl 
  .to([hiHatTop, hiHatStandTop], 0.1, {y:-10, ease: Bounce.easeOut})
  .to(hiHatPedal, 0.1, {scaleY: 0.98, y: 5, ease: Bounce.easeOut}, '0')
  .to([hiHatTop, hiHatStandTop], 0.2, {y:0, ease: Bounce.easeOut})
  .to(hiHatPedal, 0.1, {scaleY: 1, y: 0, ease: Bounce.easeOut}, '-=0.2')

crashCymbaltl
  .to(crashCymbal, 0.1, {rotation: 15, transformOrigin: "50% 50%"})
  .to(crashCymbal,1.6, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut});

rideCymbaltl
  .to(rideCymbal, 0.1, {rotation: 5, transformOrigin: "50% 50%"})
  .to(rideCymbal,1.2, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut});

let bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Crash-Cymbal',
    tl: crashCymbaltl,
    url: '/audio/Crash.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Tom-Left-Drum',
    tl: tomLeftDrumtl,
    url: '/audio/Small-Rack-Tom.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Ride-Cymbal',
    tl: rideCymbaltl,
    url: '/audio/Ride-Splashy.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Tom-Right-Drum',
    tl: tomRightDrumtl,
    url: '/audio/Big-Rack-Tom.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Hi-Hats',
    tl: hiHatstl,
    url: '/audio/Hi-Hat-Closed.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Hi-Hat-Stand',
    tl: hiHatStandtl,
    url: '/audio/High-Hat-Open.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Floor-Tom',
    tl: floorTomtl,
    url: '/audio/Floor-Tom.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    tl: kicktl,
    url: '/audio/Kick.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: "Snare",
    tl: snaretl,
    url: '/audio/Snare.mp3'
  },
]

export default bankOne;
