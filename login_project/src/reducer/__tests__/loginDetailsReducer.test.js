import loginDetailsReducer, { initialState } from "../loginDetailsReducer";
import { setUsername } from "../../actions/loginActions";

describe("Login Reducer", () => {
  it("return default state", () => {
    expect(loginDetailsReducer(initialState, {})).toEqual(initialState);
  });

  it("set email", () => {
    const email = {
      target: {
        value: "XXX"
      }
    }
    expect(loginDetailsReducer(initialState, setUsername(email))).toEqual({ ...initialState, username: "XXX" });
  })
});