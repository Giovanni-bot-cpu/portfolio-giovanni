<template>
  <nav class="bg-black h-20 text-white shadow p-4 flex justify-between items-center w-full">
    <h1 class="text-2xl font-bold text-white pl-10">Giovanni Ferreira</h1>
    <ul class="flex space-x-12 pr-20">
      <li><router-link to="/" class="hover:text-blue-500 text-xl">Home</router-link></li>
      <li><router-link to="/sobre" class="hover:text-blue-500 text-xl">Sobre</router-link></li>
      <li><router-link to="/projetos" class="hover:text-blue-500 text-xl">Projetos</router-link></li>
      <li><router-link to="/contato" class="hover:text-blue-500 text-xl">Contato</router-link></li>
    </ul>
  </nav>
</template>
