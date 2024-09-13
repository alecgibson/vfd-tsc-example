<template>
  {{ message }}
</template>

<script lang="ts">
import {Component, Vue} from 'vue-facing-decorator';

@Component({})
export default class Foo extends Vue {
  public message: string;
}
</script>