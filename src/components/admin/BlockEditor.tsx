'use client';

import { useState } from 'react';
import { FiPlus, FiTrash2, FiChevronUp, FiChevronDown, FiImage, FiType, FiAlignLeft } from 'react-icons/fi';

export interface ContentBlock {
  id: string;
  type: 'heading' | 'paragraph' | 'image';
  content: string;
  level?: 1 | 2 | 3;
  alt?: string;
}

interface BlockEditorProps {
  value: ContentBlock[];
  onChange: (blocks: ContentBlock[]) => void;
}

export default function BlockEditor({ value, onChange }: BlockEditorProps) {
  const [uploadingBlockId, setUploadingBlockId] = useState<string | null>(null);

  const addBlock = (type: 'heading' | 'paragraph' | 'image') => {
    const newBlock: ContentBlock = {
      id: `block-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      content: '',
      level: type === 'heading' ? 2 : undefined,
      alt: type === 'image' ? '' : undefined,
    };
    onChange([...value, newBlock]);
  };

  const updateBlock = (id: string, updates: Partial<ContentBlock>) => {
    onChange(value.map(block => block.id === id ? { ...block, ...updates } : block));
  };

  const deleteBlock = (id: string) => {
    onChange(value.filter(block => block.id !== id));
  };

  const moveBlock = (id: string, direction: 'up' | 'down') => {
    const index = value.findIndex(block => block.id === id);
    if (index === -1) return;

    const newBlocks = [...value];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newBlocks.length) return;

    [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];
    onChange(newBlocks);
  };

  const handleImageUpload = async (blockId: string, file: File) => {
    setUploadingBlockId(blockId);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload/image', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        updateBlock(blockId, { content: data.url });
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image');
    } finally {
      setUploadingBlockId(null);
    }
  };

  return (
    <div className="space-y-4">
      {value.map((block, index) => (
        <div key={block.id} className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              {block.type === 'heading' && <FiType className="text-blue-600" />}
              {block.type === 'paragraph' && <FiAlignLeft className="text-green-600" />}
              {block.type === 'image' && <FiImage className="text-purple-600" />}
              <span className="text-sm font-medium text-gray-700 capitalize">
                {block.type === 'heading' ? `Heading (H${block.level})` : block.type}
              </span>
            </div>

            <div className="flex items-center space-x-1">
              <button
                type="button"
                onClick={() => moveBlock(block.id, 'up')}
                disabled={index === 0}
                className="p-1 text-gray-500 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed"
                title="Move up"
              >
                <FiChevronUp size={18} />
              </button>
              <button
                type="button"
                onClick={() => moveBlock(block.id, 'down')}
                disabled={index === value.length - 1}
                className="p-1 text-gray-500 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed"
                title="Move down"
              >
                <FiChevronDown size={18} />
              </button>
              <button
                type="button"
                onClick={() => deleteBlock(block.id)}
                className="p-1 text-gray-500 hover:text-red-600 ml-2"
                title="Delete block"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>

          {block.type === 'heading' && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <label className="text-sm text-gray-600">Heading Level:</label>
                <select
                  value={block.level}
                  onChange={(e) => updateBlock(block.id, { level: parseInt(e.target.value) as 1 | 2 | 3 })}
                  className="px-3 py-1 border border-gray-300 rounded text-sm"
                >
                  <option value="1">H1 (Large)</option>
                  <option value="2">H2 (Medium)</option>
                  <option value="3">H3 (Small)</option>
                </select>
              </div>
              <input
                type="text"
                value={block.content}
                onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                placeholder="Enter heading text..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold"
              />
            </div>
          )}

          {block.type === 'paragraph' && (
            <textarea
              value={block.content}
              onChange={(e) => updateBlock(block.id, { content: e.target.value })}
              placeholder="Write your paragraph here..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
            />
          )}

          {block.type === 'image' && (
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleImageUpload(block.id, file);
                  }}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  disabled={uploadingBlockId === block.id}
                />
                {uploadingBlockId === block.id && (
                  <p className="text-sm text-blue-600 mt-2">Uploading...</p>
                )}
              </div>

              {block.content && (
                <div className="space-y-2">
                  <img
                    src={block.content}
                    alt={block.alt || 'Uploaded image'}
                    className="max-w-full h-auto rounded-lg border border-gray-300"
                  />
                  <input
                    type="text"
                    value={block.alt || ''}
                    onChange={(e) => updateBlock(block.id, { alt: e.target.value })}
                    placeholder="Image alt text (for SEO and accessibility)"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm text-gray-600 mb-1">Or paste image URL:</label>
                <input
                  type="url"
                  value={block.content}
                  onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="flex flex-wrap gap-3 pt-4 border-t-2 border-dashed border-gray-300">
        <button
          type="button"
          onClick={() => addBlock('heading')}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
        >
          <FiType size={18} />
          <span>Add Heading</span>
        </button>

        <button
          type="button"
          onClick={() => addBlock('paragraph')}
          className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors border border-green-200"
        >
          <FiAlignLeft size={18} />
          <span>Add Paragraph</span>
        </button>

        <button
          type="button"
          onClick={() => addBlock('image')}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors border border-purple-200"
        >
          <FiImage size={18} />
          <span>Add Image</span>
        </button>

        <div className="flex-1"></div>
        <div className="text-sm text-gray-500 self-center">
          {value.length} {value.length === 1 ? 'block' : 'blocks'}
        </div>
      </div>
    </div>
  );
}
