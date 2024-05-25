// создаем XMLHttpRequest
const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()

		// инициализируем XMLHttpRequest
		xhr.open(method, url)

		// указываем объекту xhr, что нужно распарсить ответ
		xhr.responseType = 'json'
		// явно указываем, что отправляем данные в формате json
		xhr.setRequestHeader('Content-Type', 'application/json')

		// слушаем события на xhr, чтобы получить ответ
		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response)
			} else {
				resolve(xhr.response)
			}
		}

		// отлавливаем ошибку
		xhr.onerror = function () {
			reject(xhr.response)
		}

		// посылаем запрос
		xhr.send(JSON.stringify(body))
	})
}

const body = {
	name: 'k1ego',
	age: 18,
}

sendRequest('POST', requestURL)
	.then(data => console.log(data))
	.catch(err => console.log(err))
