const app = document.getElementById('app');

// 1. Sayfa: Ana Giriş (EnİyiSunucu)
function renderHome() {
    app.innerHTML = `
        <div class="flex flex-col items-center justify-center h-[70vh]">
            <h1 class="soygun-title text-8xl font-black italic text-[#f23f43] drop-shadow-2xl mb-2">SOYGUN</h1>
            <p class="text-zinc-500 text-lg font-bold tracking-widest uppercase mb-10">Karantina Operasyon Merkezi</p>
            <div class="max-w-xl text-center text-zinc-300 leading-relaxed mb-12">
                "Soygun Sunucusu'nun resmi operasyon paneline hoş geldiniz. Burası sunucu üyelerinin ve bot sistemlerinin kalbidir. Sisteme erişmek ve operasyonun bir parçası olmak için giriş yapın."
            </div>
            <div class="flex gap-6">
                <a href="https://discord.gg/karantina" target="_blank" class="bg-[#f23f43] hover:bg-[#d8363a] text-white px-10 py-4 rounded-md font-black transition-all transform hover:scale-105">SUNUCUYA KATIL</a>
                <button onclick="renderBot()" class="bg-transparent border-2 border-zinc-700 hover:border-zinc-500 text-white px-10 py-4 rounded-md font-black transition-all">SİSTEMİ AÇ</button>
            </div>
        </div>
    `;
}

function renderBot() {
    app.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <h2 class="soygun-title text-3xl font-black mb-10 border-b border-[#f23f43] pb-4 text-[#f23f43]">SOYGUN OPERASYON BOTU (SOBOT)</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="discord-card p-6 flex gap-4">
                    <span class="text-4xl">⚡</span>
                    <div>
                        <h3 class="font-bold text-lg text-white">Yüksek Hız</h3>
                        <p class="text-sm text-zinc-400 mt-1">Operasyonel komutları saniyesinde işler ve siteye iletir.</p>
                    </div>
                </div>

                <div class="discord-card p-6 flex gap-4">
                    <span class="text-4xl">🛠️</span>
                    <div>
                        <h3 class="font-bold text-lg text-white">Otonom Kontrol</h3>
                        <p class="text-sm text-zinc-400 mt-1">Sunucu içindeki işlemleri otomatik yönetir, insan hatasını sıfırlar.</p>
                    </div>
                </div>

                <div class="discord-card p-6 flex gap-4">
                    <span class="text-4xl">🛡️</span>
                    <div>
                        <h3 class="font-bold text-lg text-white">Sunucu Koruması</h3>
                        <p class="text-sm text-zinc-400 mt-1">Sunucuya zarar verecek eylemleri anında engeller ve operatörleri uyarır.</p>
                    </div>
                </div>

                <div class="discord-card p-6 flex gap-4">
                    <span class="text-4xl">✅</span>
                    <div>
                        <h3 class="font-bold text-lg text-white">Basit Kullanım</h3>
                        <p class="text-sm text-zinc-400 mt-1">`/sobot` komutlarıyla her şey parmaklarınızın ucunda.</p>
                    </div>
                </div>
            </div>

            <button onclick="renderHome()" class="mt-12 text-zinc-600 hover:text-red-500 font-bold transition-all uppercase text-xs tracking-widest">← Merkeze Dön</button>
        </div>
    `;
}

// 3. Sayfa: Yardım / Nasıl Çalışır? (Soru İşareti)
function renderHelp() {
    app.innerHTML = `
        <div class="max-w-3xl mx-auto">
            <h2 class="soygun-title text-3xl font-black mb-10 border-b border-[#f23f43] pb-4 text-[#f23f43]">OPERASYON EL KİTABI</h2>
            
            <div class="space-y-6 text-zinc-300 leading-relaxed">
                <p><strong>Adım 1: Sunucuya Erişin</strong></p>
                <p class="text-sm text-zinc-400 ml-4">Ana sayfadaki "SUNUCUYA KATIL" butonunu kullanarak Karantina Sunucusu'na giriş yapın.</p>
                
                <p><strong>Adım 2: SOBOT'u Keşfedin</strong></p>
                <p class="text-sm text-zinc-400 ml-4">Bot sekmesindeki (🤖) özellikleri inceleyin ve sunucuda `/help so_bot` yazarak komutları öğrenin.</p>
                
                <p><strong>Adım 3: Operasyona Başlayın</strong></p>
                <p class="text-sm text-zinc-400 ml-4">Sunucu içindeki görevleri tamamlayarak ve SOBOT'un komutlarını kullanarak rütbenizi yükseltin.</p>
            </div>

            <button onclick="renderHome()" class="mt-12 text-zinc-600 hover:text-red-500 font-bold transition-all uppercase text-xs tracking-widest">← Merkeze Dön</button>
        </div>
    `;
}

// Başlangıçta Ana Sayfayı Göster
renderHome();
