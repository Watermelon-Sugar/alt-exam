import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";
import Counter from "./pages/Counter";
import TestError from "./pages/TestError";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./pages/ErrorPage";

function ErrorFallback({ error }) {
  return (
    <div role="alert" className="alert">
      <p>Something went wrong:</p>
      <p style={{ color: "red" }} className="fallback">{error.message}</p>
    </div>
  );
}
function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {
        navigate('/')
      }} >
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/test-error" element={<TestError />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
