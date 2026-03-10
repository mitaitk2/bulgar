const app = document.getElementById('app');

// Ana Sayfa
function renderHome() {
    app.innerHTML = `
        <div class="flex flex-col items-center justify-center min-h-screen text-center p-6">
            <h1 class="text-8xl font-black italic tracking-tighter">B U L G A R</h1>
            <div class="flex gap-4 mt-8">
                <button onclick="renderAnnouncements()" class="px-8 py-3 bg-red-600 rounded-full font-bold">DUYURULAR</button>
                <a href="https://discord.gg/bulgar" class="px-8 py-3 border border-zinc-700 rounded-full">SUNUCU</a>
            </div>
        </div>
    `;
}

// Duyurular Sayfası
async function renderAnnouncements() {
    const res = await fetch('duyurular.json');
    const data = await res.json();

    app.innerHTML = `
        <div class="max-w-xl mx-auto p-10">
            <h2 class="text-3xl font-black mb-6 border-b border-red-600 pb-2">DUYURULAR</h2>
            <div class="space-y-4">
                ${data.map(a => `
                    <div class="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                        <p class="text-xs text-red-500 font-bold">${a.tarih} | ${a.yazar}</p>
                        <p class="mt-2 text-md">${a.icerik}</p>
                    </div>
                `).join('')}
            </div>
            <button onclick="renderHome()" class="mt-8 text-zinc-500">← Geri Dön</button>
        </div>
    `;
}

renderHome();
