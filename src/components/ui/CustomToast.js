import React, { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, exiting: false }]);

    // Mark toast as exiting after 4.5s, remove at 5s
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
      );
    }, 4500);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 space-y-3 z-50">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

const Toast = ({ message, type, exiting }) => {
  return (
    <div
      className={`w-72 md:w-80 lg:w-96 shadow-lg rounded-lg p-4 text-sm font-medium text-white 
        ${type === "error" ? "bg-[#FF3333]" : "bg-[#33CCFF]"} 
        ${exiting ? "toast-exit" : "toast-enter"}`}
    >
      <p>{message}</p>
      <ProgressBar color={type === "error" ? "#fff" : "#004466"} />
    </div>
  );
};

const ProgressBar = ({ color }) => {
  const [progress, setProgress] = useState(100);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p > 0 ? p - 2 : 0));
    }, 100); // ~5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white/30 h-1 mt-3 rounded">
      <div
        className="h-1 rounded transition-all duration-100"
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  );
};
