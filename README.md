# Тестовое задание на позицию backend разработчика

Результат выполнения задания нужно будет оформить здесь же, на гитхабе. Желательный срок выполнения 1 день с момента получения задания.
В качестве ответа __не нужно__ присылать никаких ZIP-архивов и наборов файлов. Все ваши ответы должны быть оформлены на https://github.com/.

## Задание

- Необходимо сделать небольшой web server
- __Обязательно__: postgres, без ORM, typescript, оформить README.md, где будут указаны необходимые ENV переменные и инструкция к запуску, без Nest.js
- __Желательно__: fastify
- Дополнения в виде документации, валидации и прочего - не обязательно, но будет плюсом

## Функционал

__endpoint 1:__

- Нужно обратиться к списку предметов skinport (https://docs.skinport.com/#items)
и отобразить массив объектов, где помимо прочего должны быть указаны две минимальные цены на предмет (одна цена — tradable, другая — нет)
параметры app_id и currency - default, базу здесь использовать не нужно, в эндпоинте необходимо использовать кеширование

__endpoint 2:__

- Есть табличка users с полями id и balance, там есть один юзер с id = 1
- Необходимо реализовать списание баланса пользователя

__Пример__: юзер покупает какой-то предмет на сайте за $100
