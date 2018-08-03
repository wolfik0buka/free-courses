let http =require('http');


/*Это основой код, который вызывается, когда принят ответ от aviasales.ru*/
function getApi(result) {
    /*Создаем объект с минимальной ценой*/
    let minPrice = {date:'0',price:9999999};
    /*Производим парсинг JSON ответ*/
    let data = JSON.parse(result);
    /*для каждой даты из массива с ценами */
    for (price of data.best_prices){
        /*узнаем дату*/
        let date = price.depart_date.split('-');
        /*Если дата соответсвует осени 2018*/
        if ( +date[0] === 2018 &&
            (+date[1] === 9 || +date[1]) === 10 || +date[1] === 11){
            /*Если цена ниже минимальной на данный момент, то обновляем значение минимальной цен*/
            if (price.value < minPrice.price )
            {
                minPrice.price = price.value;
                minPrice.date = price.depart_date;
            }
        }
    }
    console.log(("Дешевле всего лететь из Москвы в Ниццу " + minPrice.date + " Это будет стоить " + minPrice.price + "руб."));
}


/*Форма получения запроса GET из документации по NODEjs*/
http.get('http://min-prices.aviasales.ru/calendar_preload?origin=MOW&destination_iata=NCE&depart_date=2018-09-15&one_way=true', (res) => {
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
        error = new Error(`Request Failed.\n` +
            `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
        error = new Error(`Invalid content-type.\n` +
            `Expected application/json but received ${contentType}`);
    }
    if (error) {
        console.log(error.message);
        // consume response data to free up memory
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end',() => {
        try {
            /*Вот здесь вызывается наша функция  */
            getApi(rawData)
        } catch (e) {
            console.log(e.message);
        }
    });
});

