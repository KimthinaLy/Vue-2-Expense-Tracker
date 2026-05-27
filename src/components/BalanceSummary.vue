<script setup lang="ts">

const props = defineProps<{
    totalIncome: number
    totalExpense: number
    netBalance: number
}>()


</script>
<template>
    <h2>Balance Summary</h2>
    <p>Total Income: {{ totalIncome.toLocaleString('th-TH', { style: 'currency', currency: 'THB' }) }}</p>
    <p>Total Expense: {{ totalExpense.toLocaleString('th-TH', { style: 'currency', currency: 'THB' }) }}</p>
    <p :class="{ 'text-green-500': netBalance >= 0, 'text-red-500': netBalance < 0 }">
        Net Balance: {{ netBalance.toLocaleString('th-TH', { style: 'currency', currency: 'THB' }) }}
    </p>
</template>