const questions = [
    // HTML
    {
        q: 'تفاوت اصلی div و span چیست؟',
        options: ['هر دو inline هستند', 'div block و span inline است', 'هر دو block هستند', 'فقط در CSS فرق دارند'],
        answer: 1
    },
    {
        q: 'مزیت تگ‌های Semantic چیست؟',
        options: ['بهبود SEO و دسترسی‌پذیری', 'سریع‌تر شدن سایت', 'زیبایی بیشتر', 'کاهش حجم کد'],
        answer: 0
    },
    {
        q: 'تفاوت id و class چیست؟',
        options: ['class یکتا است', 'هیچ تفاوتی ندارند', 'id یکتا است', 'فقط در JS استفاده می‌شوند'],
        answer: 2
    },
    {
        q: 'ویژگی alt در <img> چه کاربردی دارد؟',
        options: ['لینک دادن تصویر', 'توضیح تصویر برای دسترسی‌پذیری', 'تغییر سایز تصویر', 'افکت دادن به تصویر'],
        answer: 1
    },
    {
        q: 'تفاوت section و article چیست؟',
        options: ['article فقط برای بلاگ است', 'article مستقل‌تر است', 'هیچ تفاوتی ندارند', 'section فقط برای متن است'],
        answer: 1
    },
    {
        q: 'چرا استفاده از چند h1 مجاز است؟',
        options: ['HTML5 اجازه می‌دهد در بخش‌های مختلف استفاده شود', 'فقط در موبایل', 'باعث SEO بهتر می‌شود', 'توصیه نمی‌شود'],
        answer: 0
    },
    {
        q: 'تفاوت strong و b چیست؟',
        options: ['strong معنایی است و اهمیت دارد', 'هیچ تفاوتی ندارند', 'b معنایی است', 'فقط ظاهر فرق دارد'],
        answer: 0
    },
    {
        q: 'تگ meta viewport چه کاری انجام می‌دهد؟',
        options: ['ریسپانسیو کردن صفحه', 'افزایش سرعت', 'تغییر رنگ سایت', 'امنیت'],
        answer: 0
    },
    {
        q: 'تفاوت inline و block چیست؟',
        options: ['inline عرض می‌گیرد', 'block فقط متن است', 'block کل عرض را می‌گیرد', 'inline ارتفاع دارد'],
        answer: 2
    },
    {
        q: 'ویژگی required چه کاری انجام می‌دهد؟',
        options: ['فرم را ارسال می‌کند', 'مقدار پیش‌فرض می‌دهد', 'فیلد را اجباری می‌کند', 'استایل می‌دهد'],
        answer: 2
    },
    {
        q: 'تفاوت a و link چیست؟',
        options: ['a داخل صفحه، link برای فایل‌های خارجی است', 'هر دو لینک هستند', 'link کلیک‌پذیر است', 'فرقی ندارند'],
        answer: 0
    },
    {
        q: 'تفاوت placeholder و label چیست؟',
        options: ['placeholder همیشه دیده می‌شود', 'label فقط استایل است', 'هر دو یکی هستند', 'label با کلیک فوکوس می‌دهد'],
        answer: 3
    },
    {
        q: 'چرا نباید فقط از div استفاده کنیم؟',
        options: ['خوانایی و دسترسی‌پذیری کم می‌شود', 'CSS کار نمی‌کند', 'سرعت کم می‌شود', 'باعث خطا می‌شود'],
        answer: 0
    },
    {
        q: 'تفاوت em و rem چیست؟',
        options: ['rem وابسته به والد است', 'هیچ تفاوتی ندارند', 'em وابسته به والد است، rem به ریشه', 'فقط برای فونت‌اند'],
        answer: 2
    },
    {
        q: 'چرا doctype مهم است؟',
        options: ['SEO', 'مرورگر را در حالت استاندارد قرار می‌دهد', 'امنیت', 'استایل می‌دهد'],
        answer: 1
    },
    {
        q: 'کاربرد figure چیست؟',
        options: ['لینک دادن', 'استایل دادن', 'نمایش محتوای مستقل مثل تصویر', 'فرم'],
        answer: 2
    },
    {
        q: 'تفاوت input text و textarea چیست؟',
        options: ['textarea چند خطی است', 'هیچ تفاوتی ندارند', 'input چند خطی است', 'فقط CSS فرق دارد'],
        answer: 0
    },
    {
        q: 'تگ nav چه زمانی استفاده می‌شود؟',
        options: ['لینک‌های ناوبری سایت', 'فرم', 'تصویر', 'متن ساده'],
        answer: 0
    },
    {
        q: 'چرا ترتیب تگ‌ها مهم است؟',
        options: ['روی دسترسی‌پذیری و SEO اثر دارد', 'فقط برای CSS', 'روی سرعت', 'اهمیتی ندارد'],
        answer: 0
    },
    {
        q: 'aria-label چه کاربردی دارد؟',
        options: ['دسترسی‌پذیری برای اسکرین‌ریدرها', 'استایل', 'SEO', 'انیمیشن'],
        answer: 0
    },

    // CSS
    {
        q: 'تفاوت class و id در CSS چیست؟',
        options: ['id یکتا است و اولویت بیشتری دارد', 'هیچ تفاوتی ندارند', 'class یکتا است', 'فقط در HTML فرق دارند'],
        answer: 0
    },
    {
        q: 'Box Model شامل چیست؟',
        options: ['width, height', 'flex', 'margin, padding, border, content', 'color, font'],
        answer: 2
    },
    {
        q: 'تفاوت margin و padding چیست؟',
        options: ['padding بیرونی است', 'margin بیرونی، padding داخلی است', 'هر دو یکی‌اند', 'فقط اسم فرق دارد'],
        answer: 1
    },
    {
        q: 'تفاوت display:none و visibility:hidden چیست؟',
        options: ['hidden فضا را نگه می‌دارد', 'none فضا را نگه می‌دارد', 'فقط رنگ فرق دارد', 'هیچ'],
        answer: 0
    },
    {
        q: 'Flexbox چیست؟',
        options: ['برای رنگ', 'برای چیدمان یک‌بعدی المان‌ها', 'فقط موبایل', 'برای انیمیشن'],
        answer: 1
    },
    {
        q: 'تفاوت justify-content و align-items چیست؟',
        options: ['یکی افقی و یکی عمودی (بسته به جهت)', 'هیچ', 'فقط اسم فرق دارد', 'فقط در grid'],
        answer: 0
    },
    {
        q: 'تفاوت absolute و relative چیست؟',
        options: ['absolute نسبت به نزدیک‌ترین والد position‌دار است', 'relative نسبت به صفحه است', 'هیچ', 'هر دو یکی‌اند'],
        answer: 0
    },
    {
        q: 'z-index چه زمانی کار می‌کند؟',
        options: ['وقتی position داشته باشد', 'همیشه', 'فقط flex', 'فقط grid'],
        answer: 0
    },
    {
        q: 'inline-block چه مزیتی دارد؟',
        options: ['هم عرض می‌گیرد هم کنار هم می‌آید', 'فقط عمودی', 'فقط افقی', 'عرض نمی‌گیرد'],
        answer: 0
    },
    {
        q: 'کدام واحد نسبی است؟',
        options: ['%', 'px', 'cm', 'pt'],
        answer: 0
    },
    {
        q: '!important چه کاری می‌کند؟',
        options: ['خطا را رفع می‌کند', 'اولویت را بالا می‌برد', 'حذف CSS', 'کد را سریع‌تر می‌کند'],
        answer: 1
    },
    {
        q: 'تفاوت opacity و rgba چیست؟',
        options: ['opacity روی کل المان اثر دارد', 'rgba روی کل صفحه است', 'هیچ', 'فقط اسم فرق دارد'],
        answer: 0
    },
    {
        q: 'Media Query چیست؟',
        options: ['ریسپانسیو کردن صفحه', 'انیمیشن', 'امنیت', 'فونت'],
        answer: 0
    },
    {
        q: 'تفاوت rem و % چیست؟',
        options: ['rem وابسته به ریشه، % وابسته به والد است', 'هیچ', '% مطلق است', 'فقط فونت'],
        answer: 0
    },
    {
        q: 'تفاوت max-width و width چیست؟',
        options: ['max-width اجازه کوچکتر شدن می‌دهد', 'width ریسپانسیو است', 'هیچ', 'فقط اسم فرق دارد'],
        answer: 0
    },
    {
        q: 'overflow:hidden چه کاری می‌کند؟',
        options: ['اسکرول می‌دهد', 'بزرگ می‌کند', 'محتوای اضافی را مخفی می‌کند', 'حذف المان'],
        answer: 2
    },
    {
        q: 'تفاوت transition و animation چیست؟',
        options: ['transition قوی‌تر است', 'هیچ', 'animation پیچیده‌تر و مستقل است', 'فقط اسم فرق دارد'],
        answer: 2
    },
    {
        q: 'nth-child چه کاری می‌کند؟',
        options: ['انتخاب بر اساس نوع', 'انتخاب بر اساس ترتیب فرزند', 'انتخاب کلاس', 'انتخاب id'],
        answer: 1
    },
    {
        q: 'position:sticky چه زمانی کار می‌کند؟',
        options: ['با اسکرول و داشتن top', 'همیشه', 'فقط موبایل', 'فقط flex'],
        answer: 0
    },
    {
        q: 'اولویت CSS کدام درست است؟',
        options: ['id > class > tag', 'class > id', 'tag > id', 'همه برابرند'],
        answer: 0
    }
];



