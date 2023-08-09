<script setup>
import Contact from '@/components/Contact.vue'
</script>

<template>
  <div
    class="flex flex-col h-full text-[#2c3e50] m-0 bg-[slategray]">
    <div>
      <img
        class="h-[20vh] mx-auto my-0 p-10"
        src="../../public/images/red-knight.png">
      <div
        class="py-10 w-[60%] mx-auto my-0 text-white shadow-slate-500 text-lg">
        <p class="pb-10">
          I am a software engineer with experience in Vue, React, Node, JavaScript, Typescript, MySql, MongoDB, HTML and CSS. I have a passion for creating intuitive and functional user experiences, and have a wide range of experience working with web technologies.
        </p>
        <p class="pb-12">
          I have a track record of delivering robust and reliable applications, and strive to push the boundaries of what is possible with web development.
        </p>
      </div>
    </div>

    <Contact />
  </div>
</template>
