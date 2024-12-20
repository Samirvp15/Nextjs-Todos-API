
# Development
Pasos para levantar la app en desarrollo

1. Levantar la DB

````
docker compose up -d
````
2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el seed para [crear DB local](http://localhost:3000/api/seed)

# Prisma Commands

````
npx prisma init
npx prisma migrate dev
npx prisma generate
````
# Prod

````

````
# Stage

````

````