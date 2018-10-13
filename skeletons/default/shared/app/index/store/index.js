import Common from './Common'

export default class Store {
    constructor(initialState={}) {
        this.common = new Common(initialState.common)
    }
}
