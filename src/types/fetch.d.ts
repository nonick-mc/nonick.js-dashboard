declare interface Body {
  json<T = any>(): Promise<T>
}