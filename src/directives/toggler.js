export default function(el, binding, vnode) {
  const comp = vnode.componentInstance;
  const suffix = binding.arg || "expanded";
  const on = binding.value || comp.on;

  // console.log(vnode);

  if (on) {
    el.setAttribute(`aria-${suffix}`, true);
  } else {
    el.removeAttribute(`aria-${suffix}`, false);
  }
}
