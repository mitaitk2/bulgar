const app = document.getElementById('app');

// 1. Sayfa: ANA GİRİŞ (Yeraltı Teması ve Comeback Vurgusu)
function renderHome() {
    app.innerHTML = `
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-zinc-600 font-bold tracking-[0.5em] uppercase mb-4 text-sm">#SIFIRDAN BAŞLIYORUZ</h2>
            <h1 class="soygun-logo text-7xl md:text-[9rem] font-black text-[#f23f43] glow-text mb-6 leading-none">SOYGUN</h1>
            
            <div class="w-24 h-1 bg-[#f23f43] mx-auto mb-10 rounded-full glow-text"></div>
            
            <p class="text-zinc-400 text-xl leading-relaxed mb-6 font-light">
                Kural yok. Sınır yok. Filtre yok. Sadece saf kaos ve itaatsizlik var. 
            </p>
            <p class="text-white text-lg font-bold mb-12 bg-red-900/20 inline-block px-6 py-2 rounded border border-red-900/50">
                ⚠️ UYARI: 1-2 hafta içinde FULL FOCUS bomba gibi dönüyoruz. Yerini al.
            </p>
            
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <a href="https://discord.gg/karantina" target="_blank" class="bg-[#f23f43] hover:bg-[#ff4d51] text-white px-12 py-5 rounded-md font-black transition-all shadow-[0_0_20px_rgba(242,63,67,0.4)] tracking-widest text-lg">İTAAT ET VE KATIL</a>
                <button onclick="renderServer()" class="bg-transparent border border-zinc-700 hover:border-white text-zinc-300 hover:text-white px-12 py-5 rounded-md font-bold transition-all tracking-widest text-lg">İÇERİDE NE VAR?</button>
            </div>
        </div>
    `;
}

// 2. Sayfa: BOT KOMUTLARI (🤖) - Kuralsız Ortama Uygun
function renderBot() {
    app.innerHTML = `
        <div class="max-w-5xl mx-auto w-full">
            <h2 class="soygun-logo text-4xl font-black mb-4 text-white">SOBOT <span class="text-zinc-600">SİSTEMİ</span></h2>
            <p class="text-zinc-400 mb-12 text-lg">Bu kaos ortamını yöneten tek mekanizma. Kuralları bot yazar.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="vip-card p-6 flex flex-col gap-3">
                    <div class="flex items-center gap-4">
                        <span class="command-badge bg-zinc-800 text-red-500">/anonim</span>
                    </div>
                    <p class="text-zinc-400 text-sm mt-2">Kimliğini tamamen gizleyerek kanala mesaj atarsın. Yakalanma riski sıfır, iz bırakmaz.</p>
                </div>

                <div class="vip-card p-6 flex flex-col gap-3">
                    <div class="flex items-center gap-4">
                        <span class="command-badge bg-zinc-800 text-red-500">/bomba-duyuru</span>
                    </div>
                    <p class="text-zinc-400 text-sm mt-2">Sunucudaki herkesi ayağa kaldıracak o büyük haberleri ve güncellemeleri anında patlatır.</p>
                </div>

                <div class="vip-card p-6 flex flex-col gap-3">
                    <div class="flex items-center gap-4">
                        <span class="command-badge bg-zinc-800 text-red-500">/temizle</span>
                    </div>
                    <p class="text-zinc-400 text-sm mt-2">Arkasında kanıt bırakmak istemeyenler için. Belirttiğin sayıdaki mesajı saniyesinde yeryüzünden siler.</p>
                </div>

                <div class="vip-card p-6 flex flex-col gap-3">
                    <div class="flex items-center gap-4">
                        <span class="command-badge bg-zinc-800 text-red-500">/durum</span>
                    </div>
                    <p class="text-zinc-400 text-sm mt-2">Comeback sürecinin ne aşamada olduğunu, sunucunun aktiflik durumunu canlı olarak gösterir.</p>
                </div>
            </div>

            <button onclick="renderHome()" class="mt-16 text-zinc-600 hover:text-white font-bold transition-all text-sm tracking-widest uppercase flex items-center gap-2"><span>←</span> Lobiye Dön</button>
        </div>
    `;
}

// 3. Sayfa: SUNUCU TANITIMI (❓) - Anarşi ve Comeback
function renderServer() {
    app.innerHTML = `
        <div class="max-w-5xl mx-auto w-full">
            <h2 class="soygun-logo text-4xl font-black mb-4 text-white">NEDEN <span class="text-[#f23f43]">BURADASIN?</span></h2>
            <p class="text-zinc-400 mb-12 text-lg">Çünkü diğer sunucuların sahte kurallarından sıkıldın.</p>
            
            <div class="space-y-8">
                <div class="flex gap-6 items-start vip-card p-8">
                    <span class="text-5xl drop-shadow-lg">🔥</span>
                    <div>
                        <h3 class="text-2xl font-black text-white mb-2">Sıfır Kural, Saf Kaos</h3>
                        <p class="text-zinc-400 leading-relaxed text-sm md:text-base">Burada moderatör tribi yok, boş kurallar yok. Gelmeye hükümlüsün ve içeride filtre olmadan takılabilirsin.</p>
                    </div>
                </div>

                <div class="flex gap-6 items-start vip-card p-8">
                    <span class="text-5xl drop-shadow-lg">🧨</span>
                    <div>
                        <h3 class="text-2xl font-black text-white mb-2">Büyük Comeback</h3>
                        <p class="text-zinc-400 leading-relaxed text-sm md:text-base">Kısa bir süreliğine kapıları kapattık ama 1-2 hafta içinde çok daha sert, çok daha büyük bir şekilde dönüyoruz. Hazırlıklı ol.</p>
                    </div>
                </div>

                <div class="flex gap-6 items-start vip-card p-8">
                    <span class="text-5xl drop-shadow-lg">👁️</span>
                    <div>
                        <h3 class="text-2xl font-black text-white mb-2">Gözler Üzerimizde</h3>
                        <p class="text-zinc-400 leading-relaxed text-sm md:text-base">Burada yaşananlar burada kalmaz, yankı yapar. Adamlarınızı toplayın, çünkü geri döndüğümüzde taş üstünde taş kalmayacak.</p>
                    </div>
                </div>
            </div>

            <div class="mt-16 border-t border-zinc-800 pt-10 text-center">
                <p class="text-zinc-500 font-bold mb-6">"İTAAT EDECEKSİNİZ."</p>
                <button onclick="renderHome()" class="text-zinc-600 hover:text-white font-bold transition-all text-sm tracking-widest uppercase">Lobiye Dön</button>
            </div>
        </div>
    `;
}

// Uygulama başladığında Ana Sayfayı yükle
renderHome();
