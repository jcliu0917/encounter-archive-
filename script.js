<script>
const water = document.querySelector(".water-bg");

let targetBrightness = 1;
let currentBrightness = 1;

// 鼠标影响“扰动强度”
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX / window.innerWidth;  // 0~1
  mouseY = e.clientY / window.innerHeight;
});

// 呼吸周期（基础）
let t = 0;

function animate() {
  // 鼠标影响振幅（不是直接控制）
  const amplitude = 0.03 + mouseY * 0.05; // 越往下越“湿润感”

  // 鼠标影响速度（轻微）
  const speed = 0.002 + mouseX * 0.004;

  t += speed;

  targetBrightness =
    1 +
    Math.sin(t) * amplitude;

  // easing（滞后感）
  currentBrightness += (targetBrightness - currentBrightness) * 0.08;

  water.style.filter = `brightness(${currentBrightness})`;

  requestAnimationFrame(animate);
}

animate();
</script>
