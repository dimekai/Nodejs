# Aplicación de lista de tareas por hacer - ToDo

Los pasos para trabajar sobre el repositorio son los siguientes:

1. Inicializar el repositorio.<br> 
	```
	> npm init
	``` 

2. Seleccionar el comando a ejecutar. Hay tres comandos principales:
	* __Listar__: Muestra las tareas por hacer.<br>
	```> node index.js listar``` <br>
	* __Crear__: Crea una nueva tarea por hacer. <br>
	```> node index.js crear -d "[descripción]"``` <br>
	* __Actualizar__: Actualiza una tarea y la marca como terminada o pendiente. <br>
	```> node index.js actualizar -d "[descripción]" -c true``` <br>

