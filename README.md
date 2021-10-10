# Pueba tecnica Sofka

Esta prueba se realiza con la finalidad de participar en el reto de habilidades, consta de un juego de preguntas donde en el se cuenta con una base de datos de 25 preguntas dividida por niveles, por cada nivel se selecciona una pregunta aleatoria de la base de datos y se da inicio al juego, a medida que el participante seleccione la respuesta correcta sube de nivel hasta llegar a un total de 5 niveles.Por cada respuesta acertada se optiene un puntaje de +500; una vez alcanzado el maximo puntaje, el juego termina indicando su puntuacíon final.

## Pre-requisitos.

La aplicacion se realizo sobre un servidor local en express y para inicializarlo, usamos los comandos
- npm i: instala todas las librerias y/o dependencias necesarias
- npm run start:prod= inicia el servidor 
- acceder al puerto 8000
 
Se usó la libreria nodemode como watcher de los cambios en el proyecto si. Si se requiere lanzar la aplicacion en modo desarrollo se debe lanzar el comando npm run start:dev