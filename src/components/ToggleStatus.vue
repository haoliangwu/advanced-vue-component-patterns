<script>
import ToggleOn from './ToggleOn'
import ToggleOff from './ToggleOff'

export default {
  functional: true,
  render(createElement, {props, data, children}) {
    let Comp = ToggleOff
    
    if(props.on) Comp = ToggleOn

    return createElement(Comp, data, children)
  }
}
</script>
