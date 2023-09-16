<script setup lang="ts">
  import { NGradientText } from 'naive-ui'
</script>
<template>
  <div>
    <section class="max-w-screen mx-auto mt-4">
      <div class="grid-flow-col gap-4 auto-cols-min">
        <NGradientText
          :gradient="{
            from: 'rgb(0, 0, 0)',
            to: 'rgb(170, 170, 170)'
          }"
          :size="58"
        >
          Contact
        </NGradientText>
      </div>
      <div class="grid-flow-col gap-4 auto-cols-min pl-8 pr-8 max-w-xlg mx-full text-2xl font-thin text-gray-dark">
        <form
          method="POST"
          action="https://herotofu.com/start"
        >
          <label class="block mb-6">
            <span class="text-gray-700">Your name</span>
            <input
              type="text"
              name="name"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Joe Bloggs"
            />
          </label>
          <label class="block mb-6">
            <span class="text-2xl text-gray-700">Email address</span>
            <input
              name="email"
              type="email"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="joe.bloggs@example.com"
              required
            />
          </label>
          <label class="block mb-6">
            <span class="text-gray-700">Message</span>
            <textarea
              name="message"
              class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="3"
              placeholder="Tell us what you're thinking about..."
            ></textarea>
          </label>
          <div class="mb-6">
            <button
              type="submit"
              class="h-10 px-5 text-white-100 bg-white-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-gray-200"
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
