type FunctionHandler = (...args: any[]) => void;

interface Window {
  EventManager?: {
    events: { [eventName: string]: FunctionHandler[] };
    addHandler: (eventName: string, handler: FunctionHandler) => void;
    removeHandler: (eventName: string, handler: FunctionHandler) => void;
  };
}
