/*
  Karantina System - Web Panel
  GitHub: github.com/kullaniciadi/Karantina-System
*/
/* Karantina System v2.0 - Gelişmiş Panel
*/

// 1. Gelişmiş CSS Tasarımı
const style = document.createElement('style');
style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
    body { background: #050505; color: #fff; font-family: 'Inter', sans-serif; display: flex; flex-direction: column; align-items: center; padding: 50px 20px; margin: 0; }
    
    .panel { width: 100%; max-width: 600px; animation: fadeIn 0.8s ease; }
    
    .card { background: #0d0d0d; border: 1px solid #222; border-radius: 16px; padding: 30px; margin-bottom: 20px; box-shadow: 0 8px 32px rgba(0,0,0,0.5); }
    
    h1 { font-size: 32px; letter-spacing: -1px; margin: 0 0 10px 0; color: #ff0000; }
    
    .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
    .stat-box { background: #1a1a1a; padding: 20px; border-radius: 12px; text-align: center; }
    .number { font-size: 28px; font-weight: 900; display: block; }
    .label { font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1px; }
    
    .btn { display: block; width: 100%; padding: 18px; text-align: center; color: white; text-decoration: none; border-radius: 12px; font-weight: bold; margin-top: 10px; transition: 0.3s; }
    .btn-join { background: #5865f2; }
    .btn:hover { transform: scale(1.02); filter: brightness(1.2); }
    
    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(style);

// 2. Arayüzü Oluştur
document.getElementById('root').innerHTML = `
    <div class="panel">
        <div class="card">
            <h1>KARANTINA</h1>
            <p style="color:#888;">Adaletin adresi. Kara mizahın zirvesi.</p>
        </div>
        
        <div class="stats-grid">
            <div class="card stat-box">
                <span id="st-online" class="number">--</span>
                <span class="label">Çevrimiçi</span>
            </div>
            <div class="card stat-box">
                <span id="st-voice" class="number">--</span>
                <span class="label">Sesli Kanal</span>
            </div>
        </div>

        <a href="https://discord.gg/karantina" class="btn btn-join">SUNUCUYA KATIL</a>
    </div>
`;

// 3. Canlı Veri Çekme (Daha Profesyonel)
async function updateStats() {
    try {
        const res = await fetch('https://discord.com/api/guilds/1403472039670583487/widget.json');
        const data = await res.json();
        
        // Rakamları biraz "yavaş" (sayarak) güncelleme efekti verebiliriz
        document.getElementById('st-online').innerText = data.presence_count;
        document.getElementById('st-voice').innerText = data.members ? data.members.filter(m => m.channel_id).length : 0;
    } catch (e) {
        console.error("Panel güncellenemedi!");
    }
}

updateStats();
setInterval(updateStats, 15000); // 15 saniyede bir güncelle
