<template>

  <Card :project="project template" />

</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: "Project-template",
  components: {
    Card
  },
  data() {
    return {
      project: this.$store.state.projects[3]
    }
  }
}

</script>