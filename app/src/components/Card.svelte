<script>
    export let request
    const {Album,Artist,DiscogRef,Minutes, Seconds,SpotifyRef, Status,Title, Notes} = request
</script>

<main>
    {#if Status=="Active"}
    <div class="mx-auto card w-50">
        <div class="card-body">
            <h5 class="card-title">{Title}</h5>
            <h6 class="card-text">{Artist}</h6>
            <p class="card-text">{Album}</p>
            <p class="card-text">{Minutes}'{Seconds.toString().padStart(2,0)}"</p>
            <a href="{DiscogRef}" class="btn btn-primary">Discogs</a>
            <a href="{SpotifyRef}" class="btn btn-info">Spotify</a>
            
            {#if Notes != null}
                <p class="card-footer fst-italic fs-6">{Notes}</p>
            {/if}
         </div>

    </div>
    {/if}
</main>

<style>
    div.card { margin-bottom: 1em}
</style>