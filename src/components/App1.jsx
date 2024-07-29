// App.js
import DarkLightToggle from "./DarkLightToggle";

function App1() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Dark/Light Mode Toggle Example
      </h1>
      <DarkLightToggle />
    </div>
  );
}

export default App1;
