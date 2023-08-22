export {};

declare global {
  interface Window {
    trigger: (eventName: string, args: unknown) => void;
    updateMessage: (data: object) => void;

    EventManager: {
      events: Record<string, (() => void)[]>;
      addHandler: (eventName: string, handler: (props: any) => void) => void;
      removeHandler: (eventName: string, handler: (props: any) => void) => void;
    };
  }

  interface Mp {
    trigger: (eventName: string, args: unknown) => void;
  }
}