export default class Player {
    private name: string;
    private guild: string | null;

    constructor(name: string, guild: string | null) {
        this.name = name;
        this.guild = typeof guild === 'undefined' ? null : guild;
    }

    public static fromSender(sender: string) {
        const regex = /(?:<(.*)>\s)?(.*)/;
        const [_, guild, name] = sender.match(regex) || [];

        return new Player(name, guild);
    }
}
