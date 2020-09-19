# Aplicación de lista de tareas por hacer - ToDo

Los pasos para trabajar sobre el repositorio son los siguientes:

1. Inicializar el repositorio.<br> 
	```
	> npm init
	``` 

2. Seleccionar el comando a ejecutar. Hay tres comandos principales:
	* __Listar__: Muestra las tareas por hacer.<br>
	```> node index listar``` <br>
	* __Crear__: Crea una nueva tarea por hacer. <br>
	```> node index crear -d "[descripción]"``` <br>
	* __Actualizar__: Actualiza una tarea y la marca como terminada o pendiente. <br>
	```> node index actualizar -d "[descripción]" -c true``` <br>

La lógica del proceso de persistencia de datos que implementa cada función está guardado en la carpeta `toDo/toDo.js`.


## Crear
* __*Objetivo*__: Crear una nueva tarea y añadirla a la lista de tareas de forma persistente.
* __*Descripción*__: Cada vez que se crea una nueva tarea se guarda en la base de datos, la cuál es simulada usando un archivo JSON en la carpeta `db/data.json`
* __*Comando*__: <br>
`> npm index crear -d "[descripcion]"`

