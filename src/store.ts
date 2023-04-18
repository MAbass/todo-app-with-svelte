import {writable} from 'svelte/store';

export type Todo = {
    content: string;
    isComplete: boolean;
    index: number;
};

export type Alert = {
    color: string;
    message: string;
};

const createTodos = () => {
    const {subscribe, update, set} = writable<Todo[]>([]);
    let todos = [];
    let index = 0;
    return {
        subscribe,
        fetch: async () => {
            return todos;
        },
        addTodo: async (content: string) => {
            todos.push(content)
            const todo = {content, isComplete: false, index: index + 1}
            update((n) => [todo, ...n])
            index += 1
        },
        removeTodo: async (todo: Todo) => {
            return update((todos) => {
                todos = todos.filter((t) => t.index !== todo.index);
                return todos;
            });
        },
        updateTodo: async (todo: Partial<Todo>) => {
            return
        },
    };
};

const createState = () => {
    const {subscribe, set, update} = writable({
        account: null,
        alert: null,
    });

    return {
        subscribe,
        signup: async (email: string, password: string, name: string) => {
        },
        login: async (email: string, password: string) => {
            localStorage.setItem("user", JSON.stringify({email, password}));
            await state.init({email, password});
        },
        logout: async () => {
            localStorage.removeItem("user")
        },
        alert: async (alert: Alert) => {
        },
        init: async (account = null) => {
            return set({account, alert: null});
        },
    };
};

export const todos = createTodos();
export const state = createState();
