module.exports = "---\ntitle: Skeleton React component\ncomponents: Skeleton\n---\n\n# Skeleton\n\n<p class=\"description\">Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.</p>\n\nThe data for your components might not be immediately available. You can increase the perceived performance for users by using skeletons. It feels like things are happening immediately, then the information is incrementally displayed on the screen (Cf. [Avoid The Spinner](https://www.lukew.com/ff/entry.asp?1797)).\n\nThe component is designed to be used **directly in your components**. Por ejemplo:\n\n```jsx\n{item ? (\n  <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />\n) : (\n  <Skeleton variant=\"rect\" width={210} height={118} />\n)}\n```\n\n## Variants\n\nThe component supports 3 shape variants.\n\n{{\"demo\": \"pages/components/skeleton/Variants.js\"}}\n\n## Animations\n\nBy default, the skeleton pulsate, but you can change the animation for a wave or disable it entirely.\n\n{{\"demo\": \"pages/components/skeleton/Animations.js\"}}\n\n## YouTube example\n\n{{\"demo\": \"pages/components/skeleton/YouTube.js\", \"defaultCodeOpen\": false}}\n\n## Facebook example\n\n{{\"demo\": \"pages/components/skeleton/Facebook.js\", \"defaultCodeOpen\": false, \"bg\": true}}"