<script setup lang="ts">
import type { Transaction } from '@/types/transaction'

const props = defineProps<{
    transaction: Transaction
}>()

const emit = defineEmits(['deleteItem'])

function deleteItem(id: string) {
    emit('deleteItem', id)
}

</script>
<template>
    <h3>{{ transaction.description }}</h3>
    <p :class="{ 'text-green-500': transaction.type === 'income', 'text-red-500': transaction.type === 'expense' }">
        {{ transaction.type === 'income' ? '+' : '-' }} {{ transaction.amount.toLocaleString('th-TH', {
            style:
                'currency', currency: 'THB'
        }) }}
    </p>
    <p>{{ transaction.category }}</p>
    <p>{{ new Date(transaction.timestamp).toLocaleString() }}</p>
    <button @click="deleteItem(transaction.id)">Delete</button>
</template>