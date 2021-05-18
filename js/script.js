$(document).ready(function () {

    //===========бургер меню===========
    $('.header__burger').click(function () {
        $('.header').toggleClass('menu-active');
        $('body').toggleClass('hidden');
    })


    //===========Слайдеры=============
    $('#estate-carousel').slick({
        dots: true,
    });
    $('#bonus-carousel').slick({
        dots: true,
        fade: true,
        speed: 500,
        cssEase: 'linear'
    });
    $('#location-carousel').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });
    $('#projects-carousel').slick({
        dots: true,
    });
    $('#constituents-carousel').slick({
        dots: true,
        slidesToShow: 4,
        responsive: [{
                breakpoint: 971,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 791,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    //=========Скролл наверх==========
    let btn = $('.footer__scroll-wrap');

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    //========маска телефона=======
    if (!!$('input[type="tel"]').length) {
        $('input[type="tel"]').mask("+7 (999) 999-99-99");
    }

    //============валидация============
    if (!!$('#excursion-form')) {

        $('#excursion-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 10
                },

            },
            messages: {
                name: {
                    required: '',
                    minlength: ''
                },
                phone: {
                    required: '',
                    minlength: ''
                },
            },
            errorClass: 'invalid'
        });
    }

    //============Галерея проекта============ 
    $('.project-details__link').magnificPopup({

        type: 'image',
        gallery: {
            enabled: true,
        },
        removalDelay: 100,
        mainClass: 'mfp-with-zoom',

        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    })

    //==============попап "Записаться на экскурсию"======
    $('.popap-registration').magnificPopup();
    //==============попап "Спасибо"======================
    $('.popap-thanks').magnificPopup();
    //==============попап "Написать директору"===========
    $('.popap-ceo').magnificPopup();

    //===========попап блока "План"==============
    $('.plan__dot').each(function () {
        $(this).magnificPopup();

    })


    //================"Календарь"==============
    $(function () {
        $("#datepicker").datepicker({
            firstDay: 1,
            dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            minDate: new Date(),
        });
    });
    //получение выбранного значения в календаре
    $("#datepicker").change(function () {
        console.log($("#datepicker").val());
    })
});

//===========скролл блока "Проекты"========
let projects = document.querySelector('.projects');
let projectsTitle = document.querySelector('.projects__titl');

window.addEventListener('scroll', function () {
    if (projects) {
        let target = (projects.offsetHeight + projects.offsetTop) - 335;
        if (window.pageYOffset >= target) {
            projectsTitle.classList.add('projects__titl_stop');
        } else {
            projectsTitle.classList.remove('projects__titl_stop');
        }
    }
})

//=========Карта на стр.Контакты
ymaps.ready(init);

function init() {
    // Создание карты.
    var contactsMap = new ymaps.Map("contacts-map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        //https://yandex.ru/map-constructor/location-tool/
        center: [55.76, 37.64], //из поля "Центр"
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12, //из поля "Масштаб"
        controls: ['geolocationControl', 'fullscreenControl', 'zoomControl', 'smallMapDefaultSet'],
    }, {
        // Зададим опции для элементов управления.
        geolocationControlFloat: 'right',
        zoomControlSize: 'small'
    });


    contactsMap.geoObjects.options.set({
        // Макет иконок всех объектов карты.
        iconLayout: 'default#image',
        iconImageHref: '../img/svgSprite/point.svg',
        iconImageSize: [56, 67],
        iconImageOffset: [-28, -67],
    });


    let placemark = new ymaps.Placemark(
        [55.78, 37.64], {
            hintContent: 'Это хинт2',
            balloonContent: 'Это балун2',
        }
    );

    contactsMap.geoObjects.add(placemark);

    contactsMap.behaviors.disable(['scrollZoom']); //отклучение поведения
}


//==================блок План=============
let coordX = document.querySelector('.coordX');
let coordY = document.querySelector('.coordY');
let dot1 = document.querySelector('.dot1');


function setСoordinates(coord) {
    coord.addEventListener('change', function () {
        if (coord === coordX) {
            +coord.value <= 50 ? dot1.style.left = `calc(${coord.value}%)` : dot1.style.left = `calc(${coord.value}% - 20px)`;
        }
        if (coord === coordY) {
            +coord.value <= 50 ? dot1.style.top = `calc(${coord.value}%)` : dot1.style.top = `calc(${coord.value}% - 20px)`;
        }
    });
}

setСoordinates(coordX);
setСoordinates(coordY);