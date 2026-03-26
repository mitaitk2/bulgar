const app = document.getElementById('app');

// 1. Sayfa: GELİŞTİRİLMİŞ ANA SAYFA
function renderHome() {
    app.innerHTML = `
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-zinc-600 font-bold tracking-[0.5em] uppercase mb-4 text-sm">Kuralları Unuttuğun Yer</h2>
            <h1 class="soygun-logo text-7xl md:text-[9rem] font-black text-[#f23f43] glow-text mb-6 leading-none">SOYGUN</h1>
            
            <div class="w-24 h-1 bg-[#f23f43] mx-auto mb-10 rounded-full glow-text"></div>
            
            <p class="text-zinc-400 text-xl leading-relaxed mb-12 font-light">
                Sıradan sunucuları unut. Burası sadece <span class="text-white font-bold">davetlilere</span> ve <span class="text-white font-bold">sınırları zorlayanlara</span> özel bir yeraltı kulübü. Karantina dünyasının en gizli odalarına adım atmaya hazır mısın?
            </p>
            
            <div class="flex flex-col sm:flex-row justify-center gap-6">
                <a href="https://discord.gg/karantina" target="_blank" class="bg-[#f23f43] hover:bg-[#ff4d51] text-white px-12 py-5 rounded-md font-black transition-all shadow-[0_0_20px_rgba(242,63,67,0.4)] tracking-widest text-lg">VIP GİRİŞİ YAP</a>
                <button onclick="renderServer()" class="bg-transparent border border-zinc-700 hover:border-white text-zinc-300 hover:text-white px-12 py-5 rounded-md font-bold transition-all tracking-widest text-lg">İÇERİDE NE VAR?</button>
            </div>
        </div>
    `;
}

// 2. Sayfa: BOT KOMUTLARI (🤖)
function renderBot() {
    app.innerHTML = `
        <div class="max-w-5xl mx-auto w-full">
            <h2 class="soygun-logo text-4xl font-black mb-4 text-white">SOBOT <span class="text-zinc-600">SİSTEMİ</span></h2>
            <p class="text-zinc-400 mb-12 text-lg">Sunucu içindeki tüm premium özellikleri bu komutlarla yönetirsin.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="vip-card p-6 flex flex-col gap-3">
                    <div class="flex items-center gap-4">
                        <span class="command-badge">/vip-ol</span>
                    </div>
                    <p class="text-zinc-400 text-sm mt-2">Özel odalara, gizli ses kanallarına ve premium içeriklere anında erişim sağlarsın. Sadece seçkin üyeler kullanabilir.</p>
                </div>

                <div class="vip-card p-6 flex flex-col gap-3">
                    <div class="flex items-center gap-4">
                        <span class="command-badge">/gizli-oda</span>
                    </div>
                    <p class="text-zinc-400 text-sm mt-2">Sunucuda kimsenin göremediği, sadece sana ve davet ettiğin kişilere özel kilitli bir loca oluşturur.</p>
                </div>

                <div class="vip-card p-6 flex flex-col gap-3">
                    <div class="flex items-center gap-4">
                        <span class="command-badge">/profil</span>
                    </div>
                    <p class="text-zinc-400 text-sm mt-2">Mevcut itibarını, kulüp içindeki seviyeni ve sahip olduğun özel rolleri şık bir kart halinde gösterir.</p>
                </div>

                <div class="vip-card p-6 flex flex-col gap-3">
                    <div class="flex items-center gap-4">
                        <span class="command-badge">/anonim</span>
                    </div>
                    <p class="text-zinc-400 text-sm mt-2">Kimliğini tamamen gizleyerek itiraf veya özel kanallara mesaj göndermeni sağlar. İzin bırakmaz.</p>
                </div>
            </div>

            <button onclick="renderHome()" class="mt-16 text-zinc-600 hover:text-white font-bold transition-all text-sm tracking-widest uppercase flex items-center gap-2"><span>←</span> Lobiye Dön</button>
        </div>
    `;
}

// 3. Sayfa: SUNUCU TANITIMI (❓)
function renderServer() {
    app.innerHTML = `
        <div class="max-w-5xl mx-auto w-full">
            <h2 class="soygun-logo text-4xl font-black mb-4 text-white">NEDEN <span class="text-[#f23f43]">BURADASIN?</span></h2>
            <p class="text-zinc-400 mb-12 text-lg">Burası bir Discord sunucusundan çok daha fazlası. Burası gece hayatının dijital hali.</p>
            
            <div class="space-y-8">
                <div class="flex gap-6 items-start vip-card p-8">
                    <span class="text-5xl drop-shadow-lg">🍷</span>
                    <div>
                        <h3 class="text-2xl font-black text-white mb-2">Exclusive Ortam</h3>
                        <p class="text-zinc-400 leading-relaxed text-sm md:text-base">Girişteki sıkı denetim sayesinde içeride sadece kaliteli bir kitle var. Rahatsız edilmeden, elit bir sohbetin tadını çıkarabileceğin kilitli odalar seni bekliyor.</p>
                    </div>
                </div>

                <div class="flex gap-6 items-start vip-card p-8">
                    <span class="text-5xl drop-shadow-lg">🔞</span>
                    <div>
                        <h3 class="text-2xl font-black text-white mb-2">Filtresiz Eğlence</h3>
                        <p class="text-zinc-400 leading-relaxed text-sm md:text-base">Burada kurallar dışarıdaki gibi katı değil. Yetişkinlere özel içerikler, sansürsüz gece sohbetleri ve sınırların aşıldığı özel etkinlikler her gece aktif.</p>
                    </div>
                </div>

                <div class="flex gap-6 items-start vip-card p-8">
                    <span class="text-5xl drop-shadow-lg">🎲</span>
                    <div>
                        <h3 class="text-2xl font-black text-white mb-2">VIP Etkinlikler</h3>
                        <p class="text-zinc-400 leading-relaxed text-sm md:text-base">Sadece belirli rütbeye ulaşmış üyelerin katılabildiği çekilişler, özel yayınlar ve sabahlara kadar süren sesli loca muhabbetleri.</p>
                    </div>
                </div>
            </div>

            <div class="mt-16 border-t border-zinc-800 pt-10 text-center">
                <p class="text-zinc-500 italic mb-6">"İçeri girmek bir ayrıcalıktır, içeride kalmak ise bir sanattır."</p>
                <button onclick="renderHome()" class="text-zinc-600 hover:text-white font-bold transition-all text-sm tracking-widest uppercase">Lobiye Dön</button>
            </div>
        </div>
    `;
}

// Uygulama başladığında Ana Sayfayı yükle
renderHome();
