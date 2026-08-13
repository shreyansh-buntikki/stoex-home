# Taste

## Frontend / UI Implementation
- Wants pixel-perfect fidelity to provided design images when implementing UI variants — checks every minor detail (card gradients, borders, shadows, text colors, dividers, icons, content) and expects the same. Expects exact design tokens (gradient angle/stops, box-shadow offsets/blur/color, hex text colors) to be read from the reference images (e.g., via vision inspection) and applied verbatim, not approximated. Confidence: 0.95
- Prefers additive changes: when adding a new variant/mode to an existing component, existing modes must remain visually and functionally unchanged. Confidence: 0.9
