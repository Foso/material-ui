module.exports = "---\ntitle: Alert React component\ncomponents: Alert\n---\n\n# Alert\n\n<p class=\"description\">An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.</p>\n\n**Note:** This component is not documented in the [Material Design guidelines](https://material.io/), but Material-UI supports it.\n\n## Simple alerts\n\nThe alert offers four severity levels that set a distinctive icon and color.\n\n{{\"demo\": \"pages/components/alert/SimpleAlerts.js\"}}\n\n## Description\n\nYou can use the `AlertTitle` component to display a formatted title above the content.\n\n{{\"demo\": \"pages/components/alert/DescriptionAlerts.js\"}}\n\n## Actions\n\nAn alert can have an action, such as a close or undo button.\nIt is rendered after the message, at the end of the alert.\n\nIf an `onClose` callback is provided and no `action` prop is set, a close icon is displayed. The `action` prop can be used to provide an alternative action, for example using a Button or IconButton.\n\n{{\"demo\": \"pages/components/alert/ActionAlerts.js\"}}\n\n### Transition\n\nYou can use a [transition component](/components/transitions/) such as `Collapse` to transition the appearance of the alert.\n\n{{\"demo\": \"pages/components/alert/TransitionAlerts.js\"}}\n\n## Icons\n\nThe `icon` prop allows you to add an icon to the beginning of the alert component.\nThis will override the default icon for the specified severity.\n\nYou can change the default severity to icon mapping with the `iconMapping` prop. This can be defined globally using [theme customization](/customization/globals/#default-props).\n\nSetting the icon prop to false will remove the icon altogether.\n\n{{\"demo\": \"pages/components/alert/IconAlerts.js\"}}\n\n## Variants\n\nTwo additional variants are available – outlined, and filled:\n\n### Outlined\n\n{{\"demo\": \"pages/components/alert/OutlinedAlerts.js\"}}\n\n### Filled\n\n{{\"demo\": \"pages/components/alert/FilledAlerts.js\"}}\n\n## Toast\n\nYou can use the Snackbar to [display a toast](/components/snackbars/#customized-snackbars) with the Alert.\n\n## Color\n\nThe `color` prop will override the default color for the specified severity.\n\n{{\"demo\": \"pages/components/alert/ColorAlerts.js\"}}\n\n## Accessibility\n\n(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#alert)\n\nWhen the component is dynamically displayed, the content is automatically announced by most screen readers. At this time, screen readers do not inform users of alerts that are present when the page loads.\n\nUsing color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (for example the visible text), or is included through alternative means, such as additional hidden text.\n\nActions must have a tab index of 0 so that they can be reached by keyboard-only users.\n"