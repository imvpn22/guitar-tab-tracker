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

export default {
  props: [
    'youtubeId'
  ],
  components: {

  }
}
</script>

<style scoped>
	
</style>