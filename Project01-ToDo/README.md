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
	```> node index actualizar -d "[misma_descrip_del_json]" -c true``` <br>
	* __Borrar__: Borra una tarea de la base de datos usando su descripción <br>
	```> node index borrar -d "[misma_descrip_del_json]" ``` <br>

La lógica del proceso de persistencia de datos que implementa cada función está guardado en la carpeta `toDo/toDo.js`.


## Crear
* __*Objetivo*__: Crear una nueva tarea y añadirla a la lista de tareas de forma persistente.
* __*Descripción*__: Cada vez que se crea una nueva tarea se guarda en la base de datos, la cuál es simulada usando un archivo JSON en la carpeta `db/data.json`.
	- Si el archivo `data.json` no contiene tarea alguna, inicializamos una lista vacía.
	- Si el archivo `data.json` contiene al menos una tarea, le agregamos la nueva tarea al final de la lista.
* __*Comando*__: <br>
`> npm index crear -d "[descripcion]"`


## Listar
* __*Objetivo*__: Lista/Muestra la lista de tareas por hacer
* __*Descripción*__: Obtiene la lista de tareas extraída de la base de datos `db/data.json` y la muestra en pantalla.
* __*Comando*__: <br>
`> npm index listar`

## Actualizar
* __*Objetivo*__: Actualiza el estado de una tarea de la lista de tareas
* __*Descripción*__: Obtiene la lista de tareas extraída de la base de datos `db/data.json`, busca la tarea que contenga la misma descripción que se le pasa como parametro y actualiza el estado.
* __*Comando*__: <br>
`> npm index actualizar -d "[misma_descrip_del_json]" -c [true, false]`

## Borrar
* __*Objetivo*__: Borrar una tarea de la lista de tareas
* __*Descripción*__: Obtiene la lista de tareas extraída de la base de datos `db/data.json`, busca la tarea que contenga la misma descripción que se le pasa como parametro y la borra.
* __*Comando*__: <br>
`> npm index borrar -d "[misma_descrip_del_json]"`

