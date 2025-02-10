export {};

declare global {
  interface Window {
    fbq: {
      (eventType: string, eventName: string, parameters?: Record<string, any>): void;
      callMethod?: (...args: any[]) => void;
      queue?: any[];
      version?: string;
      loaded?: boolean;
    };
  }
}
