<script>
const bg = document.querySelector(".bg");

let t = 0;

function animate() {
  t += 0.003;

  // 🌊 呼吸感：亮度缓慢正弦变化
  const brightness = 0.75 + Math.sin(t) * 0.08;

  // 🌫️ 轻微对比波动（让水更“活”）
  const contrast = 1.05 + Math.sin(t * 0.7) * 0.03;

  bg.style.filter = `brightness(${brightness}) contrast(${contrast})`;

  requestAnimationFrame(animate);
}

animate();
</script>
