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
      // console.log("FORM BEING SET");
      // console.log(info);
      return { profile: { ...info } };
    },
    SAVE_FRIENDS: (curState, info) => {
      // console.log("SAVE FRIENDS");
      console.log(info);
      return { friends: info };
    },
    LOG_OUT: (curState, info) => {
      return { age: 0, uid: "", profile: {}, friends: [] };
    },
  };

  initStore(actions, { age: 0, uid: "", profile: {}, friends: [] });
};

export default configureStore;
