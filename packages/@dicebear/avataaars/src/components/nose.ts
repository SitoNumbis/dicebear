import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const nose: ComponentGroup = {
  'default': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8c0 4.418 5.373 8 12 8s12-3.582 12-8" fill="#000" fill-opacity=".16"/>
`,
}
