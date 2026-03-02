import { Suspense } from "react";
import "./App.css";
import ArgumentMap from "./components/ArgumentMap.tsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense
          fallback={
            <div className="my-16 text-center font-semibold">
              Good things take time 🌀
            </div>
          }
        >
          <ArgumentMap />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
