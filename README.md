# My Expo App

## Descripción
Esta es una aplicación móvil desarrollada con **Expo**, **React Native**, **TypeScript** y **NativeWind**. El objetivo principal de esta aplicación es proporcionar una base escalable, mantenible y testeable para el desarrollo de aplicaciones móviles modernas.

## Características
- **Estructura modular** basada en features.
- **Navegación** implementada con `@react-navigation/native`.
- **Estilos** utilizando `NativeWind` para un diseño responsivo y moderno.
- **Manejo de estado** simple con Context API.
- **Separación de lógica** en hooks y servicios.
- **Tipado estático** con TypeScript.

## Requisitos previos
Asegúrate de tener instalados los siguientes requisitos:
- Node.js (versión 16 o superior)
- Expo CLI
- Git

## Instalación
1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd my-expo-app
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Scripts disponibles
En el archivo `package.json` se encuentran los siguientes scripts:

- **`npm start`**: Inicia el servidor de desarrollo de Expo.
- **`npm run android`**: Ejecuta la aplicación en un emulador o dispositivo Android.
- **`npm run ios`**: Ejecuta la aplicación en un emulador o dispositivo iOS (requiere macOS).
- **`npm run web`**: Ejecuta la aplicación en el navegador.
- **`npm run lint`**: Ejecuta ESLint y Prettier para verificar errores de estilo y código.
- **`npm run format`**: Formatea el código con ESLint y Prettier.

## Estructura del proyecto
```
my-expo-app/
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── context/          # Manejo de estado global
│   ├── features/         # Pantallas y lógica específica de cada feature
│   ├── hooks/            # Hooks personalizados
│   ├── navigation/       # Configuración de navegación
│   ├── services/         # Lógica de negocio y llamadas a APIs
│   ├── types/            # Definiciones de tipos TypeScript
├── assets/               # Recursos estáticos (imágenes, fuentes, etc.)
├── App.tsx               # Punto de entrada de la aplicación
├── package.json          # Configuración del proyecto y dependencias
```

## Uso
1. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```
2. Escanea el código QR con la aplicación Expo Go o ejecuta en un emulador/dispositivo:
   ```bash
   npm run android
   npm run ios
   ```

## Contribución
1. Crea un fork del repositorio.
2. Crea una nueva rama para tu feature o bugfix:
   ```bash
   git checkout -b nombre-de-tu-rama
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Sube tus cambios a tu fork:
   ```bash
   git push origin nombre-de-tu-rama
   ```
5. Crea un Pull Request en el repositorio original.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por usar **My Expo App**! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue.