<template>
  <div>
    <label class="block text-sm font-medium text-gray-700">{{ $attrs.label }}</label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <input
        class="block w-full pr-10
        focus:outline-none
        sm:text-sm rounded-md"
        :class="{
          'border-red-300': error,
          'text-red-900': error,
          'placeholder-red-300': error,
          'focus:ring-red-500': error,
          'focus:border-red-500': error,
        }"
        :placeholder="$attrs.placeholder"
        type="text"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
      >
      <div v-if="error" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <ExclamationCircleIcon
          class="h-5 w-5 text-red-500"
          aria-hidden="true"
        />
      </div>
    </div>
    <p v-if="error" id="email-error" class="mt-2 text-sm text-red-600">
      {{ error[0] }}
    </p>
  </div>
</template>

<script>
import { ExclamationCircleIcon } from '@heroicons/vue/solid';

export default {
  components: { ExclamationCircleIcon },
  props: {
    value: {
      type: String,
      default() {
        return '';
      },
    },
    error: {
      type: Array,
      default() {
        return null;
      },
    },
  },

};
</script>
