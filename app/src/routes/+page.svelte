<script>
    import Card from '/src/components/Card.svelte'
    export let data
</script>

<main>
<h1 class="text-center">Requests for &lt;month&gt;</h1>
{#each data.requests as request }
    <Card {request} />
{/each}

</main>