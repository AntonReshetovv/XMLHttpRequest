const requestURL = 'https://jsonplaceholder.typicode.com/users'

const xhr = new XMLHttpRequest()

xhr.open('GET', requestURL)

xhr.responseType = 'json' // распарсил ответ с сервера

// при помощи xhr.onload можно обработать данные, которые приходят с сервера
xhr.onload = () => {
    if(xhr.status >= 400){
        console.error(xhr.response)  // Добавил проверку, чтобы обрабатывать потенциальные ошибки
    }else {
        console.log(xhr.response)
    }
}

xhr.onerror = () => { // происходит, только когда запрос совсем не получилось выполнить
    console.log(xhr.response)
}
    

xhr.send()

