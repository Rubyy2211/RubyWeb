# Usamos una imagen oficial de PHP con Apache
FROM php:8.1-apache

# Instalar extensiones de PHP necesarias
RUN docker-php-ext-install mysqli

# Copiamos el contenido de la aplicación al directorio público de Apache
COPY . /var/www/html/

# Establecemos permisos correctos para el directorio
RUN chown -R www-data:www-data /var/www/html

# Exponemos el puerto 80 para Apache
EXPOSE 80
