import React, { useState } from "react";

export const Tabs = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.type.displayName === "TabsList") {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        if (child.type.displayName === "TabsContent") {
          return child.props.value === activeTab ? child : null;
        }
        return child;
      })}
    </div>
  );
};

export const TabsList = ({ children, activeTab, setActiveTab }) => (
  <div className="flex justify-center mb-10 gap-4">
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
);
TabsList.displayName = "TabsList";

export const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-4 py-2 rounded-md font-medium transition-colors ${
      activeTab === value
        ? "bg-accent text-white"
        : "bg-muted text-muted-foreground hover:bg-accent/20"
    }`}
  >
    {children}
  </button>
);
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = ({ children }) => <div>{children}</div>;
TabsContent.displayName = "TabsContent";
