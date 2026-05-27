<script setup lang="ts">
import type { Transaction } from './types/transaction'
import { ref, computed, watch } from 'vue'
import TransactionList from '@/components/TransactionList.vue'
import BalanceSummary from './components/BalanceSummary.vue'
import TransactionForm from './components/TransactionForm.vue'
import FilterBar from './components/FilterBar.vue'
import TransactionAction from './components/TransactionAction.vue'


const transactions = ref<Transaction[]>(JSON.parse(localStorage.getItem('transactions') || '[]'))

watch(transactions, () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}, { deep: true })

const totalIncome = computed(() => {
  return transactions.value
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)
})

const totalExpense = computed(() => {
  return transactions.value
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)
})

const netBalance = computed(() => totalIncome.value - totalExpense.value)

function addTransaction(transaction: Transaction) {
  transactions.value.push(transaction)
}

const filterType = ref('all')
const filterCategory = ref('all')

const filteredTransactions = computed(() => {
  return transactions.value.filter(t => {
    const typeMatch = filterType.value === 'all' || t.type === filterType.value
    const categoryMatch = filterCategory.value === 'all' || t.category === filterCategory.value
    return typeMatch && categoryMatch
  })
})

function onFilterType(value: string) {
  filterType.value = value
}

function onFilterCategory(value: string) {
  filterCategory.value = value
}

function deleteTransaction(id: string) {
  transactions.value = transactions.value.filter(t => t.id !== id)
}

function deleteAllTransactions() {
  transactions.value = []
}

function deleteExpenses() {
  transactions.value = transactions.value.filter(t => t.type !== 'expense')
}

function deleteIncomes() {
  transactions.value = transactions.value.filter(t => t.type !== 'income')
}

</script>

<template>
  <header>
    <h1>Expense Tracker</h1>
  </header>


  <main>
    <TransactionForm @add-transaction="addTransaction" />
    <BalanceSummary :totalIncome="totalIncome" :totalExpense="totalExpense" :netBalance="netBalance" />
    <TransactionAction @deleteAll="deleteAllTransactions" @deleteExpenses="deleteExpenses"
      @deleteIncomes="deleteIncomes" />
    <FilterBar @filterType="onFilterType" @filterCategory="onFilterCategory" />
    <TransactionList :transactions="filteredTransactions" @deleteTransaction="deleteTransaction" />
  </main>
</template>
