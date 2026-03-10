/* B U L G A R V4.0 - OFFICIAL SYSTEM */

const config = {
    brandName: "B U L G A R",
    announcements: [
        { yazar: "B U L G A R", icerik: "Sistem tamamen yenilendi. Güç artık elimizde." },
        { yazar: "Yönetim", icerik: "Yeni duyurlar yayınlandı, duyuru panelini kontrol edin." }
    ]
};

const app = document.getElementById('app');

// 1. ANA SAYFA (B U L G A R Karşılama)
function renderHome() {
    app.innerHTML = `
        <div class="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div class="z-10 text-center max-w-4xl animate-in zoom-in duration-1000">
                <span class="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-zinc-400 text-[10px] font-bold tracking-[0.5em] uppercase">The Legacy of Power</span>
                
                <h1 class="text-7xl md:text-[12rem] font-black mt-12 tracking-[-0.05em] leading-none select-none">
                    ${config.brandName.split(' ').join('<span class="text-red-600"> </span>')}
                </h1>
                
                <p class="text-zinc-500 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed font-medium">
                    Düzenin yeniden yazıldığı, sınırların zorlandığı tek nokta. <br>
                    <span class="text-zinc-300">Hoş geldin, burası son durak.</span>
                </p>

                <div class="flex flex-col md:flex-row gap-5 mt-16 justify-center items-center">
                    <a href="https://discord.gg/karantina" target="_blank" class="w-full md:w-auto px-12 py-5 bg-white text-black rounded-full hover:bg-zinc-200 transition-all font-extrabold text-sm tracking-widest transform hover:scale-105 active:scale-95 shadow-2xl shadow-white/10">
                        Sistem
                    </a>
                    <button onclick="navigate('duyurular')" class="w-full md:w-auto px-12 py-5 bg-transparent border border-zinc-800 text-zinc-400 rounded-full hover:border-white hover:text-white transition-all font-extrabold text-sm tracking-widest uppercase">
                        Duyurular
                    </button>
                </div>
            </div>

            <div class="absolute bottom-12 flex flex-col items-center gap-4">
                <div class="w-px h-12 bg-gradient-to-b from-transparent to-zinc-800"></div>
                <p class="text-zinc-800 text-[9px] tracking-[1em] uppercase font-black">
                    OFFICIAL ${config.brandName} PROJECT
                </p>
            </div>
        </div>
    `;
}

// 2. DUYURULAR SAYFASI
function renderAnnouncements() {
    app.innerHTML = `
        <div class="min-h-screen p-8 md:p-24 animate-in slide-in-from-bottom duration-700 bg-[#030303]">
            <div class="max-w-5xl mx-auto">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                    <div>
                        <span class="text-red-600 text-xs font-black tracking-[0.4em] uppercase">Arşiv & Haberler</span>
                        <h2 class="text-6xl font-black mt-4 tracking-tighter italic uppercase text-white">${config.brandName}</h2>
                    </div>
                    <button onclick="navigate('home')" class="group flex items-center gap-3 text-zinc-500 hover:text-white transition-all">
                        <span class="text-xs font-bold uppercase tracking-widest">Geri Dön</span>
                        <div class="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-white">→</div>
                    </button>
                </div>

                <div class="grid gap-6">
                    ${config.announcements.map(a => `
                        <div class="group bg-[#080808] border border-zinc-900 p-10 rounded-[2.5rem] hover:bg-zinc-900/30 transition-all duration-500">
                            <div class="flex justify-between items-center mb-6">
                                <div class="flex items-center gap-3">
                                    <div class="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                                    <span class="text-white font-bold text-xs uppercase tracking-widest">${a.yazar}</span>
                                </div>
                                <span class="text-zinc-700 text-[10px] font-bold">${a.tarih}</span>
                            </div>
                            <p class="text-zinc-400 text-2xl font-medium leading-snug group-hover:text-zinc-100 transition-colors">"${a.icerik}"</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// 3. NAVİGASYON
function navigate(page) {
    window.location.hash = page;
    if(page === 'announcements') renderAnnouncements();
    else renderHome();
}

window.onhashchange = () => {
    const hash = window.location.hash.replace('#', '');
    navigate(hash);
};

window.onload = () => {
    const hash = window.location.hash.replace('#', '');
    navigate(hash || 'home');
};
