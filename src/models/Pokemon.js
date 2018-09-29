export default class Pokemon {
	constructor(json) {
		this.name = json.name;
		this.image = json.sprites.front_default;
		this.baseXP = json.base_experience;
		this.abilities = json.abilities;
		this.stats = json.stats;
	}

	getStats() {
		return this.stats.map(e => {
			return {
				name: e.stat.name,
				value: e.base_stat
			};
		});
	}

	getAbilities() {
		return this.abilities.map(e => e.ability.name);
	}
}