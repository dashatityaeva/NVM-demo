// ymaps.ready(init);

// //массив всех меток
// let placemarks = [{
//         latitude: 59.8606080642836,
//         longitude: 30.45611299999991,
//         hintContent: 'My home',
//         balloonContent: 'Тут может быть ваш дом'
//     },
//     {
//         latitude: 59.86,
//         longitude: 30.45611299999991,
//         hintContent: 'My home2',
//         balloonContent: 'Тут может быть ваш дом'
//     },

// ];
// let geoObjects = [];

// function init() {
//     //карта
//     let map = new ymaps.Map('map', {
//         center: [59.94, 30.32],
//         zoom: 11,
//         controls: ['zoomControl'], //элементы на карте
//         behaviors: ['drag'] //поведение по умолчанию
//     });

//     //функция для создания всех меток из массива placemarks
//     // placemarks.forEach(function(obj) {
//     //     let placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
//     //         hintContent: obj.hintContent,
//     //         balloonContent: obj.balloonContent,
//     //     },
//     //     //параметры кастомной метки
//     //     {
//     //         iconLayout: 'default#image',
//     //         iconImageHref: '../img/svgSprite/point.svg',
//     //         iconImageSize: [56, 67],
//     //         iconImageOffset: [-28, -67]
//     //     });

//     //     map.geoObjects.add(placemark);
//     // });

//     for (let i = 0; i < placemarks.length; i++) {

//         geoObjects[i] = new ymaps.Placemark(
//             [placemarks[i].latitude, placemarks[i].longitude], 
//             {
//                 hintContent: ` <div class="map-block__hint" data-id="${i}">${placemarks[i].hintContent}</div>`,
//                 // hintContent: ` <div class="map__hint" data-id="${ [placemarks[i].latitude, placemarks[i].longitude]}">${placemarks[i].hintContent}</div>`,
//                 // balloonContent: placemarks[i].balloonContent,
//                 balloonContent: `
//                 <div class="map-block__hint">
//                     <img style="width: 20px; height: 20px;" src="../img/svgSprite/home.svg" alt="">
//                     <p style="font-size: 15px;">${placemarks[i].balloonContent}</p>
//                 </div>`,
//             },
//             //параметры кастомной метки
//             {
//                 iconLayout: 'default#image',
//                 iconImageHref: '../img/svgSprite/point.svg',
//                 iconImageSize: [56, 67],
//                 iconImageOffset: [-28, -67]
//             });

//     };

//     let clusterer = new ymaps.Clusterer({
//         clusterIcons: [{
//             href: '../img/svgSprite/point.svg',
//             size: [100, 100],
//             offset: [-50, -50]
//         }]
//     });

//     map.geoObjects.add(clusterer);
//     clusterer.add(geoObjects);
//     // map.geoObjects.add(placemark);


//     // console.log('geoObjects: ', geoObjects);
//     ///////////////////////////////


//     console.log('geoObjects: ', geoObjects );


//     // map.setCenter(coordinates,zoom, {checkZoomRange: true}).then(function () {
//     //     objectManager.objects.balloon.open(9070);
//     // });
//     // console.log('map.geoObjects: ', geoObjects);




//     ///////////////////////////////////////////////////////////////////////////

//     // map.geoObjects.events.add('click', function (e) {
//     //     // Получение координат щелчка
//     //     let coords = e.get('target');
//     //     let coor = e.get('type');
//     //     // alert(coords.join(', '));
//     //     console.log(coords);

//     // });


//     let block = document.querySelector('.map-block__list');




//     for (let i in geoObjects) {
//         console.log(geoObjects[i]);
//         console.log(geoObjects[i].properties._data.hintContent);
//         console.log(i);
//         // console.log(geoObjects[item].geometry._coordinates);
//         let coordinates = geoObjects[i].geometry._coordinates

//         // console.log(item.getPosition());
//         // console.log('coordinates: ', coordinates);
//         // console.log(geoObjects[item].geometry._coordinates[0]);
//         // console.log(geoObjects[item].geometry._coordinates[1]);
//         // console.log(geoObjects[item].properties._data.hintContent);
//         block.insertAdjacentHTML("beforeend", `<p>${geoObjects[i].properties._data.hintContent}</p>`);





//         // geoObjects[i].balloon.open();
//         // let goal = [59.8606080642836, 30.45611299999991];
//         // let latitude = 59.8606080642836;
//         // let longitude = 30.45611299999991;
//         // console.log('goal: ', goal);
//         // console.log(coordinates[0] === latitude && coordinates[1] === longitude);

