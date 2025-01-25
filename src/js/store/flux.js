const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			nextPage: '',
			pokemones: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			loadPokemons: async () => {
				const resp = await fetch("https://pokeapi.co/api/v2/pokemon/");
				const data = await resp.json()
				setStore({ pokemones: data.results })
				setStore({ nextPage: data.next })
			},

			loadMorePokemons: async () => {
				const store = getStore()

				const resp = await fetch(store.nextPage);
				const data = await resp.json()

				console.log(data)

				setStore({ pokemones: [ ...store.pokemones, ...data.results ] })
				setStore({ nextPage: data.next })
			},

		}
	};
};

export default getState;
