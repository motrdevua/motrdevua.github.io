particlesJS('particles', {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: ['#aa73ff', '#f4e11e', '#b3eb00', '#00a7e5'],
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 15,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1.5,
        opacity_min: 0.15,
        sync: false,
      },
    },
    size: {
      value: 2.5,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.15,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 110,
      color: '#33b1f8',
      opacity: 0.25,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    enable: true,
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
