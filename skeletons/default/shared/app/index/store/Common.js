import { observable } from 'mobx'

export default class Common {
    @observable staffname = ''

    constructor(initialState={}) {
        this.staffname = initialState.staffname
    }

    addName(char) {
        this.staffname += char
    }
}
