const root = document.getElementById('root');

function renderApp(data = null) {
    const onlineCount = data ? data.presence_count : "...";
    const members = data ? (data.members || []) : [];
    const voiceCount = members.filter(m => m.channel_id).length;

    root.innerHTML = `
        <div class="space-y-6 animate-in fade-in duration-700">
            <div class="glass border border-zinc-800 p-8 rounded-[2rem] relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4">
                    <div class="flex items-center gap-2 bg-red-600/10 px-3 py-1 rounded-full border border-red-600/20">
                        <div class="w-2 h-2 bg-red-600 rounded-full status-online"></div>
                        <span class="text-[10px] font-bold text-red-500 uppercase tracking-tighter">Sistem Aktif</span>
                    </div>
                </div>
                
                <h1 class="text-5xl font-extrabold tracking-tighter mb-4">
                    KARANTİNA<span class="text-red-600">.</span>
                </h1>
                <p class="text-zinc-400 text-lg leading-relaxed max-w-md">
                    Adaletin adresi, kara mizahın merkezi. Yeniden doğuşun en sert hali burada başlar.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="glass border border-zinc-800 p-6 rounded-3xl flex justify-between items-center">
                    <div>
                        <p class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Aktif Üye</p>
                        <h3 class="text-3xl font-black">${onlineCount}</h3>
                    </div>
                    <div class="text-3xl text-red-600/20">👥</div>
                </div>
                
                <div class="glass border border-zinc-800 p-6 rounded-3xl flex justify-between items-center">
                    <div>
                        <p class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Sesteki Ekip</p>
                        <h3 class="text-3xl font-black text-red-600">${voiceCount}</h3>
                    </div>
                    <div class="text-3xl text-red-600/20">🎙️</div>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://discord.gg/karantina" target="_blank" class="bg-white text-black hover:bg-zinc-200 h-16 rounded-2xl flex items-center justify-center font-bold text-lg transition-all active:scale-95">
                    SUNUCUYA KATIL
                </a>
                <a href="https://discord.com/oauth2/authorize?client_id=1452704409233653962" target="_blank" class="glass border border-zinc-700 hover:border-zinc-500 h-16 rounded-2xl flex items-center justify-center font-bold text-lg transition-all active:scale-95">
                    BOTU EKLE
                </a>
            </div>

            <p class="text-center text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-semibold">
                Karantina © 2026 • Tüm Hakları Saklıdır
            </p>
        </div>
    `;
}

// Veri Çekme Motoru
async function update() {
    try {
        const res = await fetch('https://discord.com/api/guilds/1403472039670583487/widget.json');
        const data = await res.json();
        renderApp(data);
    } catch (e) {
        renderApp(); // Hata olsa da boş halini çiz
    }
}

// Başlat
update();
setInterval(update, 10000); // 10 saniyede bir otomatik güncelleme
