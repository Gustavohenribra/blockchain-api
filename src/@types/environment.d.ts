declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'dev' | 'prod';
  
        PORT: string;
        
        API_KEY:string;

        
    }
  }
  }
  
  export { };