(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5kAD":function(e,p,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-docs/autocomplete",function(){return s("AgDH")}])},AgDH:function(e,p,s){"use strict";s.r(p),s.d(p,"default",(function(){return i}));var n=s("mXGw"),a=s.n(n),o=s("e+1t"),t=s("io6n"),l=s.n(t),r=(0,a.a.createElement)(o.a,{markdown:l.a});function i(){return r}},io6n:function(e,p){e.exports='---\nfilename: /packages/material-ui-lab/src/Autocomplete/Autocomplete.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Autocomplete API\n\n<p class="description">The API documentation of the Autocomplete React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Autocomplete from \'@material-ui/lab/Autocomplete\';\n// or\nimport { Autocomplete } from \'@material-ui/lab\';\n```\n\nYou can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">autoComplete</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the portion of the selected suggestion that has not been typed by the user, known as the completion string, appears inline after the input cursor in the textbox. The inline completion string is visually highlighted and has a selected state. |\n| <span class="prop-name">autoHighlight</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the first option is automatically highlighted. |\n| <span class="prop-name">autoSelect</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the selected option becomes the value of the input when the Autocomplete loses focus unless the user chooses a different option or changes the character string in the input. |\n| <span class="prop-name">blurOnSelect</span> | <span class="prop-type">\'mouse\'<br>&#124;&nbsp;\'touch\'<br>&#124;&nbsp;bool</span> | <span class="prop-default">false</span> | Control if the input should be blurred when an option is selected:<br>- `false` the input is not blurred. - `true` the input is always blurred. - `touch` the input is blurred after a touch event. - `mouse` the input is blurred after a mouse event. |\n| <span class="prop-name">ChipProps</span> | <span class="prop-type">object</span> |  | Props applied to the [`Chip`](/api/chip/) element. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">clearOnEscape</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, clear all values when the user presses escape and the popup is closed. |\n| <span class="prop-name">clearText</span> | <span class="prop-type">string</span> | <span class="prop-default">\'Clear\'</span> | Override the default text for the *clear* icon button.<br>For localization purposes, you can use the provided [translations](/guides/localization/). |\n| <span class="prop-name">closeIcon</span> | <span class="prop-type">node</span> | <span class="prop-default">&lt;CloseIcon fontSize="small" /></span> | The icon to display in place of the default close icon. |\n| <span class="prop-name">closeText</span> | <span class="prop-type">string</span> | <span class="prop-default">\'Close\'</span> | Override the default text for the *close popup* icon button.<br>For localization purposes, you can use the provided [translations](/guides/localization/). |\n| <span class="prop-name">debug</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the popup will ignore the blur event if the input if filled. You can inspect the popup markup with your browser tools. Consider this option when you need to customize the component. |\n| <span class="prop-name">defaultValue</span> | <span class="prop-type">any<br>&#124;&nbsp;array</span> | <span class="prop-default">props.multiple ? [] : null</span> | The default input value. Use when the component is not controlled. |\n| <span class="prop-name">disableClearable</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the input can\'t be cleared. |\n| <span class="prop-name">disableCloseOnSelect</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the popup won\'t close when a value is selected. |\n| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the input will be disabled. |\n| <span class="prop-name">disableListWrap</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the list box in the popup will not wrap focus. |\n| <span class="prop-name">disablePortal</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Disable the portal behavior. The children stay within it\'s parent DOM hierarchy. |\n| <span class="prop-name">filterOptions</span> | <span class="prop-type">func</span> |  | A filter function that determines the options that are eligible.<br><br>**Signature:**<br>`function(options: T[], state: object) => undefined`<br>*options:* The options to render.<br>*state:* The state of the component. |\n| <span class="prop-name">filterSelectedOptions</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, hide the selected options from the list box. |\n| <span class="prop-name">forcePopupIcon</span> | <span class="prop-type">\'auto\'<br>&#124;&nbsp;bool</span> | <span class="prop-default">\'auto\'</span> | Force the visibility display of the popup icon. |\n| <span class="prop-name">freeSolo</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options. |\n| <span class="prop-name">getOptionDisabled</span> | <span class="prop-type">func</span> |  | Used to determine the disabled state for a given option. |\n| <span class="prop-name">getOptionLabel</span> | <span class="prop-type">func</span> | <span class="prop-default">x => x</span> | Used to determine the string value for a given option. It\'s used to fill the input (and the list box options if `renderOption` is not provided). |\n| <span class="prop-name">getOptionSelected</span> | <span class="prop-type">func</span> |  | Used to determine if an option is selected. Uses strict equality by default. |\n| <span class="prop-name">groupBy</span> | <span class="prop-type">func</span> |  | If provided, the options will be grouped under the returned string. The groupBy value is also used as the text for group headings when `renderGroup` is not provided.<br><br>**Signature:**<br>`function(options: T) => string`<br>*options:* The option to group. |\n| <span class="prop-name">id</span> | <span class="prop-type">string</span> |  | This prop is used to help implement the accessibility logic. If you don\'t provide this prop. It falls back to a randomly generated id. |\n| <span class="prop-name">includeInputInList</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the highlight can move to the input. |\n| <span class="prop-name">inputValue</span> | <span class="prop-type">string</span> |  | The input value. |\n| <span class="prop-name">ListboxComponent</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'ul\'</span> | The component used to render the listbox. |\n| <span class="prop-name">ListboxProps</span> | <span class="prop-type">object</span> |  | Props applied to the Listbox element. |\n| <span class="prop-name">loading</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the component is in a loading state. |\n| <span class="prop-name">loadingText</span> | <span class="prop-type">node</span> | <span class="prop-default">\'Loading\u2026\'</span> | Text to display when in a loading state.<br>For localization purposes, you can use the provided [translations](/guides/localization/). |\n| <span class="prop-name">multiple</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, `value` must be an array and the menu will support multiple selections. |\n| <span class="prop-name">noOptionsText</span> | <span class="prop-type">node</span> | <span class="prop-default">\'No options\'</span> | Text to display when there are no options.<br>For localization purposes, you can use the provided [translations](/guides/localization/). |\n| <span class="prop-name">onChange</span> | <span class="prop-type">func</span> |  | Callback fired when the value changes.<br><br>**Signature:**<br>`function(event: object, value: T, reason: string) => void`<br>*event:* The event source of the callback.<br>*value:* null<br>*reason:* One of "create-option", "select-option", "remove-option", "blur" or "clear". |\n| <span class="prop-name">onClose</span> | <span class="prop-type">func</span> |  | Callback fired when the popup requests to be closed. Use in controlled mode (see open).<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback. |\n| <span class="prop-name">onInputChange</span> | <span class="prop-type">func</span> |  | Callback fired when the input value changes.<br><br>**Signature:**<br>`function(event: object, value: string, reason: string) => void`<br>*event:* The event source of the callback.<br>*value:* The new value of the text input.<br>*reason:* Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`. |\n| <span class="prop-name">onOpen</span> | <span class="prop-type">func</span> |  | Callback fired when the popup requests to be opened. Use in controlled mode (see open).<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback. |\n| <span class="prop-name">open</span> | <span class="prop-type">bool</span> |  | Control the popup` open state. |\n| <span class="prop-name">openOnFocus</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the popup will open on input focus. |\n| <span class="prop-name">openText</span> | <span class="prop-type">string</span> | <span class="prop-default">\'Open\'</span> | Override the default text for the *open popup* icon button.<br>For localization purposes, you can use the provided [translations](/guides/localization/). |\n| <span class="prop-name required">options&nbsp;*</span> | <span class="prop-type">array</span> |  | Array of options. |\n| <span class="prop-name">PaperComponent</span> | <span class="prop-type">elementType</span> | <span class="prop-default">Paper</span> | The component used to render the body of the popup. |\n| <span class="prop-name">PopperComponent</span> | <span class="prop-type">elementType</span> | <span class="prop-default">Popper</span> | The component used to position the popup. |\n| <span class="prop-name">popupIcon</span> | <span class="prop-type">node</span> | <span class="prop-default">&lt;ArrowDropDownIcon /></span> | The icon to display in place of the default popup icon. |\n| <span class="prop-name">renderGroup</span> | <span class="prop-type">func</span> |  | Render the group.<br><br>**Signature:**<br>`function(option: any) => ReactNode`<br>*option:* The group to render. |\n| <span class="prop-name required">renderInput&nbsp;*</span> | <span class="prop-type">func</span> |  | Render the input.<br><br>**Signature:**<br>`function(params: object) => ReactNode`<br>*params:* null |\n| <span class="prop-name">renderOption</span> | <span class="prop-type">func</span> |  | Render the option, use `getOptionLabel` by default.<br><br>**Signature:**<br>`function(option: T, state: object) => ReactNode`<br>*option:* The option to render.<br>*state:* The state of the component. |\n| <span class="prop-name">renderTags</span> | <span class="prop-type">func</span> |  | Render the selected value.<br><br>**Signature:**<br>`function(value: T[], getTagProps: function) => ReactNode`<br>*value:* The `value` provided to the component.<br>*getTagProps:* A tag props getter. |\n| <span class="prop-name">selectOnFocus</span> | <span class="prop-type">bool</span> | <span class="prop-default">!props.freeSolo</span> | If `true`, the input\'s text will be selected on focus. It helps the user clear the selected value. |\n| <span class="prop-name">size</span> | <span class="prop-type">\'medium\'<br>&#124;&nbsp;\'small\'</span> | <span class="prop-default">\'medium\'</span> | The size of the autocomplete. |\n| <span class="prop-name">value</span> | <span class="prop-type">any<br>&#124;&nbsp;array</span> |  | The value of the autocomplete.<br>The value must have reference equality with the option in order to be selected. You can customize the equality behavior with the `getOptionSelected` prop. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n- Style sheet name: `MuiAutocomplete`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">.MuiAutocomplete-root</span> | Styles applied to the root element.\n| <span class="prop-name">focused</span> | <span class="prop-name">.Mui-focused</span> | Pseudo-class applied to the root element if focused.\n| <span class="prop-name">tag</span> | <span class="prop-name">.MuiAutocomplete-tag</span> | Styles applied to the tag elements, e.g. the chips.\n| <span class="prop-name">tagSizeSmall</span> | <span class="prop-name">.MuiAutocomplete-tagSizeSmall</span> | Styles applied to the tag elements, e.g. the chips if `size="small"`.\n| <span class="prop-name">hasPopupIcon</span> | <span class="prop-name">.MuiAutocomplete-hasPopupIcon</span> | Styles applied when the popup icon is rendered.\n| <span class="prop-name">hasClearIcon</span> | <span class="prop-name">.MuiAutocomplete-hasClearIcon</span> | Styles applied when the clear icon is rendered.\n| <span class="prop-name">inputRoot</span> | <span class="prop-name">.MuiAutocomplete-inputRoot</span> | Styles applied to the Input element.\n| <span class="prop-name">input</span> | <span class="prop-name">.MuiAutocomplete-input</span> | Styles applied to the input element.\n| <span class="prop-name">inputFocused</span> | <span class="prop-name">.MuiAutocomplete-inputFocused</span> | Styles applied to the input element if tag focused.\n| <span class="prop-name">endAdornment</span> | <span class="prop-name">.MuiAutocomplete-endAdornment</span> | Styles applied to the endAdornment element.\n| <span class="prop-name">clearIndicator</span> | <span class="prop-name">.MuiAutocomplete-clearIndicator</span> | Styles applied to the clear indicator.\n| <span class="prop-name">clearIndicatorDirty</span> | <span class="prop-name">.MuiAutocomplete-clearIndicatorDirty</span> | Styles applied to the clear indicator if the input is dirty.\n| <span class="prop-name">popupIndicator</span> | <span class="prop-name">.MuiAutocomplete-popupIndicator</span> | Styles applied to the popup indicator.\n| <span class="prop-name">popupIndicatorOpen</span> | <span class="prop-name">.MuiAutocomplete-popupIndicatorOpen</span> | Styles applied to the popup indicator if the popup is open.\n| <span class="prop-name">popper</span> | <span class="prop-name">.MuiAutocomplete-popper</span> | Styles applied to the popper element.\n| <span class="prop-name">popperDisablePortal</span> | <span class="prop-name">.MuiAutocomplete-popperDisablePortal</span> | Styles applied to the popper element if `disablePortal={true}`.\n| <span class="prop-name">paper</span> | <span class="prop-name">.MuiAutocomplete-paper</span> | Styles applied to the `Paper` component.\n| <span class="prop-name">listbox</span> | <span class="prop-name">.MuiAutocomplete-listbox</span> | Styles applied to the `listbox` component.\n| <span class="prop-name">loading</span> | <span class="prop-name">.MuiAutocomplete-loading</span> | Styles applied to the loading wrapper.\n| <span class="prop-name">noOptions</span> | <span class="prop-name">.MuiAutocomplete-noOptions</span> | Styles applied to the no option wrapper.\n| <span class="prop-name">option</span> | <span class="prop-name">.MuiAutocomplete-option</span> | Styles applied to the option elements.\n| <span class="prop-name">groupLabel</span> | <span class="prop-name">.MuiAutocomplete-groupLabel</span> | Styles applied to the group\'s label elements.\n| <span class="prop-name">groupUl</span> | <span class="prop-name">.MuiAutocomplete-groupUl</span> | Styles applied to the group\'s ul elements.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/Foso/material-ui/blob/master/packages/material-ui-lab/src/Autocomplete/Autocomplete.js) for more detail.\n\n## Demos\n\n- [Autocomplete](/components/autocomplete/)\n\n'}},[["5kAD",0,1]]]);