//         // if (coordinates[0] === latitude && coordinates[1] === longitude) {
//         //     geoObjects[item].open([ latitude , longitude] );
//         // }
//         // item.properties.events.open();
//     //    let t = item.getOverlay();

//     //     console.log(' y(): ',  t);
// // console.log(item);




// // map.geoObjects.Balloon.open(
// //     [59.8606080642836, 30.45611299999991], 
// //     {
// //         hintContent: ` <div class="map__hint">pppppp</div>`,
// //         balloonContent:'vvvvvvvv',
// //     },
// //     //параметры кастомной метки
// //     {
// //         iconLayout: 'default#image',
// //         iconImageHref: '../img/svgSprite/point.svg',
// //         iconImageSize: [56, 67],
// //         iconImageOffset: [-28, -67]
// //     }
// //   )


//         // if (item.geometry._coordinates[0] === latitude && item.geometry._coordinates[1] === longitude) {

//         //     console.log(item.properties._data.hintContent);

//         //     console.log(' item.isOpen(): ',  geoObjects.isOpen());
//         // }
//     }

//     let links = document.querySelectorAll('.map-block__hint');
//     links.forEach( function(link) {
//         link.addEventListener('click', function() {
//             console.log(link.dataset.id);

//             geoObjects[link.dataset.id].balloon.open();
//         })
//     })
// }


ymaps.ready(init);

//массив всех меток


let colorEstate = '#4BA55E'; //надо менять
let placemarks = [{
        latitude: 55.79,
        longitude: 37.64,
        hintContent: 'Фермерская лавка',
        balloonContent: 'В 10 минутах ходьбы'
    },
    {
        latitude: 55.768,
        longitude: 37.64,
        hintContent: 'Школа Дзюдо',
        balloonContent: 'В 10 минутах ходьбы \n Работает 24/7'
    },

];
let geoObjects = [];

function init() {

    var mainMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 12,
        controls: ['zoomControl', 'geolocationControl'],
      
    }, {
       
    });
    //метка ЖК
    let estate = new ymaps.Placemark(
        [55.76, 37.64], {
            hintContent: 'Наш ЖК',
            balloonContentHeader: 'Наш ЖК',
            balloonContentBody: 'Красивый и удобный',
            balloonContentFooter: 'Все вопросы по телефону'

        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/svgSprite/point.svg',
            iconImageSize: [56, 67],
            iconImageOffset: [-28, -67],
        }

    );

    mainMap.geoObjects.add(estate);

    let listHints = document.querySelector('.map-block__list');

    for (let i = 0; i < placemarks.length; i++) {
        //создается метка
        geoObjects[i] = new ymaps.Placemark(
            [placemarks[i].latitude, placemarks[i].longitude], {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent,
                iconCaption : placemarks[i].hintContent,
            }, {
                iconColor: colorEstate,
                strokeColor: colorEstate,


                // maxWidth: 100,
                // zIndex:  999999,
                // size: 'large',
               
                // preset: 'islands#glyphIcon',
                // iconGlyph: 'home',
                // iconGlyphColor: 'blue',
                // iconContent: 'islands#darkGreenStretchyIcon',
                // iconCaption: 'vvlnn',
                // draggable: true
            });
        //добавляется метка
        mainMap.geoObjects.add(geoObjects[i]);

        //получение координат
        // console.log(geoObjects[i].geometry.getCoordinates());


        // console.log(' geoObjects[i] ',   placemarks[i].hintContent);

        listHints.insertAdjacentHTML("beforeend", ` <li class="map-block__item" data-id="${i}" data-coords="${geoObjects[i].geometry.getCoordinates()}">${placemarks[i].hintContent}</li>`);
    };

    //открытие балуна метки №1
    // estate.balloon.open();



    let links = document.querySelectorAll('.map-block__item');
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            // console.log(link.dataset.coords);

            // geoObjects[link.dataset.id].balloon.open();
            // geoObjects[link.dataset.id].balloon.open();
            geoObjects.forEach(function (placemark) {
                // console.log(hint.geometry.getCoordinates().toString());

                if (placemark.geometry.getCoordinates().toString() === link.dataset.coords) {
                    placemark.balloon.open();
                }
                //    console.log(hint[index].geometry.getCoordinates() === link.dataset.coords);
            })
        })
    })

}