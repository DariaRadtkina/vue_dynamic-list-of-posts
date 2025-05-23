<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
  label: String,
  inputId: String,
  placeholder: String,
  errorMessage: String,
  modelValue: [String, Number],
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
<template>
  <div class="field" data-cy="NameField">
    <label class="label" :for="inputId">
      {{ label }}
    </label>
    <div class="control has-icons-left has-icons-right">
      <input
        type="text"
        :name="inputId"
        :id="inputId"
        :placeholder="placeholder"
        class="input"
        :class="{ 'is-danger': errorMessage }"
        :value="modelValue"
        @input="updateValue"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>

      <span
        v-if="errorMessage"
        class="icon is-small is-right has-text-danger"
        data-cy="ErrorIcon"
      >
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>

    <p class="help is-danger" data-cy="ErrorMessage" v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>
