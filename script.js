/* =========================================
   نور قرآن
   Quran Reading Website
========================================= */


/* -----------------------------
   اطلاعات ۱۱۴ سوره
----------------------------- */

const surahs = [
    ["الفاتحة", 7, "مکی"],
    ["البقرة", 286, "مدنی"],
    ["آل عمران", 200, "مدنی"],
    ["النساء", 176, "مدنی"],
    ["المائدة", 120, "مدنی"],
    ["الأنعام", 165, "مکی"],
    ["الأعراف", 206, "مکی"],
    ["الأنفال", 75, "مدنی"],
    ["التوبة", 129, "مدنی"],
    ["يونس", 109, "مکی"],
    ["هود", 123, "مکی"],
    ["يوسف", 111, "مکی"],
    ["الرعد", 43, "مدنی"],
    ["إبراهيم", 52, "مکی"],
    ["الحجر", 99, "مکی"],
    ["النحل", 128, "مکی"],
    ["الإسراء", 111, "مکی"],
    ["الكهف", 110, "مکی"],
    ["مريم", 98, "مکی"],
    ["طه", 135, "مکی"],
    ["الأنبياء", 112, "مکی"],
    ["الحج", 78, "مدنی"],
    ["المؤمنون", 118, "مکی"],
    ["النور", 64, "مدنی"],
    ["الفرقان", 77, "مکی"],
    ["الشعراء", 227, "مکی"],
    ["النمل", 93, "مکی"],
    ["القصص", 88, "مکی"],
    ["العنكبوت", 69, "مکی"],
    ["الروم", 60, "مکی"],
    ["لقمان", 34, "مکی"],
    ["السجدة", 30, "مکی"],
    ["الأحزاب", 73, "مدنی"],
    ["سبأ", 54, "مکی"],
    ["فاطر", 45, "مکی"],
    ["يس", 83, "مکی"],
    ["الصافات", 182, "مکی"],
    ["ص", 88, "مکی"],
    ["الزمر", 75, "مکی"],
    ["غافر", 85, "مکی"],
    ["فصلت", 54, "مکی"],
    ["الشورى", 53, "مکی"],
    ["الزخرف", 89, "مکی"],
    ["الدخان", 59, "مکی"],
    ["الجاثية", 37, "مکی"],
    ["الأحقاف", 35, "مکی"],
    ["محمد", 38, "مدنی"],
    ["الفتح", 29, "مدنی"],
    ["الحجرات", 18, "مدنی"],
    ["ق", 45, "مکی"],
    ["الذاريات", 60, "مکی"],
    ["الطور", 49, "مکی"],
    ["النجم", 62, "مکی"],
    ["القمر", 55, "مکی"],
    ["الرحمن", 78, "مدنی"],
    ["الواقعة", 96, "مکی"],
    ["الحديد", 29, "مدنی"],
    ["المجادلة", 22, "مدنی"],
    ["الحشر", 24, "مدنی"],
    ["الممتحنة", 13, "مدنی"],
    ["الصف", 14, "مدنی"],
    ["الجمعة", 11, "مدنی"],
    ["المنافقون", 11, "مدنی"],
    ["التغابن", 18, "مدنی"],
    ["الطلاق", 12, "مدنی"],
    ["التحريم", 12, "مدنی"],
    ["الملك", 30, "مکی"],
    ["القلم", 52, "مکی"],
    ["الحاقة", 52, "مکی"],
    ["المعارج", 44, "مکی"],
    ["نوح", 28, "مکی"],
    ["الجن", 28, "مکی"],
    ["المزمل", 20, "مکی"],
    ["المدثر", 56, "مکی"],
    ["القيامة", 40, "مکی"],
    ["الإنسان", 31, "مدنی"],
    ["المرسلات", 50, "مکی"],
    ["النبأ", 40, "مکی"],
    ["النازعات", 46, "مکی"],
    ["عبس", 42, "مکی"],
    ["التكوير", 29, "مکی"],
    ["الانفطار", 19, "مکی"],
    ["المطففين", 36, "مکی"],
    ["الانشقاق", 25, "مکی"],
    ["البروج", 22, "مکی"],
    ["الطارق", 17, "مکی"],
    ["الأعلى", 19, "مکی"],
    ["الغاشية", 26, "مکی"],
    ["الفجر", 30, "مکی"],
    ["البلد", 20, "مکی"],
    ["الشمس", 15, "مکی"],
    ["الليل", 21, "مکی"],
    ["الضحى", 11, "مکی"],
    ["الشرح", 8, "مکی"],
    ["التين", 8, "مکی"],
    ["العلق", 19, "مکی"],
    ["القدر", 5, "مکی"],
    ["البينة", 8, "مدنی"],
    ["الزلزلة", 8, "مدنی"],
    ["العاديات", 11, "مکی"],
    ["القارعة", 11, "مکی"],
    ["التكاثر", 8, "مکی"],
    ["العصر", 3, "مکی"],
    ["الهمزة", 9, "مکی"],
    ["الفيل", 5, "مکی"],
    ["قريش", 4, "مکی"],
    ["الماعون", 7, "مکی"],
    ["الكوثر", 3, "مکی"],
    ["الكافرون", 6, "مکی"],
    ["النصر", 3, "مدنی"],
    ["المسد", 5, "مکی"],
    ["الإخلاص", 4, "مکی"],
    ["الفلق", 5, "مکی"],
    ["الناس", 6, "مکی"]
];


