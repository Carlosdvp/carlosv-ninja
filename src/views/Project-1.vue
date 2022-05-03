<template>

  <Card :project="project"/>

</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: "Project-1",
  components: {
    Card
  },
  data() {
    return {
      project: this.$store.state.projects[0]
    }
  }
}

</script>

