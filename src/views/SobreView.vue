<template>
  <div class="h-[820px]  pt-48 p-8">
    <h1 class="text-3xl font-bold mb-4">Sobre Mim:</h1>
    <p class="mb-4">
      Atualmente estou cursando Análise e Desenvolvimento de Sistemas em Marília e também realizando um curso online pela Udemy para complementar meus conhecimentos. Me identifiquei muito com a área de programação, principalmente com Python e MySQL, onde venho me dedicando bastante para aprimorar minhas habilidades.

Estou em constante desenvolvimento, aprendendo tanto a lógica de programação quanto o desenvolvimento de sistemas, além da criação, gestão e manipulação de bancos de dados. Meu objetivo é me tornar um programador especializado nessa área, conquistando a formação e buscando sempre me aperfeiçoar. A tecnologia é um campo que me motiva muito, e é onde encontrei a minha verdadeira paixão profissional.
    </p>
    <div class="flex justify-between">
      <Timeline />
      <img src="../assets/img/trajetoria.jpg" alt="trajetoria">
    </div>
  </div>
</template>

<script setup>
import Timeline from '../components/timelineComponent.vue'
</script>
