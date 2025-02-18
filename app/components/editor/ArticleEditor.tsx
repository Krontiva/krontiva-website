"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Toolbar } from './Toolbar';

interface ArticleEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const ArticleEditor = ({ content, onChange }: ArticleEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class: 'mb-4',
          },
        },
      }),
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content,
    editorProps: {
      attributes: {
        class: 'prose max-w-none focus:outline-none min-h-[200px] prose-p:mb-6 prose-headings:mb-6',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <Toolbar editor={editor} />
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default ArticleEditor; 