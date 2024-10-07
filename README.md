# Solar System with React Three Fiber

This project is a visualization of the solar system using React Three Fiber and particle effects to simulate space. Each planet is represented using 3D models, and particle systems are used to give a dynamic and realistic representation of the solar system.

## Features

- 🌞 Realistic solar system recreation with 3D models of planets and the sun.
- 🌌 Space particles to simulate the environment of outer space.
- 🪐 Interactive 3D scene powered by React Three Fiber.
- 🔄 Planets revolve around the sun with realistic orbital paths.
- 💫 Smooth animations and responsive design.

## Technologies Used

- **React**: For building the user interface.
- **React Three Fiber**: For rendering 3D objects and scenes.
- **Three.js**: The underlying 3D engine for creating and animating 3D objects.
- **Vite**: A fast build tool used for development and production builds.

## Installation

To get started with the project, you need to have [Node.js](https://nodejs.org/) installed.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/solar-system-react-three-fiber.git
   ```

2. Navigate to the project directory:

   ```bash
   cd solar-system-react-three-fiber
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the app in development mode, and you can view it in the browser at `http://localhost:3000`.

## Project Structure

- **App.tsx**: Main application component that sets up the scene and includes the solar system components.
- **Planets.tsx**: Handles the rendering and animation of the planets in the solar system.
- **Sun.tsx**: Renders the sun as the central body in the solar system.
- **Particles.tsx**: Manages the particle system to simulate space dust and stars.
- **Scene.tsx**: Configures the 3D scene, including lighting and camera positioning.
- **Utils.ts**: Contains utility functions for calculating orbital paths and other mathematical operations.

## Usage

After running the development server, you can interact with the 3D solar system in your browser. The planets revolve around the sun, and particle effects simulate a dynamic space environment.

- Rotate the scene using your mouse.
- Zoom in/out using the scroll wheel.

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request. Any improvements or bug fixes are welcome!

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ using React Three Fiber.
