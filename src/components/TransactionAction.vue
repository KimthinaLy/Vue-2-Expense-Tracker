<script setup lang="ts">
const emit = defineEmits(['deleteAll', 'deleteExpenses', 'deleteIncomes'])
</script>
<template>
    <button @click="emit('deleteAll')">Delete All</button>
    <button @click="emit('deleteExpenses')">Delete Expenses</button>
    <button @click="emit('deleteIncomes')">Delete Incomes</button>
</template>