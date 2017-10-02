<template>
	<panel title="You-Tube Video">
		<youtube
			:video-id="youtubeId"
			:player-width="548"
			:player-height="308">
		</youtube>
	</panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>
	
</style>