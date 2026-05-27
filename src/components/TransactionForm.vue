<script setup lang="ts">
import type { Transaction, TransactionType, ExpenseCategory, IncomeCategory } from '@/types/transaction'
import { ref, computed, watch } from 'vue'

const emit = defineEmits<{
    (event: 'add-transaction', transaction: Transaction): void
}>()

const description = ref('')
const amount = ref(0)
const type = ref<TransactionType>('expense')
const category = ref<ExpenseCategory | IncomeCategory>('other')
const availableCategories = computed(() => {
    return type.value === 'income' ? ['salary', 'freelance', 'gift', 'other'] as IncomeCategory[]
        : ['food', 'transportation', 'entertainment', 'shopping', 'healthcare', 'education', 'other'] as ExpenseCategory[]
})

watch(type, () => {
    category.value = ('other' as ExpenseCategory | IncomeCategory)
})

function addTransaction() {
    emit('add-transaction', {
        id: crypto.randomUUID(),
        description: description.value,
        amount: amount.value,
        type: type.value,
        category: category.value,
        timestamp: new Date().toISOString()
    })

    description.value = ''
    amount.value = 0
    type.value = 'expense'
    category.value = 'other'
}

</script>

<template>
    <input v-model="description" type="text" placeholder="Description" />
    <input v-model.number="amount" type="number" placeholder="Amount" />
    <select v-model="type">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
    </select>
    <select v-model="category">
        <option v-for="cat in availableCategories" :key="cat" :value="cat">{{ cat }}</option>
    </select>
    <button @click="addTransaction">Add Transaction</button>
</template>