/* -----------------------------
   عناصر صفحه
----------------------------- */

const homePage = document.getElementById("homePage");
const surahPage = document.getElementById("surahPage");

const surahList = document.getElementById("surahList");
const searchInput = document.getElementById("searchInput");

const verses = document.getElementById("verses");
const loading = document.getElementById("loading");

const surahName = document.getElementById("surahName");
const surahMeta = document.getElementById("surahMeta");

const headerSurahName =
    document.getElementById("headerSurahName");

const headerSurahNumber =
    document.getElementById("headerSurahNumber");

const countNumber =
    document.getElementById("countNumber");

const readButton =
    document.getElementById("readButton");

const resetButton =
    document.getElementById("resetButton");

const backButton =
    document.getElementById("backButton");

const toast =
    document.getElementById("toast");


/* -----------------------------
   وضعیت فعلی
----------------------------- */

let currentSurah = null;


/* -----------------------------
   تبدیل اعداد انگلیسی به فارسی
----------------------------- */

function toPersianNumber(number) {

    return String(number)
        .replace(/\d/g, digit =>
            "۰۱۲۳۴۵۶۷۸۹"[digit]
        );

}


/* -----------------------------
   ساخت لیست سوره‌ها
----------------------------- */

function renderSurahs(filter = "") {

    surahList.innerHTML = "";

    const normalizedFilter =
        filter.trim().toLowerCase();


    surahs.forEach((surah, index) => {

        const number = index + 1;

        const name = surah[0];

        const ayahCount = surah[1];

        const revelation = surah[2];


        if (
            normalizedFilter &&
            !name
                .toLowerCase()
                .includes(normalizedFilter)
        ) {
            return;
        }


        const item =
            document.createElement("div");

        item.className = "surah-item";


        const savedCount =
            getCount(number);


        item.innerHTML = `

            <div class="surah-number">
                <span>${toPersianNumber(number)}</span>
            </div>

            <div class="surah-info">

                <h3>
                    ${name}
                </h3>

                <p>
                    ${toPersianNumber(ayahCount)}
                    آیه • ${revelation}
                </p>

            </div>

            ${
                savedCount > 0
                ?
                `<div class="read-count">
                    ${toPersianNumber(savedCount)}
                    بار
                </div>`
                :
                ""
            }

        `;


        item.addEventListener(
            "click",
            () => openSurah(number)
        );


        surahList.appendChild(item);

    });


    if (!surahList.children.length) {

        surahList.innerHTML = `

            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:40px;
                color:#e8ddc4;
            ">
                سوره‌ای پیدا نشد.
            </div>

        `;

    }

}


/* -----------------------------
   localStorage
----------------------------- */

function getCount(surahNumber) {

    return Number(
        localStorage.getItem(
            `quran_count_${surahNumber}`
        )
    ) || 0;

}


function saveCount(
    surahNumber,
    count
) {

    localStorage.setItem(
        `quran_count_${surahNumber}`,
        count
    );

}


/* -----------------------------
   نمایش شمارنده
----------------------------- */

