<template>
  <Foo />
</template>

<script lang="ts">
import {Component, Vue} from 'vue-facing-decorator';
import Foo from './foo.vue';

@Component({
  components: {
    Foo,
  },
})
export default class Bar extends Vue {
  public message: string;
}
</script>