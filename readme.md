# Implementación Final M7

## Creación del proyecto

```bash
npm init -y
```

## Instalación de dependencias

```bash
npm install express
npm install nodemon
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
