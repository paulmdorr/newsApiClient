export type ActionType = {
  data: any
  type: string
}

export type AppDataContextType = {
  appData: AppDataType
  dispatch: Function
}

export type AppDataType = {
  articles: any[]
  category: string
}
