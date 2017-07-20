/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module "*.json"
{ const value: any;
  export default value;
}

// declare var require: NodeRequire;
declare var RiTa: any;
// declare var RiGrammar: any;

// declare module 'RiTa';

// declare module "json!*"
// { const value: any;
//   export default value;
// }
