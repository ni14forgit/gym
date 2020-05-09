import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    SET_UID_USER: (curState, uidInput) => {
      //console.log("this is uid input" + uidInput);
      //console.log("action is being dispatched");
      return { uid: uidInput };
    },
    SET_AGE_USER: (curState, v) => {
      return { age: v };
    },
    FORM_SETTINGS: (curState, info) => {
      return { profile: { ...info } };
    },
    // MOVE_TO_SIGNUP: (curState, payload) => {
    //   history.push("/login");
    // },
    // MOVE_TO_MAIN: (curState, payload) => {
    //   history.push("/main");
    // },
  };

  initStore(actions, { age: 0, uid: "", profile: {} });
};

export default configureStore;
