const nodes = figma.currentPage.selection;

nodes.forEach(async (node) => {
  if ("letterSpacing" in node) {
    let len = node.characters.length
    for (let i = 0; i < len; i++) {
      const fontName = node.getRangeFontName(i, i+1);
      await figma.loadFontAsync(fontName as FontName);
      node.letterSpacing = {value: -2, unit: "PERCENT"};
    }
  };
})

figma.closePlugin();