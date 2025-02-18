import { Editor } from '@tiptap/react';
import { 
  Bold, 
  Italic, 
  Link as LinkIcon, 
  List, 
  ListOrdered, 
  Image as ImageIcon, 
  Heading, 
  Quote, 
  Undo, 
  Redo 
} from 'lucide-react';

interface ToolbarProps {
  editor: Editor | null;
}

export const Toolbar = ({ editor }: ToolbarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-gray-200 p-4 sticky top-0 bg-white z-10">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-100' : ''}`}
          title="Heading"
        >
          <Heading className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bold') ? 'bg-gray-100' : ''}`}
          title="Bold"
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('italic') ? 'bg-gray-100' : ''}`}
          title="Italic"
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('bulletList') ? 'bg-gray-100' : ''}`}
          title="Bullet List"
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('orderedList') ? 'bg-gray-100' : ''}`}
          title="Numbered List"
        >
          <ListOrdered className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('blockquote') ? 'bg-gray-100' : ''}`}
          title="Quote"
        >
          <Quote className="w-5 h-5" />
        </button>
        <button
          onClick={() => {
            const url = window.prompt('Enter the URL');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={`p-2 rounded hover:bg-gray-100 ${editor.isActive('link') ? 'bg-gray-100' : ''}`}
          title="Add Link"
        >
          <LinkIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => {
            const url = window.prompt('Enter the image URL');
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
          className="p-2 rounded hover:bg-gray-100"
          title="Add Image"
        >
          <ImageIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
          title="Undo"
        >
          <Undo className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
          title="Redo"
        >
          <Redo className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}; 