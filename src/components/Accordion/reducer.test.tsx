import { StateType, TOGGLE_CONSTANT, reducer } from "./reducer";

test("reducer should change value to opposite value", () => {
  //data
  const state: StateType = {
    collapsed: false,
  };

  //action
  const newState = reducer(state, { type: TOGGLE_CONSTANT });

  //expection

  expect(newState.collapsed).toBe(true);
  expect(() => {
    reducer(state, { type: "FAKE" });
  }).toThrowError;
});
