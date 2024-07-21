# Portraits

<div align="center">

  ![Static Badge](https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=react&labelColor=black)
  ![Static Badge](https://img.shields.io/badge/typescript-0B88F7?style=for-the-badge&logo=typescript&logoColor=0B88F7&labelColor=black)
  ![Static Badge](https://img.shields.io/badge/framer%20motion-A90FFB?style=for-the-badge&logo=framer&logoColor=%FFF&labelColor=black)
  ![Static Badge](https://img.shields.io/badge/styled%20components-F58381?style=for-the-badge&logo=styled-components&logoColor=FFF&labelColor=black)
  ![Static Badge](https://img.shields.io/badge/pnpm-EA902F?style=for-the-badge&logo=pnpm&logoColor=white&labelColor=black)

</div>

This is the Frontend of a FullStack application that communicates with its own [API](https://github.com/viniciusbavosa/portraits-api). Developed with **[React](https://react.dev/), [Typescript](https://www.typescriptlang.org/), [Framer Motion](https://www.framer.com/motion/) and [Styled-components](https://styled-components.com/).**

This website was developed to serve as a personal gallery. It features a authentication-protected route that allows uploading new photos from a local machine directly to the website through its [API](https://github.com/viniciusbavosa/portraits-api) and an [Nodejs automation script](https://github.com/viniciusbavosa/portraits-node-script).

#### Content

- [Installation](#installation)
- [How to use](#how-to-use)
- [License](#license)
- [Credits](#credits)


#### How to use

1. Clone repo:

    - `git clone https://github.com/viniciusbavosa/Portraits`

2. Install dependencies with pnpm

    - `pnpm install`

3. Set environment variables

    - Use .env-example in the repository root as an example
    - Create a .env file with the environment variables from .env-example  

4. Start application with pnpm -> `pnpm run dev`

5. Application will run on -> `http://localhost:5173/`
    - In case another port has been set, just change `5173` to the respective port;

#### License

This repository is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International Public License**. Be sure to read and agree to the license terms before using its content.

#### Credits

Thanks to [João Genari](https://github.com/genari-j) for his help during the development of this project and for providing the template for this README.