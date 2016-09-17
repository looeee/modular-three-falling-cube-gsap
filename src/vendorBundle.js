// import THREE from 'three';
// window.THREE = THREE;

// ALTERNATELY: Import just what you need from THREE
// For simple scenes this can result in a saving (un-minified)
// of ~200kb
//As a bare minimum you will probably need the following:
import {
  LoadingManager,
  // ObjectLoader,
  TextureLoader,
  PerspectiveCamera,
  Scene,
  Mesh,
  Math as _Math,
  WebGLRenderer,
  Vector3,
  BoxBufferGeometry,
  MeshBasicMaterial,
} from 'three/src/THREE';

window.THREE = {
  LoadingManager,
  // ObjectLoader,
  TextureLoader,
  PerspectiveCamera,
  Scene,
  Mesh,
  WebGLRenderer,
  Vector3,
  BoxBufferGeometry,
  MeshBasicMaterial,
};

window.THREE.Math = _Math;

import modularTHREE from 'modular-three';
window.modularTHREE = modularTHREE;

// import 'gsap/src/uncompressed/TimelineLite';
// import 'gsap/src/uncompressed/easing/EasePack';

import Stats from 'three/examples/js/libs/stats.min';
window.Stats = Stats;

// import dat from 'dat-gui';
// window.dat = dat;
