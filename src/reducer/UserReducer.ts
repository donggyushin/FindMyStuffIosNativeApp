interface InitialState {
 token: string
}

const initialState: InitialState = {
 token: ''
}

const UserReducer = (state = initialState, action: any) => {
 switch (action.type) {

  default:
   return state
 }
}

export default UserReducer