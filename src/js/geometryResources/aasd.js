// THREE
let renderer, scene, camera;
let meshes = [];

let _WIDTH = window.innerWidth, _HEIGHT = window.innerHeight;
let pointer;

// OIMO
let world = null;
let bodies = [];

const init = () => {
    let container = document.getElementById('webgl-container');
    renderer = new THREE.WebGLRenderer({
        antialias: false,
    })
    renderer.setClearColor(0x000000);
    renderer.setSize(_WIDTH, _HEIGHT);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;//THREE.BasicShadowMap;
    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, _WIDTH/_HEIGHT, 0.01, 1000);
    camera.position.z = 400;
    camera.position.y = 120;
    scene.add(camera);

    initOimo();

    let directionalLight = new THREE.DirectionalLight( 0xffffff, 1.4 );
    directionalLight.position.set( 300, 1000, 500 );
    directionalLight.target.position.set(0,0,0);
    directionalLight.castShadow = true;
    scene.add( directionalLight );


    // Floor
    let floor = new THREE.Mesh(
        new THREE.BoxBufferGeometry(1,1,1),
        new THREE.MeshLambertMaterial({
            color: 0x252525,
            side: THREE.DoubleSide,
        })
    )
    floor.castShadow = false;
    floor.receiveShadow = true;
    console.log(floor);
    world.add({
        size: [400,80,400],
        pos: [0,-40,0],
        world: world,
    })
    floor.scale.set(400,80,400);
    floor.position.set(0,-40, 0);
    floor.rotation.set(0,0,0);
    scene.add(floor);

    world.gravity = new OIMO.Vec3(0, -1000, 0);

    window.addEventListener('click', onMouseDown, false);
    window.addEventListener('resize', onWindowResize, false);

    animate();

}

let sphereSize = 10;
let geometry = new THREE.BoxBufferGeometry(1, 1, 1);
let material = new THREE.MeshLambertMaterial({
    color: 0xFF0000,
})



const createSphere = () => {
    let rndm = Math.random() * 10;
    let w = sphereSize + rndm,
        h = 1,
        d = 1;
    let x = Math.random() * 200 - 100,
        y = Math.random() * 100 + 100,
        z = Math.random() * 200 - 100;
    let body = world.add({
        type: 'box',
        size: [w * 0.5, w * 0.5, w * 0.5],
        pos: [x,y,z],
        move: true,
        world: world,
    })
    let mesh = new THREE.Mesh(
        geometry, material);
    mesh.scale.set(w*0.5, w*0.5, w*0.5);
    mesh.position.set(x,y,z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    bodies.push(body);
    meshes.push(mesh);

    scene.add(mesh);

}

const initOimo = () => {
    world = new OIMO.World(1/60, 2, 8);
}
const updatePhysics = () => {
    if ( world === null ) return;
    world.step();
    for (var i = 0, len = bodies.length; i < len; i++){
        let b = bodies[i];
        let m = meshes[i];

        if ( !b.sleeping ){
            m.position.copy(b.getPosition());
            m.quaternion.copy(b.getQuaternion());
        }
    }
}

const render = () => {
    renderer.render(scene,camera);
}
const update = () => {
    updatePhysics();
}

const onMouseDown = () => {
    for (var i = 0; i < 20; i++){
        createSphere();
    }
}
const onWindowResize = () => {
    let w = window.innerWidth,
        h = window.innerHeight;
    camera.aspect = (w/h);
    camera.updateProjectionMatrix();
    renderer.setSize(w,h);
}

const animate = () => {
    update();
    render();
    requestAnimationFrame(animate);
}

init();