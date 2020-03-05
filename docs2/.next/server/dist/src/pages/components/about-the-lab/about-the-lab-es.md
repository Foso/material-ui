module.exports = "# Acerca del laboratorio\n\n<p class=\"description\">Este paquete almacena componentes en desarrollo, que todavía no están listos para estar en core.</p>\n\nThe main difference between the lab and the core is how the components are versioned. Having a separate lab package allows us to release breaking changes when necessary while the core package follows a [slower-moving policy](https://material-ui.com/versions/#release-frequency).\n\nAs developers use and test the components and report issues, the maintainers learn more about shortcomings of the components: missing features, accessibility issues, bugs, API design, etc. The older and more used a component is, the less likely it is that new issues will be found and subsequently need to introduce breaking changes.\n\nFor a component to be ready to move to the core, the following criteria are considered:\n\n* It needs to be **used**. The Material-UI team uses Google Analytics stats among other metrics to evaluate the usage of each component. A lab component with low usage either means that it isn't fully working yet or that there is a low demand for it.\n* It needs to match the **code quality** of the core components. It doesn't have to be perfect to be a part of the core, but the component should be reliable enough that developers can depend on it. \n    * Each component needs **type definitions**. It is not currently required that a lab component is typed, but it would need to be typed to move to the core.\n    * Requires good **test coverage**. Some of the lab components don't currently have comprehensive tests.\n* Can it be used as **leverage** to incentivize users to upgrade to the latest major release? The less fragmented the community is, the better.\n* It needs to have a low probability of a **breaking change** in the short/medium future. For instance, if it needs a new feature that will likely require a breaking change, it may be preferable to delay its promotion to the core.\n\n## Instalación\n\nInstall the package in your project directory with:\n\n```sh\n// con npm\nnpm install @material-ui/lab\n\n// con yarn\nyarn add @material-ui/lab\n```\n\nThe lab has a peer dependency on the core components. If you are not already using Material-UI in your project, you can install it with:\n\n```sh\n// usando npm\nnpm install @material-ui/core\n\n// usando yarn\nyarn add @material-ui/core\n```"