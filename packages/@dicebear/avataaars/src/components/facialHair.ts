import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const facialHair: ComponentGroup = {
  'beardLight': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M101.428 98.169c-2.513 2.294-5.19 3.325-8.575 2.604-.582-.124-2.957-4.538-8.853-4.538-5.897 0-8.27 4.414-8.853 4.538-3.385.721-6.062-.31-8.576-2.604-4.725-4.313-8.654-10.26-6.293-16.75 1.23-3.382 3.232-7.095 6.873-8.173 3.887-1.15 9.346-.002 13.264-.788 1.27-.254 2.656-.707 3.585-1.458.929.75 2.316 1.204 3.585 1.458 3.918.786 9.376-.362 13.264.788 3.641 1.078 5.642 4.79 6.873 8.173 2.361 6.49-1.568 12.437-6.294 16.75ZM140.081 26c-3.41 8.4-2.093 18.858-2.724 27.676-.513 7.167-2.02 17.91-8.384 22.538-3.255 2.368-9.179 6.346-13.431 5.236-2.927-.764-3.24-9.16-7.087-12.303-4.363-3.565-9.812-5.131-15.306-4.89-2.37.105-7.165.08-9.15 1.903-1.983-1.822-6.777-1.798-9.148-1.902-5.494-.242-10.943 1.324-15.306 4.889-3.847 3.143-4.16 11.54-7.087 12.303-4.252 1.11-10.176-2.868-13.431-5.236-6.365-4.628-7.87-15.37-8.384-22.538-.63-8.818.686-19.276-2.724-27.676-1.66 0-.565 16.129-.565 16.129v20.356c.032 15.288 9.581 38.17 30.754 46.908C63.286 111.53 75.015 115 84 115s20.714-3.14 25.892-5.277c21.173-8.737 30.722-31.95 30.754-47.238V42.13S141.74 26 140.081 26Z" fill="${colors.facialHair.value}"/>
`,
  'beardMagestic': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M65.18 77.737c2.183-1.632 15.226-2.258 17.578-3.648.734-.434 1.303-.873 1.742-1.309.439.436 1.009.875 1.742 1.31 2.351 1.389 15.395 2.014 17.578 3.647 2.21 1.654 3.824 5.448 3.647 8.414-.212 3.56-4.106 12.052-13.795 13.03-2.114-2.353-5.435-3.87-9.172-3.87-3.737 0-7.058 1.517-9.172 3.87-9.69-.978-13.583-9.47-13.795-13.03-.176-2.966 1.437-6.76 3.647-8.414Zm.665 17.164.017.007-.017-.007Zm79.018-38.916c-.389-5.955-1.585-11.833-2.629-17.699-.281-1.579-1.81-12.286-2.499-12.286-.233 9.11-1.033 18.08-2.065 27.14-.309 2.708-.632 5.416-.845 8.134-.171 2.196.135 4.848-.397 6.972-.679 2.707-4.08 5.232-6.725 6.165-6.6 2.326-12.105-7.303-17.742-10.12-7.318-3.656-19.897-4.527-27.38.239-7.645-4.766-20.224-3.895-27.542-.239-5.637 2.817-11.142 12.446-17.742 10.12-2.645-.933-6.047-3.459-6.725-6.165-.532-2.124-.226-4.776-.397-6.972-.213-2.718-.536-5.426-.845-8.135C30.298 44.08 29.498 35.11 29.265 26c-.689 0-2.218 10.707-2.5 12.286-1.043 5.866-2.24 11.744-2.627 17.7-.4 6.119.077 12.182 1.332 18.177.599 2.865 1.299 5.713 2.049 8.541.834 3.143-.32 9.262.053 12.488.707 6.104 3.582 18.008 6.811 23.259 1.561 2.538 3.39 4.123 5.433 6.168 1.967 1.969 2.788 5.021 4.91 7.118 3.956 3.908 9.72 6.234 15.64 6.806C65.677 143.05 74.506 146 84.5 146c9.995 0 18.823-2.95 24.135-7.457 5.919-.572 11.683-2.898 15.639-6.806 2.122-2.097 2.943-5.149 4.91-7.118 2.042-2.045 3.872-3.63 5.433-6.168 3.229-5.251 6.104-17.155 6.811-23.259.373-3.226-.781-9.345.053-12.488.751-2.828 1.45-5.676 2.05-8.54 1.254-5.996 1.73-12.06 1.332-18.179Z" fill="${colors.facialHair.value}"/>
`,
  'beardMedium': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M84.504 93.841c-11.51.378-16.646 5.88-20.513.289-2.903-4.198-1.688-11.256 1.024-15.227 3.859-5.652 9.094-2.918 14.947-3.563 1.592-.175 3.19-.617 4.542-1.34 1.352.723 2.95 1.165 4.542 1.34 5.854.645 11.089-2.089 14.948 3.563 2.712 3.97 3.926 11.03 1.024 15.227-3.868 5.591-9.002-.667-20.514-.289ZM140.391 26c-3.424 14.075-4.998 28.434-7.481 42.671a319.343 319.343 0 0 1-1.685 8.879c-.127.62-.251 2.923-.862 3.214-1.851.884-5.624-3.817-6.633-4.879-2.533-2.666-5.045-5.356-8.131-7.448-6.234-4.227-13.534-6.726-21.129-7.32-3.178-.248-7.475.186-10.47 1.993-2.995-1.807-7.292-2.24-10.47-1.992-7.596.593-14.895 3.092-21.13 7.32-3.085 2.091-5.597 4.781-8.13 7.447-1.01 1.062-4.782 5.763-6.633 4.88-.61-.292-.735-2.595-.862-3.215a319.348 319.348 0 0 1-1.685-8.879C32.607 54.434 31.034 40.075 27.61 26c-.997 0-1.872 18.748-1.983 20.495-.452 7.094-.98 14.03-.305 21.131 1.164 12.249 2.377 27.608 11.71 36.962 8.434 8.451 20.678 10.218 31.24 15.553 1.36.687 3.163 1.535 5.108 2.23 2.049 1.563 6.113 2.629 10.794 2.629 4.91 0 9.141-1.173 11.08-2.862a46.96 46.96 0 0 0 4.475-1.997c10.56-5.336 22.805-7.102 31.238-15.553 9.334-9.354 10.547-24.713 11.712-36.962.674-7.1.146-14.037-.306-21.131-.112-1.747-.986-20.495-1.982-20.495Z" fill="${colors.facialHair.value}"/>
`,
  'moustacheFancy': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M57.548 69.678c1.627-.975 3.207-1.922 4.84-2.546 5.19-1.983 14.82-1.42 21.612 2.165 6.792-3.586 16.422-4.148 21.612-2.165 1.633.624 3.213 1.57 4.84 2.546 4.125 2.473 8.551 5.126 14.91 3.15.369-.114.729.217.618.58-1.373 4.51-9.007 7.599-11.601 7.7-6.207.242-11.753-2.261-17.126-4.686-4.444-2.006-8.77-3.958-13.253-4.26-4.483.302-8.809 2.254-13.252 4.26-5.374 2.425-10.92 4.928-17.126 4.686-2.594-.101-10.228-3.19-11.602-7.7-.11-.363.25-.694.619-.58 6.358 1.976 10.784-.677 14.91-3.15Z" fill="${colors.facialHair.value}"/>
`,
  'moustacheMagnum': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M83.998 66.938c-2.5-3.336-12.267-4.749-19.277-3.474-9.653 1.757-13.744 12.303-12.506 14.215.772 1.191 2.482.793 4.26.379.814-.19 1.642-.383 2.401-.428 1.486-.089 3.34.218 5.446.567 4.981.824 11.37 1.88 17.628-1.508a6.041 6.041 0 0 0 2.048-1.85 6.041 6.041 0 0 0 2.048 1.85c6.257 3.389 12.647 2.332 17.628 1.508 2.106-.349 3.96-.656 5.446-.567.759.045 1.587.238 2.401.428 1.778.414 3.488.812 4.26-.379 1.238-1.912-2.853-12.458-12.507-14.215-7.009-1.275-16.775.138-19.276 3.474Z" fill="${colors.facialHair.value}"/>
`,
}
