<script>
    import Card from '/src/components/Card.svelte'
    export let data
</script>

<main>
<h1 class="text-center">Gil's Open Requests</h1>
{#each data.requests as request }
    <Card {request} />
{/each}

</main>