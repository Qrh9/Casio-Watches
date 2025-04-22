const watches = [{
    id: "A168WA-1",
    name: "A168WA-1",
    category: "Vintage",
    price: 29,
    popular: true,
    expensive: false,
    features: ["Water Resistant", "EL Light", "Stopwatch", "Alarm", "7-Year Battery"],
    img: "https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/A/A1/A16/A168WA-1/us-assets/A168W-1.png.transform/main-visual-sp/image.png"
}, {
    id: "DW-5600E-1V",
    name: "DW-5600E-1V",
    category: "G‑SHOCK",
    price: 99,
    popular: true,
    expensive: false,
    features: ["Shock Resistant", "200M Water Resistant", "LED Light", "Stopwatch", "Alarm"],
    img: "https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/D/DW/DW5/DW-5600E-1V/assets/DW-5600UE-1.png.transform/main-visual-sp/image.png"
}, {
    id: "EQB-1100DC-1A",
    name: "EQB-1100DC-1A",
    category: "EDIFICE",
    price: 500,
    popular: false,
    expensive: true,
    features: ["Bluetooth", "Solar Powered", "Sapphire Glass", "World Time", "Chronograph"],
    img: "https://www.casio.com/content/dam/casio/product-info/locales/intl/en/timepiece/product/watch/E/EQ/EQB/EQB-1100DC-1A/assets/EQB-1100DC-1A_Seq1.png.transform/main-visual-sp/image.png"
}, {
    id: "GM-2100MG-1A",
    name: "GM-2100MG-1A",
    category: "G‑SHOCK",
    price: 320,
    popular: false,
    expensive: true,
    features: ["Shock Resistant", "200M Water Resistant", "Dual Light", "Moon Design"],
    img: "https://www.casio.com/content/dam/casio/product-info/locales/intl/en/timepiece/product/watch/G/GM/gm2/gm-2100mg-1a/assets/GM-2100MG-1A.png.transform/main-visual-sp/image.png"
}, {
    id: "PRW-3500-1",
    name: "PRW-3500-1",
    category: "PRO TREK",
    price: 330,
    popular: false,
    expensive: true,
    features: ["Triple Sensor", "Solar Powered", "200M Water Resistant", "Compass", "Barometer/Altimeter"],
    img: "https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/P/PR/PRW/PRW-3500-1/assets/PRW-3500-1_01.png.transform/main-visual-sp/image.png"
}];

const grid = document.getElementById('watchGrid');
const search = document.getElementById('search');
const buttons = document.querySelectorAll('nav button');

function render(list) {
    grid.innerHTML = '';
    list.sort((a, b) => a.name.localeCompare(b.name));
    list.forEach(w => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img loading="lazy" src="${w.img}" alt="${w.name}"><div class="info"><h3>${w.name}</h3><p class="price">$${w.price}</p><p>${w.features.join(" • ")}</p></div>`;
        grid.appendChild(card);
    });
}

let currentFilter = 'all';

function applyFilters() {
    let list = [...watches];
    if (currentFilter === 'popular') list = list.filter(w => w.popular);
    if (currentFilter === 'expensive') list = list.filter(w => w.expensive);
    const q = search.value.trim().toLowerCase();
    if (q) list = list.filter(w => w.name.toLowerCase().includes(q) || w.category.toLowerCase().includes(q));
    render(list);
}

buttons.forEach(b => {
    b.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        b.classList.add('active');
        currentFilter = b.dataset.filter;
        applyFilters();
    });
});

search.addEventListener('input', applyFilters);
applyFilters();