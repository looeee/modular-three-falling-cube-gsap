import { Cube } from '../meshObjects/cube';

// The following spec objects are optional and can be omitted
//for the defaults shown
const rendererSpec = {
  canvasID: 'exampleDrawing',
  antialias: true,
  alpha: true, //true required for multiple scenes
  autoClear: true, //false required for multiple scenes
  clearColor: 0x6858bb,
  clearAlpha: 1.0,
  width: () => window.innerWidth,
  height: () => window.innerHeight,
  pixelRatio: window.devicePixelRatio,
  postprocessing: false,
  useGSAP: true,
  showStats: true,
};

// Optional
const cameraSpec = {
  type: 'PerspectiveCamera', //Or 'OrthographicCamera'
  near: 10,
  far: -10,
  position: new THREE.Vector3(0, 0, 100),
  //PerspectiveCamera only
  fov: 45,
  aspect: () => window.innerWidth / window.innerHeight,
  // OrthographicCamera only
  width: () => window.innerWidth,
  height: () => window.innerHeight,
};

export class ExampleDrawing extends modularTHREE.Drawing {
  constructor() {
    super(rendererSpec, cameraSpec);
  }

  init() {
    this.initObjects();
    this.initCubeAnimation();
    this.initCubeGUI();
  }

  initObjects() {
    this.cube = new Cube();

    //set the cube's initial position and rotation
    this.cube.rotation.set(-2, 2, 0);
    this.cube.position.set(0, 30, 0);

    this.scene.add(this.cube);
  }

  initCubeAnimation() {
    this.cubeTimeline = new TimelineLite({ paused: true });

    const cubeFallTween = TweenLite.to(this.cube.position, 3.5, {
      y: -20,
      ease: Bounce.easeOut,
    });

    const cubeRotateTween = TweenLite.to(this.cube.rotation, 3.5, {
      x: 0,
      y: 0,
      ease: Sine.easeInOut,
    });

    this.cubeTimeline.add(cubeFallTween);

    //add the rotation tween at time 0 so that falling and rotating
    //happen simultaneously
    this.cubeTimeline.add(cubeRotateTween, 0);
  }

  initCubeGUI() {
      //Prevent multiple copies of the gui being created (e.g. on window resize)
    if (this.gui) return;

    this.gui = new dat.GUI();

    const opts = {
      play: () => {
        this.cubeTimeline.play();
      },
      stop: () => {
        this.cubeTimeline.stop();
      },
      reset: () => {
        this.cubeTimeline.progress(0);
      },
      reverse: () => {
        this.cubeTimeline.reverse();
      },
    };

    this.gui.add(opts, 'play');
    this.gui.add(opts, 'stop');
    this.gui.add(opts, 'reset');
    this.gui.add(opts, 'reverse');
  }
}
