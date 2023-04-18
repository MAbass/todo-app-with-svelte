<script lang="ts">
    import {onMount} from "svelte";
    import Router, {push} from "svelte-spa-router";
    import {wrap} from "svelte-spa-router/wrap";

    import {state} from "./store";

    import Alert from "./lib/Alert.svelte";
    import Landing from "./routes/Landing.svelte";
    import Login from "./routes/Login.svelte";
    import SignUp from "./routes/SignUp.svelte";
    import Todo from "./routes/Todo.svelte";

    const routes = {
        "/": Landing,
        "/login": Login,
        "/signup": SignUp,
        "/todos": wrap({
            component: Todo,
        }),
        "*": Landing,
    };

    onMount(async () => {
        const user = localStorage.getItem('user')
        if (user) {
            state.init(JSON.parse(user))
            push("/todos");
        } else {
            push("/login");
        }
    });
</script>

<Alert/>
<Router {routes} on:conditionsFailed={() => push("/")}/>
