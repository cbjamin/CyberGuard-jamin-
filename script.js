document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === 'Jamin' && pass === 'AMISHAjamin0786') {
    document.getElementById('loginStatus').textContent = 'Login successful!';
    document.getElementById('tool-list').innerHTML = `
      <div>Base64 Encoder <button onclick="likeTool(this)">Like</button></div>
      <div>IP Tracker <button onclick="likeTool(this)">Like</button></div>
      <div>URL Decoder <button onclick="likeTool(this)">Like</button></div>
    `;
  } else {
    document.getElementById('loginStatus').textContent = 'Invalid credentials!';
  }
});

function likeTool(btn) {
  if (!btn.liked) {
    btn.textContent = 'Liked';
    btn.liked = true;
  }
}



// Matrix Animation
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.prepend(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";
canvas.style.pointerEvents = "none";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let columns = canvas.width / 20;
let drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00FF00";
    ctx.font = "16px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(text, i * 20, drops[i] * 20);
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);
