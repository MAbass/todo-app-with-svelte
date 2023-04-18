<script lang="ts">
    import { push } from "svelte-spa-router";

    import LogoSvelte from "../assets/svelte.svg";
    import LogoAppwrite from "../assets/appwrite.svg";
    import LogoGithub from "../assets/github.svg";
    import LogoTwitter from "../assets/twitter.svg";
</script>

<!-- Hero -->
<section class="container h-screen mx-auto flex">
    <div class="flex flex-col mx-auto justify-center p-6 text-center">
        <h1 class="text-4xl md:text-7xl lg:text-9xl font-bold">toTooooDoooo</h1>
        <p class="my-8 text-xl md:text-2xl lg:text-3xl font-medium">
            Ceci une petite application Todo List fait avec Svelte
            <img class="w-8 h-8 inline" src={LogoSvelte} alt="Svelte Logo" />
        </p>
        <button
            on:click={() => push("/login")}
            class="mx-auto mt-4 py-3 lg:py-5 px-10 lg:px-24 text-lg md:text-2xl font-semibold  rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
        >
            Commencons
        </button>
    </div>
</section>
