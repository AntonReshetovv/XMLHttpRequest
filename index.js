const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        xhr.responseType = 'json' // распарсил ответ с сервера

        // при помощи xhr.onload можно обработать данные, которые приходят с сервера
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)  // Добавил проверку, чтобы обрабатывать потенциальные ошибки
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => { // происходит, только когда запрос совсем не получилось выполнить
            reject(xhr.response)
        }
        xhr.send()
    })
}

sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(error => console.log(error))

