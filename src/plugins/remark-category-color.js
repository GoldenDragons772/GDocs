const { visit } = require('unist-util-visit');

function remarkCategoryColor() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent) return;
      const regex = /&&(.+?)&&/g;
      const value = node.value;
      
      if (!regex.test(value)) return;
      
      const newNodes = [];
      let lastIndex = 0;
      let match;
      
      regex.lastIndex = 0;
      while ((match = regex.exec(value)) !== null) {
        if (match.index > lastIndex) {
          newNodes.push({ type: 'text', value: value.slice(lastIndex, match.index) });
        }
        
        newNodes.push({
          type: 'mdxJsxTextElement',
          name: 'span',
          attributes: [
            { type: 'mdxJsxAttribute', name: 'className', value: 'category-colored-text' }
          ],
          children: [{ type: 'text', value: match[1] }]
        });
        
        lastIndex = regex.lastIndex;
      }
      
      if (lastIndex < value.length) {
        newNodes.push({ type: 'text', value: value.slice(lastIndex) });
      }
      
      // Replace the single text node with our new nodes
      parent.children.splice(index, 1, ...newNodes);
      
      // Skip over the nodes we just inserted so we don't infinitely process them
      return index + newNodes.length;
    });
  };
}

module.exports = remarkCategoryColor;
