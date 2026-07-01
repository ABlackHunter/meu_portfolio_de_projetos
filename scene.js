/* =============================================================================
   scene.js — Fundo 3D (Three.js r128, global THREE)
   - Esfera/órbita de transformação digital (icosaedro wireframe)
   - Nós orbitando (Cloud / PMO / M&A / Compliance / Program)
   - Campo de partículas estilo "neural network" com linhas pulsantes
   - Parallax com mouse / giroscópio
   Degrada com elegância: se THREE não carregar ou prefers-reduced-motion,
   o site continua perfeito apenas com o gradiente de fundo (CSS).
   ============================================================================= */
(function () {
  "use strict";

  const canvas = document.getElementById("bg-canvas");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canvas || typeof window.THREE === "undefined" || reduce) return;

  const THREE = window.THREE;
  const COLORS = { gold: 0xc9a24a, goldSoft: 0xe3c578, tech: 0x4f8ff7, ink: 0x8aa0c8 };
  const isMobile = window.matchMedia("(max-width: 720px)").matches;

  let renderer, scene, camera, group, points, lineMesh;
  let raf = 0;
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, alpha: true });
  } catch (e) {
    return; // sem WebGL -> mantém só o gradiente CSS
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x060c18, 0.045);

  camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 14);

  group = new THREE.Group();
  scene.add(group);

  /* ---------- Esfera de transformação (icosaedro wireframe) ---------- */
  const coreGeo = new THREE.IcosahedronGeometry(3.1, 1);
  const core = new THREE.LineSegments(
    new THREE.EdgesGeometry(coreGeo),
    new THREE.LineBasicMaterial({ color: COLORS.gold, transparent: true, opacity: 0.32 })
  );
  group.add(core);

  const coreInner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(3.05, 1),
    new THREE.MeshBasicMaterial({ color: 0x0e1d36, transparent: true, opacity: 0.35, wireframe: false })
  );
  group.add(coreInner);

  /* ---------- Nós orbitando (cartões de domínio) ---------- */
  const nodeColors = [COLORS.gold, COLORS.tech, COLORS.goldSoft, COLORS.tech, COLORS.gold];
  const nodes = [];
  for (let i = 0; i < 5; i++) {
    const node = new THREE.Mesh(
      new THREE.SphereGeometry(0.13, 16, 16),
      new THREE.MeshBasicMaterial({ color: nodeColors[i] })
    );
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.26, 0.3, 32),
      new THREE.MeshBasicMaterial({ color: nodeColors[i], transparent: true, opacity: 0.4, side: THREE.DoubleSide })
    );
    node.add(ring);
    node.userData = {
      radius: 4.4 + (i % 2) * 1.1,
      speed: 0.18 + i * 0.04,
      phase: (i / 5) * Math.PI * 2,
      tilt: (i - 2) * 0.4,
    };
    nodes.push(node);
    group.add(node);
  }

  /* ---------- Campo de partículas "neural" ---------- */
  const COUNT = isMobile ? 70 : 150;
  const SPREAD = 26;
  const positions = new Float32Array(COUNT * 3);
  const velocities = [];
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * SPREAD;
    positions[i * 3 + 1] = (Math.random() - 0.5) * (SPREAD * 0.7);
    positions[i * 3 + 2] = (Math.random() - 0.5) * SPREAD;
    velocities.push(new THREE.Vector3((Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01, (Math.random() - 0.5) * 0.01));
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  points = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({ color: COLORS.ink, size: 0.08, transparent: true, opacity: 0.7, sizeAttenuation: true })
  );
  scene.add(points);

  /* ---------- Linhas que conectam partículas próximas ---------- */
  const LINK_DIST = isMobile ? 4.0 : 4.6;
  const maxLines = COUNT * 6;
  const linePos = new Float32Array(maxLines * 6);
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
  lineMesh = new THREE.LineSegments(
    lineGeo,
    new THREE.LineBasicMaterial({ color: COLORS.tech, transparent: true, opacity: 0.14 })
  );
  scene.add(lineMesh);

  function rebuildLinks() {
    const pos = pGeo.attributes.position.array;
    let v = 0;
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      for (let j = i + 1; j < COUNT; j++) {
        const jx = j * 3;
        const dx = pos[ix] - pos[jx], dy = pos[ix + 1] - pos[jx + 1], dz = pos[ix + 2] - pos[jx + 2];
        if (dx * dx + dy * dy + dz * dz < LINK_DIST * LINK_DIST && v < maxLines * 6 - 6) {
          linePos[v++] = pos[ix]; linePos[v++] = pos[ix + 1]; linePos[v++] = pos[ix + 2];
          linePos[v++] = pos[jx]; linePos[v++] = pos[jx + 1]; linePos[v++] = pos[jx + 2];
        }
      }
    }
    lineGeo.setDrawRange(0, v / 3);
    lineGeo.attributes.position.needsUpdate = true;
  }

  /* ---------- Interação: parallax ---------- */
  window.addEventListener("pointermove", (e) => {
    pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
  });
  window.addEventListener("deviceorientation", (e) => {
    if (e.gamma == null) return;
    pointer.tx = Math.max(-1, Math.min(1, e.gamma / 30));
    pointer.ty = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
  });

  /* ---------- Resize ---------- */
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", onResize);

  /* ---------- Loop ---------- */
  const clock = new THREE.Clock();
  let linkTimer = 0;

  function animate() {
    raf = requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    const dt = Math.min(clock.getDelta(), 0.05);

    pointer.x += (pointer.tx - pointer.x) * 0.04;
    pointer.y += (pointer.ty - pointer.y) * 0.04;

    group.rotation.y = t * 0.08 + pointer.x * 0.5;
    group.rotation.x = pointer.y * 0.3;
    core.rotation.y -= 0.0015;
    core.rotation.z += 0.0008;
    coreInner.rotation.copy(core.rotation);

    nodes.forEach((n) => {
      const d = n.userData;
      const a = t * d.speed + d.phase;
      n.position.set(
        Math.cos(a) * d.radius,
        Math.sin(a * 0.9) * 1.3 + d.tilt,
        Math.sin(a) * d.radius
      );
      n.lookAt(camera.position);
    });

    // drift das partículas
    const pos = pGeo.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      pos[ix] += velocities[i].x; pos[ix + 1] += velocities[i].y; pos[ix + 2] += velocities[i].z;
      for (let k = 0; k < 3; k++) {
        const lim = k === 1 ? SPREAD * 0.35 : SPREAD * 0.5;
        if (pos[ix + k] > lim || pos[ix + k] < -lim) {
          velocities[i].setComponent(k, -velocities[i].getComponent(k));
        }
      }
    }
    pGeo.attributes.position.needsUpdate = true;
    points.rotation.y = t * 0.01;

    linkTimer += dt;
    if (linkTimer > 0.12) { rebuildLinks(); linkTimer = 0; }
    lineMesh.rotation.copy(points.rotation);

    renderer.render(scene, camera);
  }

  // Pausa quando a aba não está visível (economia de bateria)
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
    else if (!raf) { clock.getDelta(); animate(); }
  });

  rebuildLinks();
  animate();
  requestAnimationFrame(() => canvas.classList.add("ready"));
})();