function updateCounter() {

    if (!currentSurah) return;

    const count =
        getCount(currentSurah);

    countNumber.textContent =
        toPersianNumber(count);

}


/* -----------------------------
   ثبت یک قرائت
----------------------------- */

readButton.addEventListener(
    "click",
    () => {

        if (!currentSurah) return;


        let count =
            getCount(currentSurah);


        count++;


        saveCount(
            currentSurah,
            count
        );


        updateCounter();

        showToast();


        // لیست صفحه اصلی هم به‌روز شود
        renderSurahs(
            searchInput.value
        );

    }
);


/* -----------------------------
   ریست شمارنده
----------------------------- */

resetButton.addEventListener(
    "click",
    () => {

        if (!currentSurah) return;


        const confirmed =
            confirm(
                "آیا مطمئنی می‌خواهی امتیاز این سوره را صفر کنی؟"
            );


        if (!confirmed) return;


        saveCount(
            currentSurah,
            0
        );


        updateCounter();


        renderSurahs(
            searchInput.value
        );

    }
);


/* -----------------------------
   Toast
----------------------------- */

let toastTimer;


function showToast() {

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () => {
                toast.classList.remove("show");
            },
            1200
        );

}


/* -----------------------------
   باز کردن سوره
----------------------------- */

async function openSurah(number) {

    currentSurah = number;


    const data =
        surahs[number - 1];


    surahName.textContent =
        data[0];


    headerSurahName.textContent =
        data[0];


    headerSurahNumber.textContent =
        toPersianNumber(number);


    surahMeta.textContent =
        `${toPersianNumber(data[1])} آیه • ${data[2]}`;


    updateCounter();


    homePage.classList.remove("active");

    surahPage.classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });


    await loadQuran(number);

}


/* -----------------------------
   دریافت متن قرآن
----------------------------- */

/*
    منبع داده:
    QuranOnlineRead

    هر سوره:
    /api/surah/1.json
    /api/surah/2.json
    ...
*/

async function loadQuran(number) {

    loading.style.display = "block";

    verses.innerHTML = "";


    try {

        const response =
            await fetch(
                `https://quranonlineread.com/api/surah/${number}.json`
            );


        if (!response.ok) {
            throw new Error(
                "خطا در دریافت متن"
            );
        }


        const data =
            await response.json();


        let ayahs =
            data.verses ||
            data.data ||
            data;


        if (!Array.isArray(ayahs)) {

            throw new Error(
                "ساختار اطلاعات نامعتبر است"
            );

        }


        loading.style.display = "none";


        ayahs.forEach(
            (ayah, index) => {

                const text =
                    ayah.arabic ||
                    ayah.text ||
                    ayah.ar ||
                    "";


                const verse =
                    document.createElement("div");


                verse.className =
                    "verse";


                verse.innerHTML = `

                    ${escapeHTML(text)}

                    <span class="ayah-number">
                        ${toPersianNumber(
                            ayah.numberInSurah ||
                            ayah.verse ||
                            index + 1
                        )}
                    </span>

                `;


                verses.appendChild(
                    verse
                );

            }
        );


    } catch (error) {

        console.error(error);


        loading.style.display = "none";


        verses.innerHTML = `

            <div style="
                text-align:center;
                padding:40px 10px;
                line-height:2;
                color:#6c6252;
                font-family:Vazirmatn,sans-serif;
                font-size:15px;
            ">

                <div style="
                    font-size:35px;
                    margin-bottom:15px;
                ">
                    ⚠
                </div>

                متن سوره دریافت نشد.

                <br>

                لطفاً اتصال اینترنت را بررسی کن
                و دوباره وارد سوره شو.

            </div>

        `;

    }

}


/* -----------------------------
   جلوگیری از HTML ناخواسته
----------------------------- */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* -----------------------------
   بازگشت
----------------------------- */

backButton.addEventListener(
    "click",
    () => {

        surahPage.classList.remove(
            "active"
        );

        homePage.classList.add(
            "active"
        );


        currentSurah = null;


        renderSurahs(
            searchInput.value
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* -----------------------------
   جستجو
----------------------------- */

searchInput.addEventListener(
    "input",
    () => {

        renderSurahs(
            searchInput.value
        );

    }
);


/* -----------------------------
   شروع سایت
----------------------------- */

renderSurahs();