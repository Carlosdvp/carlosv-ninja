<template>
  <Card :project="project template" />
</template>

<script setup>
import Card from '@/components/Card.vue'
import { useProjectsStore } from '../store/ProjectsStore';

const projectsStore = useProjectsStore();
const project = projectsStore.projects[5];
</script>
