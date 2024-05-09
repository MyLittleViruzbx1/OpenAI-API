<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Proyecto realizado con <a href="http://nodejs.org" target="_blank">Node.js</a> Utilizando el framework <a href="https://nestjs.com/">nest</a> para crear aplicaciones del lado del servidor eficientes y escalables.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework usando TypeScript .

### Instalación
```bash
$ npm install
```

### 3. Crear archivo .env basado en el .env.tempate
- Cambia tu api-key - [Apy-key](https://platform.openai.com/api-keys)
```bash
Archivo: 
  .env.template cambialo por .env

```

### 4. Ejecutando la aplicación

```bash
# Modo observacion / watch mode
$ npm run start:dev
```


## EndPoint

Los endpoints se refieren a los puntos de acceso específicos dentro de una API Nest.js que permiten a los clientes, como Postman, enviar solicitudes y recibir respuestas. 

Cada endpoint está asociado con una ruta única y un método HTTP 

(GET, POST, PUT, DELETE, etc.) 

que define la acción que se debe realizar en el recurso.

En Nest.js, los endpoints se definen utilizando controladores y métodos decorados. Los controladores agrupan endpoints relacionados, mientras que los métodos representan las acciones específicas que se pueden realizar en los recursos. Cada método debe estar decorado con el método HTTP correspondiente (por ejemplo, @Get(), @Post(), @Put(), @Delete()).

```typescript
@Controller('users')
export class UserController {
  @Get()
  getUsers() {
    // Implementación para obtener todos los usuarios
  }

  @Post()
  createUser(@Body() user: User) {
    // Implementación para crear un nuevo usuario
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: User) {
    // Implementación para actualizar un usuario existente
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    // Implementación para eliminar un usuario
  }
}

```

## Postman
Postman es una herramienta de desarrollo de API popular que se puede utilizar para probar y depurar endpoints Nest.js. Para probar un endpoint, cree una solicitud en Postman y especifique la URL del endpoint, el método HTTP y los datos de la solicitud (si corresponde). Postman enviará la solicitud al endpoint y mostrará la respuesta.

Por ejemplo, para probar el endpoint de OpenAI del ejemplo anterior, cree una solicitud POST en Postman con la siguiente URL:
```bash
Ortografía
localhost:3000/gpt/orthography-check

Pros y contras
localhost:3000/gpt/pros-cons-discusser

Stream
localhost:3000/gpt/pros-cons-discusser-stream

Traducción
localhost:3000/gpt/translate

Texto Audio
localhost:3000/gpt/text-to-audio

```
Postman enviará la solicitud al endpoint y mostrará una lista de todos los modelos de la API en la respuesta.

Los endpoints son componentes esenciales de las API Nest.js y Postman facilita su prueba y depuración. Al comprender cómo definir endpoints en Nest.js y cómo probarlos con Postman, puede crear API robustas y fáciles de usar.

## Mantente en contacto

- Author - [Myz](https://github.com/MyLittleViruzbx1)

## License

Nest is [MIT licensed](LICENSE).
