<template>
  <div>
    <label
      :for="id"
      class="block overflow-hidden rounded-md border border-gray-200 px-3 py-1 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span class="text-xs font-medium text-gray-700"> <slot></slot> </span>

      <input
        :type="type"
        :id="id"
        :placeholder="place"
        class="w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    place: {
      type: String,
    },
    type: {
      type: String,
    },
  },
};
</script>
