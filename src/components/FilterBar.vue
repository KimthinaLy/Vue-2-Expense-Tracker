<script setup lang="ts">
const emit = defineEmits<{
    'filterType': [value: string]
    'filterCategory': [value: string]
}>()

function onFilterTypeChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value
    emit('filterType', value)
}

function onFilterCategoryChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value
    emit('filterCategory', value)
}

</script>
<template>
    <div class="flex space-x-4 mb-4">
        <select @change="onFilterTypeChange" class="border p-2 rounded">
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
        </select>
        <select @change="onFilterCategoryChange" class="border p-2 rounded">
            <option value="all">All Categories</option>
            <option value="salary">Salary</option>
            <option value="freelance">Freelance</option>
            <option value="gift">Gift</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="entertainment">Entertainment</option>
            <option value="shopping">Shopping</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
        </select>
    </div>

</template>