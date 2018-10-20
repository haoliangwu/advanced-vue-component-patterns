export function withToggle(parentCompName = "toggleComp") {
  return {
    inject: {
      [parentCompName]: "toggleComp"
    }
  };
}

export const withToggleMixin = {
  inject: {
    toggleComp: "toggleComp"
  }
};
