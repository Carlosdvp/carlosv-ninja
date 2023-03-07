<template>
  <Card :project="project" />
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: "Project-2",
  components: {
    Card
  },
  data() {
    return {
      project: this.$store.state.projects[1]
    }
  }
}

</script>

