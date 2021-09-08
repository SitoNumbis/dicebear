import type { ComponentGroup, ComponentPickCollection, ColorPickCollection } from '../static-types';

export const eyebrows: ComponentGroup = {
  'angryNatural': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M44.095 17.125c.004-.009.004-.009 0 0ZM19.284 5.005c-2.368-.266-4.858.497-6.427 2.434-.59.728-1.553 2.48-1.509 3.417.017.356.225.375 1.124.59 1.646.392 4.5-1.114 6.355-.972 2.582.198 5.046 1.395 7.283 2.679 3.838 2.202 8.354 6.84 13.093 6.598.353-.018 5.42-1.739 4.41-2.723-.316-.483-3.034-1.127-3.501-1.361-2.172-1.084-4.367-2.448-6.443-3.718-4.528-2.772-8.944-6.338-14.385-6.944ZM68.03 17.125c-.004-.009-.004-.009 0 0Zm24.876-12.12c2.367-.266 4.857.497 6.426 2.434.59.728 1.554 2.48 1.509 3.417-.017.356-.225.375-1.124.59-1.645.392-4.5-1.114-6.355-.972-2.582.198-5.046 1.395-7.282 2.679-3.839 2.202-8.355 6.84-13.093 6.598-.353-.018-5.42-1.739-4.411-2.723.317-.483 3.034-1.127 3.502-1.361 2.171-1.084 4.367-2.448 6.442-3.718 4.528-2.772 8.945-6.338 14.386-6.944Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  'defaultNatural': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M26.547 6.148c-5.807.269-15.195 4.488-14.953 10.344.008.192.29.276.427.129 2.755-2.96 22.316-5.95 29.205-4.365.63.145 1.11-.477.71-.927-3.422-3.848-10.186-5.426-15.389-5.18ZM86.453 6.148c5.807.269 15.195 4.488 14.953 10.344-.008.192-.29.276-.427.129-2.755-2.96-22.316-5.95-29.205-4.365-.63.145-1.11-.477-.71-.927 3.422-3.848 10.186-5.426 15.389-5.18Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  'flatNatural': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M38.66 11.09c-4.998.362-9.923.086-14.918-.122-3.83-.158-7.717-.681-11.374 1.012-.7.324-4.53 2.28-4.44 3.349.07.855 3.935 2.191 4.63 2.436 3.67 1.29 7.181.895 10.954.67 4.628-.278 9.236-.074 13.861-.214 3.116-.093 7.917-.62 9.457-4.398.464-1.137.105-3.413-.36-4.657-.185-.496-.72-.683-1.125-.397-1.45 1.023-4.261 2.146-6.685 2.321ZM73.34 11.09c4.998.362 9.923.086 14.918-.122 3.83-.158 7.717-.681 11.374 1.012.7.324 4.53 2.28 4.441 3.349-.071.855-3.936 2.191-4.632 2.436-3.668 1.29-7.18.895-10.954.67-4.627-.278-9.235-.074-13.86-.214-3.116-.093-7.917-.62-9.457-4.398-.464-1.137-.105-3.413.36-4.657.185-.496.72-.683 1.125-.397 1.45 1.023 4.261 2.146 6.685 2.321Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  'frownNatural': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M36.37 6.876c-1.97 2.905-5.546 4.64-8.738 5.684C23.689 13.85 9.08 15.94 12.52 23.908c.052.121.219.123.272.002 1.153-2.645 17.465-5.123 18.973-5.704 4.445-1.709 8.393-5.49 9.162-10.543.352-2.317-.637-6.049-1.548-7.55-.11-.18-.374-.136-.43.069-.36 1.331-1.41 4.971-2.58 6.694ZM75.63 6.876c1.97 2.905 5.546 4.64 8.738 5.684 3.943 1.29 18.551 3.379 15.112 11.348a.147.147 0 0 1-.272.002c-1.153-2.645-17.465-5.123-18.973-5.704-4.445-1.709-8.393-5.49-9.162-10.543-.352-2.317.637-6.049 1.548-7.55.11-.18.374-.136.43.069.36 1.331 1.41 4.971 2.58 6.694Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  'raisedExcitedNatural': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="m22.766 1.578.911-.402C28.92-.905 36.865-.033 41.723 2.299c.567.272.18 1.153-.402 1.108-14.919-1.151-24.963 8.146-28.375 14.44-.101.187-.407.208-.482.034-2.308-5.319 4.45-13.985 10.302-16.303ZM89.234 1.578l-.911-.402C83.08-.905 75.135-.033 70.277 2.299c-.567.272-.18 1.153.402 1.108 14.919-1.151 24.963 8.146 28.375 14.44.101.187.407.208.483.034 2.307-5.319-4.45-13.985-10.303-16.303Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  'sadConcernedNatural': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="m31.234 20.422-.911.402c-5.242 2.081-13.188 1.209-18.046-1.123-.567-.273-.18-1.153.402-1.108 14.919 1.151 24.963-8.146 28.375-14.44.101-.187.407-.208.482-.034 2.308 5.319-4.45 13.985-10.302 16.303ZM80.766 20.422l.911.402c5.242 2.081 13.188 1.209 18.046-1.123.567-.273.18-1.153-.402-1.108-14.919 1.151-24.963-8.146-28.375-14.44-.101-.187-.407-.208-.483-.034-2.307 5.319 4.45 13.985 10.303 16.303Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  'unibrowNatural': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <g fill-rule="evenodd" clip-rule="evenodd" fill="#DADADA">
    <path d="M56.997 12.82c0-.003 0-.003 0 0ZM96.12 7.602c1.463.56 9.19 6.427 7.865 9.153a.809.809 0 0 1-1.291.224c-.545-.517-1.576-1.112-1.706-1.184-5.106-2.835-11.299-1.925-16.73-.91-6.12 1.145-12.11 3.487-18.387 2.68-2.04-.263-6.081-1.222-7.626-2.963-.471-.532-.066-1.381.634-1.434 1.443-.11 2.861-.857 4.33-1.274 3.653-1.039 7.398-1.563 11.114-2.29 6.62-1.298 15.17-4.53 21.797-2.002Z"/>
    <path d="M58.76 12.759c-1.171.04-2.797 3.557-.561 3.677 2.235.119 1.73-3.718.56-3.677ZM55.003 12.79c.001-.003.001-.003 0 0ZM15.881 7.573c-1.464.56-9.19 6.427-7.866 9.154a.809.809 0 0 0 1.291.224c.546-.518 1.577-1.113 1.707-1.185 5.106-2.834 11.298-1.925 16.73-.909 6.12 1.144 12.109 3.486 18.387 2.679 2.04-.263 6.081-1.221 7.626-2.962.471-.532.066-1.382-.634-1.435-1.444-.11-2.862-.856-4.33-1.274-3.654-1.038-7.399-1.562-11.115-2.29-6.62-1.297-15.17-4.53-21.796-2.002Z"/>
    <path d="M54.973 11.79c1.17.04 2.762 4.5.525 4.673-2.237.173-1.696-4.715-.525-4.674Z"/>
  </g>
`,
  'upDownNatural': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="m22.766 1.578.911-.402C28.92-.905 36.865-.033 41.723 2.299c.567.272.18 1.153-.402 1.108-14.919-1.151-24.963 8.146-28.375 14.44-.101.187-.407.208-.482.034-2.308-5.319 4.45-13.985 10.302-16.303ZM86.993 12.07c5.761.773 14.746 5.795 13.994 11.607-.024.19-.312.25-.436.091-2.487-3.188-21.712-7.872-28.713-6.894-.641.09-1.064-.571-.627-.984 3.744-3.536 10.62-4.518 15.782-3.82Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  'angry': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M15.611 15.184c4.24-5.768 6.878-5.483 13.313-.627l.67.507C34.422 18.726 36.708 20 40 20a2 2 0 1 0 0-4c-2.066 0-3.901-1.022-7.989-4.123l-.678-.514c-3.76-2.836-5.959-4.076-8.695-4.37-3.684-.399-7.058 1.48-10.25 5.822a2 2 0 1 0 3.223 2.37ZM96.388 15.184c-4.24-5.768-6.877-5.483-13.312-.627l-.67.507C77.578 18.726 75.292 20 72 20a2 2 0 1 1 0-4c2.066 0 3.901-1.022 7.989-4.123l.678-.514c3.76-2.836 5.959-4.076 8.695-4.37 3.684-.399 7.058 1.48 10.25 5.822a2 2 0 1 1-3.224 2.37Z" fill="#000" fill-opacity=".6"/>
`,
  'default': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M15.63 17.159c3.915-5.51 14.648-8.598 23.893-6.328a2 2 0 1 0 .954-3.884C29.74 4.31 17.312 7.887 12.37 14.84a2 2 0 0 0 3.26 2.318ZM96.37 17.159c-3.915-5.51-14.648-8.598-23.893-6.328a2 2 0 1 1-.954-3.884c10.737-2.637 23.165.94 28.108 7.894a2 2 0 0 1-3.26 2.318Z" fill="#000" fill-opacity=".6"/>
`,
  'raisedExcited': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M15.976 17.128C17.47 7.605 30.059 1.108 39.164 5.3a2 2 0 1 0 1.672-3.633c-11.487-5.29-26.9 2.664-28.812 14.84a2 2 0 0 0 3.952.62ZM96.024 17.128C94.53 7.605 81.942 1.108 72.837 5.3a2 2 0 1 1-1.673-3.633c11.487-5.29 26.9 2.664 28.812 14.84a2 2 0 0 1-3.952.62Z" fill="#000" fill-opacity=".6"/>
`,
  'sadConcerned': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M38.028 5.591c-1.48 8.389-14.09 14.18-23.238 10.432-1.015-.416-2.19.031-2.627.999-.436.968.033 2.09 1.048 2.505 11.444 4.69 26.835-2.38 28.762-13.303.183-1.039-.551-2.023-1.64-2.197-1.09-.175-2.121.525-2.305 1.564ZM73.973 5.591c1.48 8.389 14.09 14.18 23.238 10.432 1.014-.416 2.19.031 2.627.999.436.968-.033 2.09-1.048 2.505-11.444 4.69-26.835-2.38-28.762-13.303-.183-1.039.551-2.023 1.64-2.197 1.09-.175 2.121.525 2.305 1.564Z" fill="#000" fill-opacity=".6"/>
`,
  'upDown': (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M15.591 14.162c4.496-6.326 14.012-9.509 23.756-6.366a2 2 0 1 0 1.228-3.807c-11.408-3.68-22.74.11-28.244 7.856a2 2 0 1 0 3.26 2.317ZM96.377 21.158c-3.914-5.509-14.647-8.598-23.892-6.328a2 2 0 0 1-.954-3.884c10.736-2.637 23.165.94 28.107 7.895a2 2 0 1 1-3.26 2.317Z" fill="#000" fill-opacity=".6"/>
`,
}
