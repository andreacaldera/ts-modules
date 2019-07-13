declare module '*.css' {
  const CSS: any
  export default CSS
}

declare module '*.png' {
  const content: any
  export default content
}

declare type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }

declare namespace __soeplus {
  interface Window {
    __initialState__: any // TODO type for state
    _paq?: Array<[string, ...(string | number)[]]>
  }
}

interface Window extends __soeplus.Window {}

declare var window: Window
