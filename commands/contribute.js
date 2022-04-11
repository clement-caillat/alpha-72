const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('contribute')
		.setDescription('Gives you the link to the GitHub repository'),
	async execute(interaction) {
		await interaction.reply('Thanks for contribute ! https://github.com/clement-caillat/alpha-72');
	},
};