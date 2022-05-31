# ***ProjectTP2***

### Nro grupo: 2

### Integrantes: 
- Valls Fernando
- Soto Emiliano
- Villarroel Mauricio
- Campanga Juan Manuel

### Descripcion del proyecto: 

*Una api que muestra por geolocalización los bares/restaurantes mas cercanos a nuestra posición y nos brinda el numero de contacto para hablar con el lugar
y realizar la reserva. Ademas permite calificar a los mismos de manera positiva y negativa. Genera una serie de beneficios para los usuarios más participativos*

### Descripcion de funcionalidades:

Nuestro sistema cuenta con un sistema de login utilizando una API (https://docs.expo.dev/guides/authentication/#google) para autenticar identidad mediante google y un sistema de geolocalizacion
mediante otra API (https://docs.expo.dev/versions/v45.0.0/sdk/location/) para obtener LATITUD Y LONGITUD.
   Ademas contamos con una API (https://docs.expo.dev/guidesdeeplinking/) en donde mediante una accion(boton, etc...) captamos el numero del cliente

### Reglas de negocio

1. Generación historico de usuarios por bar.
2. Generación black list, para guardar nombre de bares con calificaciones negativas. Ej: si tuvo 5 calificaciones negativas entra a la blacklist.
3. Generación de premios para los clientes mas participativos. Ej: +10 reseñas, se genera un descuento del x%.
4. Generación ranking por calificación.

### Declaración de las rutas

- get --> /bares
- post --> /baresXnombre
- post --> /agregarUsuario
- post --> /modificarUsuario
- post --> /borrarUsuario
- get --> /nombreBaresBlacklist
- post --> /agregarBarblacklist
- post --> /mejoresClientes (clientes mas activos)

### Controllers

- barController
- userController
- adminController

### Posibles tareas a realizar POR INTEGRANTE.

### Comenzamos con los controllers

- Emiliano: /agregarUsuario y /modificarUsuario
- Mauricio: /nombreBaresBlacklist y /agregarBarblacklist
- Juan: /bares y /borrarUsuario
- Fernando: /mejoresClientes y /baresXNombre


