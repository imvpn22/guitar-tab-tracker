<template>
	<panel title="Lyrics">
		<textarea class="lyric">
          {{song.lyric}}
        </textarea>
	</panel> 
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
	.lyric{
  width: 100%;
  height: 800px;
  font-family: monospace;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow:  auto;
  padding:  20px; 
}
</style>