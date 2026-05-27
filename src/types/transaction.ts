export interface Transaction {
  id: string
  description: string
  amount: number
  type: TransactionType
  category: IncomeCategory | ExpenseCategory
  timestamp: string
}

export type TransactionType = 'income' | 'expense'
export type IncomeCategory = 'salary' | 'freelance' | 'gift' | 'other'
export type ExpenseCategory =
  | 'food'
  | 'transportation'
  | 'entertainment'
  | 'shopping'
  | 'healthcare'
  | 'education'
  | 'other'
