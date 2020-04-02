import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    EXAMPLE_FUNC: (curState, increment) => {
      const newInfo = curState.exampleInfo + increment;
      return { exampleInfo: newInfo };
    }
  };

  initStore(actions, { exampleInfo: 0 });
};

export default configureStore;
