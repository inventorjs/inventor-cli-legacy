import CommonState from './states/Common'

export default class Store {
    constructor(initialState={}) {
        this.common = new CommonState(initialState.common)
    }

    init(stateName) {
        if (!!stateName && this[stateName]) {
        }
    }
}
