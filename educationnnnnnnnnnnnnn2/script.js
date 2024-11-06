$(".theme").click(function(){

    $(".theme").toggleClass('darkIkon')
    $(".box").toggleClass('dark_box')
    $(".excellence_item").toggleClass('dark_excellence_item')
    $(".offerings_item").toggleClass('offering_item_dark')
    $(".offering_button").toggleClass('offering_item_dark')
    $(".footer").toggleClass('footer_dark')
    $(".articles_item").toggleClass('article_item_dark')

})
$(".language").click(function(){
       if (mode == 1){
        for (let i = 1; i<=42; i++)
        {
            $(`#t${i}`).text(eng[i-1])
        }
        mode=0
    }
    else if (mode == 0){
        for (let i = 1; i<=42; i++)
        {
            $(`#t${i}`).text(ukr[i-1])
        }
        mode=1
    }

    


})
let ukr =["Головна","Про нас","Курси", "блок","Формування майбутнього Через освіту та інновації","курс","Стартапи","Мова","професори","Прагнення Univerz до академічної досконалості","Ознайомтеся з нашими академічними пропозиціями та прокладіть свій шлях до успіху","Клієнт дуже важливий, за клієнтом піде клієнт. До тих пір, поки маса не важлива, якщо вона не підходить автомобілям клієнта.","Інженерія","Клієнт дуже важливий, за клієнтом піде клієнт.","Психологія","Клієнт дуже важливий, за клієнтом піде клієнт.","Образотворче мистецтво","Клієнт дуже важливий, за клієнтом піде клієнт.","Мова","Клієнт дуже важливий, за клієнтом піде клієнт.","Бухгалтерія","Клієнт дуже важливий, за клієнтом піде клієнт.","Наука","Клієнт дуже важливий, за клієнтом піде клієнт.","Переглянути всі","Перегляньте наші останні статті та знання","Інсайт","12 серпня 2023 р","Багато випускників Універсу відразу працюють","Клієнт дуже важливий, за клієнтом піде клієнт.","Поради","12 груд. 2023 р","Поради, щоб не лінуватися в коледжі","Клієнт дуже важливий, за клієнтом піде клієнт.","Univerz","Швидке посилання","сторінки","Слідкуйте за нами"]
let mode = 0
let eng=["home","About us","Course","Block","Shaping the Future Through Education and Innovation","Course","Startups","Language","Proffesors","Univerz's Commitment to Academic Excellence","Explore Our Academic Offerings Chart Your Path to Success","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula adipiscing elit.","Engineering","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Psychology","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Fine Arts","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Language","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Accountancy","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Science","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","View All","Check out our Latest Articles and Knowledge","Insight","12 Aug 2023","Many Univerz university graduates immediately work","Lorem ipsum dolor sit amet, consectetur adipiscing elit. "," Tips","12 Dec 2023","Tips so you don't get lazy in college"," Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Univerz","Quick Link","Pages","Follow Us",]