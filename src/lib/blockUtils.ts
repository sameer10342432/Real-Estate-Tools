import { ContentBlock } from '@/components/admin/BlockEditor';

export function blocksToHTML(blocks: ContentBlock[]): string {
  return blocks.map(block => {
    switch (block.type) {
      case 'heading':
        return `<h${block.level}>${escapeHTML(block.content)}</h${block.level}>`;
      
      case 'paragraph':
        return `<p>${escapeHTML(block.content).replace(/\n/g, '<br>')}</p>`;
      
      case 'image':
        return `<img src="${escapeHTML(block.content)}" alt="${escapeHTML(block.alt || '')}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 20px 0;" />`;
      
      default:
        return '';
    }
  }).join('\n');
}

export function htmlToBlocks(html: string): ContentBlock[] {
  if (!html || html.trim() === '') {
    return [];
  }

  const blocks: ContentBlock[] = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  const traverse = (node: Node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;
      const tagName = element.tagName.toLowerCase();
      
      if (tagName.match(/^h[1-3]$/)) {
        const level = parseInt(tagName.charAt(1)) as 1 | 2 | 3;
        blocks.push({
          id: `block-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          type: 'heading',
          content: element.textContent || '',
          level,
        });
      } else if (tagName === 'p') {
        const content = element.innerHTML.replace(/<br\s*\/?>/gi, '\n');
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        blocks.push({
          id: `block-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          type: 'paragraph',
          content: tempDiv.textContent || '',
        });
      } else if (tagName === 'img') {
        blocks.push({
          id: `block-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          type: 'image',
          content: element.getAttribute('src') || '',
          alt: element.getAttribute('alt') || '',
        });
      } else {
        Array.from(element.childNodes).forEach(traverse);
      }
    }
  };
  
  Array.from(doc.body.childNodes).forEach(traverse);
  
  return blocks;
}

function escapeHTML(str: string): string {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
