import * as THREE from 'three';
import { MTLLoader } from 'MTLLoader';
import { OBJLoader } from 'OBJLoader';
import { OrbitControls } from 'OrbitControls';

function main() {
    // Select the canvas and create the renderer
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

    // set the perspective camera parameters
    const fov = 45;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const near = 0.1;
    const far = 100;
    // Create perspective camera
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 10, 20);

    // Add OrbitControls
    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 0, 0);
    controls.update();

    // create a scene obj
    const scene = new THREE.Scene();

    const stoolPositions = [
        new THREE.Vector3(10, 0, -14),
        new THREE.Vector3(10, 0, -18),
        new THREE.Vector3(10, 0, -10),
        new THREE.Vector3(16, 0, -14),
        new THREE.Vector3(16, 0, -18),
        new THREE.Vector3(16, 0, -10)
    ];

    loadModel(scene, 
        './resources/cat_obj/Cat_v1_l3.mtl', 
        './resources/cat_obj/Cat_v1_l3.obj', 
        new THREE.Vector3(12, 0, 10), 
        new THREE.Vector3(0.06, 0.06, 0.06),
        new THREE.Vector3(Math.PI / 2, Math.PI, 5 * Math.PI / 4) // Rotation for the cat object
    );

    loadModel(scene, 
        './foodUsed/potStew.mtl', 
        './foodUsed/potStew.obj', 
        new THREE.Vector3(-4.85, 4.2, -18), 
        new THREE.Vector3(2, 2, 2),
        new THREE.Vector3(0, 3*Math.PI/2, 0 ) // Rotation for the second object
    );

    // stool model is loaded 6 different times at different positions
    stoolPositions.forEach(stoolPositions => {
        loadModel(scene, 
            './furniUsed/stoolBar.mtl', 
            './furniUsed/stoolBar.obj', 
            stoolPositions, 
            new THREE.Vector3(0.8, 0.8, 0.8),
            new THREE.Vector3(0, 0, 0)
        );
    });


    loadModel(scene, 
        './furniUsed/kitchenCoffeeMachine.mtl', 
        './furniUsed/kitchenCoffeeMachine.obj', 
        new THREE.Vector3(-19, 4.3, -17.5), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/plantSmall2.mtl', 
        './furniUsed/plantSmall2.obj', 
        new THREE.Vector3(-16.3, 8.3, -18.5), 
        new THREE.Vector3(0.8, 0.8, 0.8),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );
    
    loadModel(scene, 
        './furniUsed/kitchenStove.mtl', 
        './furniUsed/kitchenStove.obj', 
        new THREE.Vector3(-6.3, 0, -15.5), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/kitchenSink.mtl', 
        './furniUsed/kitchenSink.obj', 
        new THREE.Vector3(-6, 0, -10.5), 
        new THREE.Vector3(1, 1, 1), // scale
        new THREE.Vector3(0, 0, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/kitchenMicrowave.mtl', 
        './furniUsed/kitchenMicrowave.obj', 
        new THREE.Vector3(-17, 4.3, -17.5), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/kitchenCabinetUpperCorner.mtl', 
        './furniUsed/kitchenCabinetUpperCorner.obj', 
        new THREE.Vector3(-17, 8, -17.5), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/kitchenCabinetUpperCorner.mtl', 
        './furniUsed/kitchenCabinetUpperCorner.obj', 
        new THREE.Vector3(-18.7, 8, -17.5), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/kitchenCabinetUpperCorner.mtl', 
        './furniUsed/kitchenCabinetUpperCorner.obj', 
        new THREE.Vector3(-20, 8, -17.5), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/kitchenCabinetUpperDouble.mtl', 
        './furniUsed/kitchenCabinetUpperDouble.obj', 
        new THREE.Vector3(-14.9, 8, -17.5), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/kitchenCabinetUpper.mtl', 
        './furniUsed/kitchenCabinetUpper.obj', 
        new THREE.Vector3(-10.6, 8, -17.5), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/kitchenCabinetUpperLow.mtl', 
        './furniUsed/kitchenCabinetUpperLow.obj', 
        new THREE.Vector3(-6.3, 9.95, -17.5), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/loungeSofaLong.mtl', 
        './furniUsed/loungeSofaLong.obj', 
        new THREE.Vector3(5, 0, 13), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, 3*Math.PI / 2, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/wall.mtl', 
        './furniUsed/wall.obj', 
        new THREE.Vector3(8, 0, -5.5), 
        new THREE.Vector3(1.2, 1.1, 1),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );
    loadModel(scene, 
        './furniUsed/wall.mtl', 
        './furniUsed/wall.obj', 
        new THREE.Vector3(-20, 0, -5.5), 
        new THREE.Vector3(1.8, 1.1, 1),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/wallDoorwayWide.mtl', 
        './furniUsed/wallDoorwayWide.obj', 
        new THREE.Vector3(-2, 0, -5.5), 
        new THREE.Vector3(1, 1.1, 1),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );
    // living room divider from bath/bed
    loadModel(scene, 
        './furniUsed/wall.mtl', 
        './furniUsed/wall.obj', 
        new THREE.Vector3(-6, 0, 12), 
        new THREE.Vector3(1, 1.1, 1),
        new THREE.Vector3(0, 3*Math.PI/2, 0) // Rotation for the second object
    );
    // right side
    loadModel(scene, 
        './furniUsed/wall.mtl', 
        './furniUsed/wall.obj', 
        new THREE.Vector3(-6, 0, -3.5), 
        new THREE.Vector3(0.2, 1.1, 1),
        new THREE.Vector3(0, 3*Math.PI/2, 0) // Rotation for the second object
    );

    // left side
    loadModel(scene, 
        './furniUsed/wall.mtl', 
        './furniUsed/wall.obj', 
        new THREE.Vector3(-6, 0, 20), 
        new THREE.Vector3(0.2, 1.1, 1),
        new THREE.Vector3(0, 3*Math.PI/2, 0) // Rotation for the second object
    );

    // left door
    loadModel(scene, 
        './furniUsed/wallDoorway.mtl', 
        './furniUsed/wallDoorway.obj', 
        new THREE.Vector3(-6, 0, 20), 
        new THREE.Vector3(1, 1.1, 1),
        new THREE.Vector3(0, 3*Math.PI/2, 0) // Rotation for the second object
    );

    // right door
    loadModel(scene, 
        './furniUsed/wallDoorway.mtl', 
        './furniUsed/wallDoorway.obj', 
        new THREE.Vector3(-6, 0, 4.3), 
        new THREE.Vector3(1, 1.1, 1),
        new THREE.Vector3(0, 3*Math.PI/2, 0) // Rotation for the second object
    );


    // bathroom and bedrom divider
    loadModel(scene, 
        './furniUsed/wall.mtl', 
        './furniUsed/wall.obj', 
        new THREE.Vector3(-20, 0, 6), 
        new THREE.Vector3(1.4, 1.1, 1),
        new THREE.Vector3(0, Math.PI, 0) // Rotation for the second object
    );

    // bathroom
    loadModel(scene, 
        './furniUsed/bathroomSink.mtl', 
        './furniUsed/bathroomSink.obj', 
        new THREE.Vector3(-8, 4.3, 2.5), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, 0, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/bathroomCabinet.mtl', 
        './furniUsed/bathroomCabinet.obj', 
        new THREE.Vector3(-6.5, 8, 3.5), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, 0, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/shower.mtl', 
        './furniUsed/shower.obj', 
        new THREE.Vector3(-14.3, 0.01, 0), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, 3*Math.PI/2, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/toilet.mtl', 
        './furniUsed/toilet.obj', 
        new THREE.Vector3(-20, 0, -1), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, 3*Math.PI/2, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/bedSingle.mtl', 
        './furniUsed/bedSingle.obj', 
        new THREE.Vector3(-8.7, 0, 15.6), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, 3*Math.PI/2, 0) // Rotation for the second object
    );


    loadModel(scene, 
        './furniUsed/bookcaseClosedDoors.mtl', 
        './furniUsed/bookcaseClosedDoors.obj', 
        new THREE.Vector3(-7, 0, 17.4), 
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(0, 0, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/desk.mtl', 
        './furniUsed/desk.obj', 
        new THREE.Vector3(-16.8, 0, 19), 
        new THREE.Vector3(0.8, 0.8, 0.8),
        new THREE.Vector3(0, 3*Math.PI/2, 0) // Rotation for the second object
    );

    loadModel(scene, 
        './furniUsed/lampRoundTable.mtl', 
        './furniUsed/lampRoundTable.obj', 
        new THREE.Vector3(-18, 3, 14.8), 
        new THREE.Vector3(0.8, 0.8, 0.8),
        new THREE.Vector3(0, 3*Math.PI/2, 0) // Rotation for the second object
    );


    /*----------------------- Textures ------------------------- */

    // loading plane texture
    const planeSize = 40;
 
    const planeloader = new THREE.TextureLoader();
    const planeTexture = planeloader.load('resources/wood.jpeg');
    planeTexture.wrapS = THREE.RepeatWrapping;
    planeTexture.wrapT = THREE.RepeatWrapping;
    planeTexture.magFilter = THREE.NearestFilter;
    planeTexture.colorSpace = THREE.SRGBColorSpace;
    const repeats = planeSize / 2;
    planeTexture.repeat.set(repeats, repeats);

    const bgLoader = new THREE.TextureLoader();
    let bgTexture = bgLoader.load(
    'resources/sunset.jpg',
    () => {
        bgTexture.mapping = THREE.EquirectangularReflectionMapping;
        bgTexture.colorSpace = THREE.SRGBColorSpace;
        scene.background = bgTexture;
    });

    const marbleLoader = new THREE.TextureLoader();
    const marble = marbleLoader.load('resources/marble.png', () => {
        // Update rendering when texture loads
        renderer.render(scene, camera);
    });

    const oldWoodLoader = new THREE.TextureLoader();
    const oldWood = oldWoodLoader.load('resources/oldwood.jpeg', () => {
        // Update rendering when texture loads
        renderer.render(scene, camera);
    });

    const rugTextureLoader = new THREE.TextureLoader();
    const rugTexture = rugTextureLoader.load('resources/rug.jpeg', () => {
        // Update rendering when texture loads
        renderer.render(scene, camera);
    });

    const wallTextureLoader = new THREE.TextureLoader();
    const wallTexture = wallTextureLoader.load('resources/beigeWall.jpeg', () => {
        // Update rendering when texture loads
        renderer.render(scene, camera);
    });

    /*-------------------- End Of Textures ---------------------- */


    // plane geometry, material, and mesh
    const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
    map: planeTexture,
    side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -.5;
    scene.add(mesh);

    // Add walls
    const wallHeight = 15;  // Height of the walls
    const wallMaterial = new THREE.MeshPhongMaterial({ map: wallTexture, side: THREE.DoubleSide });

    // Back wall
    const backWallGeo = new THREE.PlaneGeometry(planeSize, wallHeight);
    const backWall = new THREE.Mesh(backWallGeo, wallMaterial);
    backWall.position.set(0, wallHeight / 2, -planeSize / 2);
    scene.add(backWall);

    // Left wall
    const leftWallGeo = new THREE.PlaneGeometry(planeSize, wallHeight);
    const leftWall = new THREE.Mesh(leftWallGeo, wallMaterial);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-planeSize / 2, wallHeight / 2, 0);
    scene.add(leftWall);

    // Right wall
    const rightWallGeo = new THREE.PlaneGeometry(planeSize, wallHeight);
    const rightWall = new THREE.Mesh(rightWallGeo, wallMaterial);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(planeSize / 2, wallHeight / 2, 0);
    scene.add(rightWall);

    // adjusts display size. i also used css to help make display look nicer.
    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }
    /*-------------------- Lighting ---------------------- */
    // directional, ambient, and point

    // setup for directional light in the scene
    const color = 0xFFFFFF;
    const intensity = 0.5;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    // ambient light in the scene
    const colorAmbient = 0xC2DCFF; // warm lighting for day, cool lighting for night?
    const intensityAmbient = 0.8;
    const lightAmbient = new THREE.AmbientLight(colorAmbient, intensityAmbient);
    scene.add(lightAmbient);

    // kitchen light in the scene
    const colorKitchen = 0xFFE7C2;
    const intensityKitchen = 80;
    const lightKitchen = new THREE.PointLight(colorKitchen, intensityKitchen);
    lightKitchen.position.set(-13, 8, -13);
    scene.add(lightKitchen);

    // kitchen2 light in the scene
    const color2Kitchen = 0xFFE7C2;
    const intensity2Kitchen = 80;
    const light2Kitchen = new THREE.PointLight(color2Kitchen, intensity2Kitchen);
    light2Kitchen.position.set(12, 8, -13);
    scene.add(light2Kitchen);

    // const colorStove = 0xFFE7C2;
    // const intensityStove = 50;
    // const lightStove = new THREE.PointLight(colorStove, intensityStove);
    // lightStove.position.set(-3.5, 10, -18);
    // scene.add(lightStove);

    const colorBathroom = 0xFFE7C2;
    const intensityBathroom = 80;
    const lightBathroom = new THREE.PointLight(colorBathroom, intensityBathroom);
    lightBathroom.position.set(-14.5, 10, 0);
    scene.add(lightBathroom);

    const colorFanLiving = 0xFFE7C2;
    const intensityFanLiving = 80;
    const lightFanLiving = new THREE.PointLight(colorFanLiving, intensityFanLiving);
    lightFanLiving.position.set(3, 9, 6);
    scene.add(lightFanLiving);

    const colorBedLamp = 0xFFE7C2;
    const intensityBedLamp = 5;
    const lightBedLamp = new THREE.PointLight(colorBedLamp, intensityBedLamp);
    lightBedLamp.position.set(-18.5, 4, 14.5);
    scene.add(lightBedLamp);


    /*------------------ End Of Lighting ----------------- */

    // Sphere
    const sphereRadius = 0.55;
    const sphereWidthDivisions = 32;
    const sphereHeightDivisions = 16;
    const sphereGeometry = new THREE.SphereGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
    const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0x429E37 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(-13, 5, -8);
    scene.add(sphere);

    // Cylinder
    const cylinderRadiusTop = 0.3;
    const cylinderRadiusBottom = 0.1;
    const cylinderHeight = 1;
    const cylinderRadialSegments = 32;
    const cylinderGeometry = new THREE.CylinderGeometry(cylinderRadiusTop, cylinderRadiusBottom, cylinderHeight, cylinderRadialSegments);
    const cylinderMaterial = new THREE.MeshPhongMaterial({ color: 0x429E37 });
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.set(-13, 5.4, -8);
    scene.add(cylinder);

    // Cube counter
    const counterWidth = 13;
    const counterHeight = 4;
    const counterDepth = 4;
    const counterGeometry = new THREE.BoxGeometry(counterWidth, counterHeight, counterDepth);
    const counterMaterial = new THREE.MeshPhongMaterial({ color: 0xD09C5D });
    const counter = new THREE.Mesh(counterGeometry, counterMaterial);
    counter.position.set(-13, 2.001, -18);
    scene.add(counter);


    // Cube counter1
    const counter1Width = 9.4;
    const counter1Height = 4;
    const counter1Depth = 4;
    const counter1Geometry = new THREE.BoxGeometry(counter1Width, counter1Height, counter1Depth);
    const counter1Material = new THREE.MeshPhongMaterial({ color: 0xD09C5D });
    const counter1 = new THREE.Mesh(counter1Geometry, counter1Material);
    counter1.position.set(-15, 2.001, -8);
    scene.add(counter1);


    // Cube counterTop
    const counterTopWidth = 9.5;
    const counterTopHeight = .3;
    const counterTopDepth = 4.5;
    const counterTopGeometry = new THREE.BoxGeometry(counterTopWidth, counterTopHeight, counterTopDepth);
    const counterTopMaterial = new THREE.MeshPhongMaterial({ color: 0xA2D4D2 });
    const counterTop = new THREE.Mesh(counterTopGeometry, counterTopMaterial);
    counterTop.position.set(-15, 4.05, -8);
    scene.add(counterTop);

    const counterTop1Width = 13.5;
    const counterTop1Height = .3;
    const counterTop1Depth = 5;
    const counterTop1Geometry = new THREE.BoxGeometry(counterTop1Width, counterTop1Height, counterTop1Depth);
    const counterTop1 = new THREE.Mesh(counterTop1Geometry, counterTopMaterial);
    counterTop1.position.set(-13, 4.05, -18.6);
    scene.add(counterTop1);

    // Cube fridge
    const fridgeWidth = 4;
    const fridgeHeight = 8;
    const fridgeDepth = 3;
    const fridgeGeometry = new THREE.BoxGeometry(fridgeWidth, fridgeHeight, fridgeDepth);
    const fridgeMaterial = new THREE.MeshPhongMaterial({ color: 0xd4d4d4 });
    const fridge = new THREE.Mesh(fridgeGeometry, fridgeMaterial);
    fridge.position.set(0, 4, -18);
    scene.add(fridge);

    const freezerWidth = 3.2;
    const freezerHeight = 2.5;
    const freezerDepth = 0.2;
    const freezerGeometry = new THREE.BoxGeometry(freezerWidth, freezerHeight, freezerDepth);
    const freezerMaterial = new THREE.MeshPhongMaterial({ color: 0xd9d9d9 });
    const freezer = new THREE.Mesh(freezerGeometry, freezerMaterial);
    freezer.position.set(0, 6.4, -16.5);
    scene.add(freezer);

    const fridge2Width = 3.2;
    const fridge2Height = 4.5;
    const fridge2Depth = 0.2;
    const fridge2Geometry = new THREE.BoxGeometry(fridge2Width, fridge2Height, fridge2Depth);
    const fridge2Material = new THREE.MeshPhongMaterial({ color: 0xd9d9d9 });
    const fridge2 = new THREE.Mesh(fridge2Geometry, fridge2Material);
    fridge2.position.set(0, 2.5, -16.5);
    scene.add(fridge2);


    // diningTable
    const tableTopWidth = 4;
    const tableTopHeight = .3;
    const tableTopDepth = 12;
    const tableTopGeometry = new THREE.BoxGeometry(tableTopWidth, tableTopHeight, tableTopDepth);
    const tableTopMaterial = new THREE.MeshPhongMaterial({ map: marble });
    const tableTop = new THREE.Mesh(tableTopGeometry, tableTopMaterial);
    const tableTop1 = new THREE.Mesh(tableTopGeometry, tableTopMaterial);
    tableTop.position.set(12, 4.29, -13);
    scene.add(tableTop);

    const leg1Width = 2;
    const leg1Height = 4;
    const leg1Depth = 2;
    const leg1Geometry = new THREE.BoxGeometry(leg1Width, leg1Height, leg1Depth);
    const leg1Material = new THREE.MeshPhongMaterial({ color: 0xD09C5D });
    const leg1 = new THREE.Mesh(leg1Geometry, leg1Material);
    const leg2 = new THREE.Mesh(leg1Geometry, leg1Material);
    const leg3 = new THREE.Mesh(leg1Geometry, leg1Material);
    leg1.position.set(12, 2.2, -13);
    leg2.position.set(12, 2.2, -9);
    leg3.position.set(12, 2.2, -17);
    scene.add(leg1); scene.add(leg2); scene.add(leg3);


    // TV Table
    const tvStandWidth = 4;
    const tvStandHeight = 2;
    const tvStandDepth = 12;
    const tvStandGeometry = new THREE.BoxGeometry(tvStandWidth, tvStandHeight, tvStandDepth);
    const tvStandMaterial = new THREE.MeshPhongMaterial({ map: oldWood });
    const tvStand = new THREE.Mesh(tvStandGeometry, tvStandMaterial);
    tvStand.position.set(17.9888, 1.001, 8);
    scene.add(tvStand);

    // TV
    const tvWidth = 0.5;
    const tvHeight = 5;
    const tvDepth = 8;
    const tvGeometry = new THREE.BoxGeometry(tvWidth, tvHeight, tvDepth);
    const tvMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
    const tv = new THREE.Mesh(tvGeometry, tvMaterial);
    tv.position.set(18, 4.3, 8);
    scene.add(tv);

    // Rug
    const rugWidth = 10;
    const rugHeight = 0.1;
    const rugDepth = 12;
    const rugGeometry = new THREE.BoxGeometry(rugWidth, rugHeight, rugDepth);
    const rugMaterial = new THREE.MeshPhongMaterial({ map: rugTexture });
    const rug = new THREE.Mesh(rugGeometry, rugMaterial);
    rug.position.set(8, 0, 8);
    scene.add(rug);

    // Create food bowl
    const outerBowlRadiusTop = 1; // reduced radius
    const outerBowlRadiusBottom = 0.75; // reduced radius
    const outerBowlHeight = 0.5; // reduced height
    const outerBowlRadialSegments = 32;
    const outerBowlGeometry = new THREE.CylinderGeometry(
        outerBowlRadiusTop, outerBowlRadiusBottom, outerBowlHeight, outerBowlRadialSegments
    );
    const outerBowlMaterial = new THREE.MeshPhongMaterial({ color: 0x445982 });
    const outerBowl = new THREE.Mesh(outerBowlGeometry, outerBowlMaterial);
    outerBowl.position.set(18, 0.25, 17); // positioned slightly above the ground

    const innerBowlRadiusTop = 0.9; // reduced radius
    const innerBowlRadiusBottom = 0.65; // reduced radius
    const innerBowlHeight = 0.4; // reduced height
    const innerBowlGeometry = new THREE.CylinderGeometry(
        innerBowlRadiusTop, innerBowlRadiusBottom, innerBowlHeight, outerBowlRadialSegments
    );
    const innerBowlMaterial = new THREE.MeshPhongMaterial({ color: 0xa88c7b });
    const innerBowl = new THREE.Mesh(innerBowlGeometry, innerBowlMaterial);
    innerBowl.position.set(18, 0.34, 17); // positioned slightly above the ground
    innerBowl.scale.set(0.95, 0.95, 0.95);

    scene.add(outerBowl);
    scene.add(innerBowl);

    // Create and position the ceiling fan
    const ceilingFan = createCeilingFan();
    ceilingFan.position.set(3, 10, 6);
    scene.add(ceilingFan);

    // Animate the ceiling fan
    function animateCeilingFan(time) {
        ceilingFan.rotation.y = time;
        // ceilingFan.rotation.z = time;
    }

    // Create and position the ceiling lamps
    const ceilingLamp1 = createCeilingLamp();
    ceilingLamp1.position.set(12, 15, -13);
    scene.add(ceilingLamp1);

    const ceilingLamp2 = createCeilingLamp();
    ceilingLamp2.position.set(-13, 15, -13);
    scene.add(ceilingLamp2);

    const bathroomLamp = createCeilingLamp();
    bathroomLamp.position.set(-14.5, 17, 0);
    scene.add(bathroomLamp);

    // Create GUI
    const gui = new dat.GUI();
    const guiControls = {
        dayNight: true,
        ambientLight: true,
        kitchenLight: true,
        fanLivingLight: true,
        bathroomLight: true,
        lightBedLamp: true,
        light2Kitchen: true,
    };

    // function to turn all lights on/off
    function setAllLights(visible) {
        lightAmbient.visible = visible;
        lightKitchen.visible = visible;
        light2Kitchen.visible = visible;
        lightFanLiving.visible = visible;
        lightBathroom.visible = visible;
        lightBedLamp.visible = visible;
    }

    // GUI for switching between day and night
    gui.add(guiControls, 'dayNight').name('Day/Night').onChange((value) => {
        if (value) {
            bgTexture = bgLoader.load('resources/sunset.jpg', () => {
                bgTexture.mapping = THREE.EquirectangularReflectionMapping;
                bgTexture.colorSpace = THREE.SRGBColorSpace;
                scene.background = bgTexture;
            });
            lightAmbient.color.setHex(0xC2DCFF);
            lightAmbient.visible = true; // turn on ambient light during day
        } else {
            bgTexture = bgLoader.load('resources/night_sky.jpg', () => {
                bgTexture.mapping = THREE.EquirectangularReflectionMapping;
                bgTexture.colorSpace = THREE.SRGBColorSpace;
                scene.background = bgTexture;
            });
            lightAmbient.color.setHex(0x808080);
            lightAmbient.visible = false; // turn off ambient light at night
        }
    });

    // GUI for toggling lights
    gui.add(guiControls, 'ambientLight').name('Ambient Light').onChange((value) => {
        lightAmbient.visible = value;
    });
    gui.add(guiControls, 'kitchenLight').name('Kitchen Light').onChange((value) => {
        lightKitchen.visible = value;
    });
    gui.add(guiControls, 'light2Kitchen').name('Dining Light').onChange((value) => {
        light2Kitchen.visible = value;
    });
    gui.add(guiControls, 'fanLivingLight').name('Fan Living Light').onChange((value) => {
        lightFanLiving.visible = value;
    });
    gui.add(guiControls, 'bathroomLight').name('Bathroom Light').onChange((value) => {
        lightBathroom.visible = value;
    });
    gui.add(guiControls, 'lightBedLamp').name('Bedroom Lamp Light').onChange((value) => {
        lightBedLamp.visible = value;
    });

    gui.add({ allLights: true }, 'allLights').name('All Lights').onChange((value) => {
        setAllLights(value);
    });

    // function that will load OBJ models
    function loadModel(scene, mtlPath, objPath, position, scale, rotation) {
        const mtlLoader = new MTLLoader();
        mtlLoader.load(mtlPath, (materials) => {
            materials.preload();
            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load(objPath, (object) => {
                scene.add(object);
                object.position.copy(position); // position obj
                object.scale.copy(scale); // scale obj
                object.rotation.set(rotation.x, rotation.y, rotation.z); // rotate obj
            });
        });
    }


    function render(time) {
        time *= 0.001; // convert time to seconds

        // ensure the display size is adjusted
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        // cube.rotation.x = time;
        // cube.rotation.y = time;

        animateCeilingFan(time);

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

// Function to create a ceiling fan
function createCeilingFan() {
    const fan = new THREE.Group();

    // Fan base
    const baseGeometry = new THREE.CylinderGeometry(0.1, 0.1, 3, 32);
    const baseMaterial = new THREE.MeshPhongMaterial({ color: 0xf7d681 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = 2;
    fan.add(base);

    // Fan blades
    const bladeGeometry = new THREE.BoxGeometry(0.1, 0.5, 4);
    const bladeMaterial = new THREE.MeshPhongMaterial({ color: 0x423934 });

    const numBlades = 6;  // Set the number of blades here
    for (let i = 0; i < numBlades; i++) {
        const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
        blade.position.y = 0.5;
        blade.rotation.y = (i * 2 * Math.PI) / numBlades;
        fan.add(blade);
    }

    return fan;
}


function createCeilingLamp() {
    const lamp = new THREE.Group();

    // Lamp rope
    const ropeRadiusTop = 0.1;
    const ropeRadiusBottom = 0.1;
    const ropeHeight = 7;  // Adjust height as needed
    const ropeRadialSegments = 32;
    const ropeGeometry = new THREE.CylinderGeometry(ropeRadiusTop, ropeRadiusBottom, ropeHeight, ropeRadialSegments);
    const ropeMaterial = new THREE.MeshPhongMaterial({ color: 0xf7d681 });
    const rope = new THREE.Mesh(ropeGeometry, ropeMaterial);
    rope.position.y = 0;
    lamp.add(rope);

    // Lamp shade
    const points = [];
    for (let i = 0; i < 3; i++) {
        points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 1, (i - 5) * .8));
    }
    const lampGeometry = new THREE.LatheGeometry(points);
    const lampMaterial = new THREE.MeshPhongMaterial({ color: 0xc9c9c9 });
    const lampShade = new THREE.Mesh(lampGeometry, lampMaterial);
    lampShade.position.y = 0;
    lamp.add(lampShade);

    return lamp;
}


main();