const _question = document.getElementById('question')
const _options = document.getElementById('options')
const _score = document.getElementById('score')
const counter = document.getElementById('counter')
let current = 0                                   //سوال فعلی   
let selectedIndex = null                         //گزینه ای که کاربر کلیک کرده
let answer = false                              //ایا سوال جواب داده شده
let score = 0                                  //امتیاز فعلی


function loadQuestion() {

    selectedIndex = null
    answer = false
    _options.innerHTML = ''
    _score.innerHTML = ''
    document.querySelector('.nextbtn').classList.add('hidden')
    _question.textContent = questions[current].q

    questions[current].options.forEach((opt, index) => {
        const div = document.createElement('div')
        div.classList.add('option')
        div.textContent = opt
        div.onclick = () => selectOption(div, index)
        _options.appendChild(div)
    })
    counter.textContent = `(${current + 1}/${questions.length})`

}


function selectOption(element, index) {
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected')
    })
    element.classList.add('selected')
    selectedIndex = index

    hideMessage()

}


function checkAnswer() {
    if (selectedIndex == null) {
        showMessage()
        return;
    }
    hideMessage()
    answer = true
    const options = document.querySelectorAll('.option')
    const correctedAnswer = questions[current].answer
    if (selectedIndex == correctedAnswer) {
        options[selectedIndex].classList.add('correct')
    } else {
        options[selectedIndex].classList.add('wrong')
        options[correctedAnswer].classList.add('correct')
    }
    document.querySelector('.nextbtn').classList.remove('hidden')
}


function nextQuestion() {
    if (selectedIndex == null) {
        showMessage()
        return;
    }
    hideMessage()
    if (!answer) return;
    current++
    if (current < questions.length) {
        loadQuestion()
    } else {
        _options.innerHTML = ''
        _question.textContent = "پایان آزمون 🎉"
        const container = document.querySelector('.container');
        container.classList.remove('flex', 'justify-between', 'items-center');
        container.style.textAlign = 'center';

        counter.innerHTML = ''
        _score.textContent = `گزینه هایی که درست پاسخ داده شده :   ${score} از ${questions.length} `
        document.getElementById('checkbtn').classList.add('hidden');
        document.getElementById('nextbtn').classList.add('hidden');
    }

}

function showMessage(text = 'لطفا یک گزینه را انتخاب کنید') {
    const msg = document.getElementById('message')
    const backdrop = document.getElementById('backdrop')

    msg.textContent = text
    msg.classList.remove('hidden')
    backdrop.classList.remove('hidden')

}

function hideMessage() {
    document.getElementById('message').classList.add('hidden')
    document.getElementById('backdrop').classList.add('hidden')
}
document.getElementById('backdrop').addEventListener('click', hideMessage)


loadQuestion()