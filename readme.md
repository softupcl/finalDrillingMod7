# Implementación Final M7

## Creación del proyecto

```bash
npm init -y
```

## Instalación de dependencias

```bash
npm install express nodemon
```

## Instalación sequelize y sus dependencias

```bash
npm install --save sequelize
npm install --save pg pg-hstore
npm install --save sequelize-cli
```

## Inicialización sequelize 

```bash
npx sequelize-cli init
```

## Creación de modelos y migraciones

```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli model:generate --name Bootcamp --attributes title:string,cue:integer,description:string
npx sequelize-cli model:generate --name UserBootcamp --attributes UserId:integer,BootcampId:integer
```

## Creación de migraciones en base de datos

```bash
npx sequelize-cli db:migrate    
```


## Endpoints

### Users

- GET localhost:3000/users          -- Obtener todos los usuarios
- GET localhost:3000/users/:id      -- Obtener un usuario por su id
- GET localhost:3000/users/:id/bootcamps      -- Obtener un usuario por su id con sus bootcamps
- POST localhost:3000/users         -- Crear un usuario
- PUT localhost:3000/users/:id      -- Actualizar un usuario por su id
- DELETE localhost:3000/users/:id   -- Eliminar un usuario por su id

### Bootcamps

- GET localhost:3000/bootcamps          -- Obtener todos los bootcamps con sus usuarios
- GET localhost:3000/bootcamps/:id      -- Obtener un bootcamp por su id con sus usuarios
- POST localhost:3000/bootcamps         -- Crear un bootcamp
- PUT localhost:3000/bootcamps/:id      -- Actualizar un bootcamp por su id
- DELETE localhost:3000/bootcamps/:id   -- Eliminar un bootcamp por su id

