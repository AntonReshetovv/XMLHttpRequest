const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        xhr.responseType = 'json' // распарсил ответ с сервера
        xhr.setRequestHeader('Content-Type','application/json') // Сказал своим запросам что я отправляю JSON 

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
        xhr.send(JSON.stringify(body))
    })
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const body = {
    name: 'Test',
    age: 30
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(error => console.log(error))

