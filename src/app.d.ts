// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    interface Error {
      status: number;
      message: string;
      code: string;
    }
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};

declare module "nprogress" {
  const NProgress: {
    configure: (options: {
      minimum?: number;
      easing?: string;
      speed?: number;
      trickle?: boolean;
      trickleSpeed?: number;
      showSpinner?: boolean;
      parent?: string;
      template?: string;
    }) => void;
    start: () => void;
    done: (force?: boolean) => void;
    inc: (amount?: number) => void;
    set: (n: number) => void;
    remove: () => void;
    status: number | null;
  };
  export default NProgress;
}
