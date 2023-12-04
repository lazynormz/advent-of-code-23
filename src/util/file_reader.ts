import * as fs from 'fs'
import { File } from './types'

const PATH: string = "input"

const ReadFile = (name: string): File => {
    let _: File = { name: name, lines: [] }

    _.lines = fs.readFileSync(`${PATH}/${name}`, 'utf-8').split("\n")

    return _
}

export {
    ReadFile
}
