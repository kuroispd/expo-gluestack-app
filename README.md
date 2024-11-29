# Having Trouble with Expo App with Gluestack v2

## [issue] Cannot build app
   Environment:  
   * Windows 11 23H2
   * Node.js v22.11.0
   
   ### What I did
   1. Create Expo app
   ```
   cd ~/dev
   npx create-expo-app@latest

   cd expo-app
   npx expo install expo-dev-client
   ```

   2. Check works or not
   ```
   npx expo start
   > w
   ```

   3. Reset Project and install gluestack-ui components
   ```
   npm run reset-project
   npx gluestack-ui init
   npx gluestack-ui add --all
   npm install
   ```

   4. Edit tailwind.config.js importing gluestackPlugin and expo start  
   tailwind.config.js
   ```
   // const gluestackPlugin = require('@gluestack-ui/nativewind-utils/tailwind-plugin');
   import gluestackPlugin from '@gluestack-ui/nativewind-utils/tailwind-plugin';
   ```

   ```
   npx expo start -c
   > w
   ```

   5. Error on the browser
   ```
   Server Error
   Unable to resolve module c:devexpo-app
   ode_modules.cache
   ativewindglobal.css from c:\dev\expo-app\global.css: c:devexpo-app
   ode_modules.cache
   ativewindglobal.css could not be found within the project or in these directories:
   node_modules
   > 1 | @tailwind base;
      | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   2 | @tailwind components;
   3 | @tailwind utilities;
   4 |
   ```