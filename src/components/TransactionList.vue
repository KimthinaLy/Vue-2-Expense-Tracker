<script setup lang="ts">
import type { Transaction } from '@/types/transaction'
import TransactionItem from '@/components/TransactionItem.vue'

const props = defineProps<{
    transactions: Transaction[]
}>()

const emit = defineEmits(['deleteTransaction'])

function deleteTransaction(id: string) {
    emit('deleteTransaction', id)
}
</script>
<template>
    <TransactionItem @deleteItem="deleteTransaction" v-for="transaction in transactions" :key="transaction.id"
        :transaction="transaction" />
</template>