import { ReadFile } from './util/file_reader'
import { File } from './util/types'

interface Round {
    red: number,
    blue: number,
    green: number
}

interface Game {
    id: number,
    rounds: Round[],

    highestRed: number,
    highestBlue: number,
    highestGreen: number,

    power: number,
}

const CreateGame = (gameInfo: string): Game => {

    let game: Game = { id: 0, highestBlue: 0, highestGreen: 0, highestRed: 0, rounds: [], power: 0 };
    let info: [string, string] = gameInfo.split(":") as [string, string]
    game.id = Number.parseInt(info[0].split(" ")[1])

    let rounds: string[] = info[1].split(";")
    for (let round of rounds) {
        let currentRound: Round = {
            blue: 0,
            green: 0,
            red: 0
        }

        let elements: string[] = round.split(",")
        elements = elements.map(x => { return x.trim() })

        for (let element of elements) {
            let elems = element.split(" ")
            let color: "red" | "blue" | "green" = elems[1] as "red" | "blue" | "green"
            let value: number = Number.parseInt(elems[0])

            switch (color) {
                case 'red':
                    currentRound.red = value
                    break;
                case 'blue':
                    currentRound.blue = value
                    break;
                case 'green':
                    currentRound.green = value

                    break;
            }
        }

        game.rounds.push(currentRound)

        if (currentRound.blue > game.highestBlue) {
            game.highestBlue = currentRound.blue
        }
        if (currentRound.red > game.highestRed) {
            game.highestRed = currentRound.red
        }
        if (currentRound.green > game.highestGreen) {
            game.highestGreen = currentRound.green
        }

    }

    game.power = game.highestBlue * game.highestGreen * game.highestRed
    return game
}

const FILE: File = ReadFile("d2.txt")

const RED_LIMIT = 12;
const GREEN_LIMIT = 13;
const BLUE_LIMIT = 14;

let games: Game[] = FILE.lines.map(x => { return CreateGame(x) })
let possible_games: Game[] = games.filter((x) => {
    if (x.highestBlue > BLUE_LIMIT) return;
    if (x.highestGreen > GREEN_LIMIT) return;
    if (x.highestRed > RED_LIMIT) return;
    return x
})

let sum_possible: number = 0;
for (let g of possible_games)
    sum_possible += g.id

console.log(sum_possible);

let sum_power: number = 0
for (let g of games)
    sum_power += g.power

console.log(sum_power);
