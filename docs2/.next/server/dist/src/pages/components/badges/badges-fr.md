module.exports = "---\ntitle: Composant React Badge\ncomponents: Badge\n---\n\n# Badge\n\n<p class=\"description\">Emblema gera um pequeno emblema para o canto superior direito do seu filho(s).</p>\n\n## Basic badges\n\nExemples de badges contenant du texte, utilisant les couleurs primaires et secondaires. Le badge est appliqué aux enfants.\n\n{{\"demo\": \"pages/components/badges/SimpleBadge.js\"}}\n\n## Badges custom\n\nVoici un exemple de personnalisation du composant. You can learn more about this in the [overrides documentation page](/customization/components/).\n\n{{\"demo\": \"pages/components/badges/CustomizedBadges.js\"}}\n\n## Visibilité du badge\n\nLa visibilité des badges peut être contrôlée à l'aide de la propriété `invisible`.\n\n{{\"demo\": \"pages/components/badges/BadgeVisibility.js\"}}\n\nThe badge auto hides with badgeContent is zero. You can override this with the `showZero` property.\n\n{{\"demo\": \"pages/components/badges/ShowZeroBadge.js\"}}\n\n## Maximum value\n\nYou can use the `max` property to cap the value of the badge content.\n\n{{\"demo\": \"pages/components/badges/BadgeMax.js\"}}\n\n## Dot badge\n\nThe `dot` property changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.\n\n{{\"demo\": \"pages/components/badges/DotBadge.js\"}}\n\n## Badge overlap\n\nYou can use the `overlap` property to place the badge relative to the corner of the wrapped element.\n\n{{\"demo\": \"pages/components/badges/BadgeOverlap.js\"}}\n\n## Badge alignment\n\nYou can use the `anchorOrigin` prop to move the badge to any corner of the wrapped element.\n\n{{\"demo\": \"pages/components/badges/BadgeAlignment.js\", \"hideHeader\": true}}"