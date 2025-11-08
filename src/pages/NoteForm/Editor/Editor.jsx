import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import Code from '@tiptap/extension-code'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import { memo } from 'react'
import './Editor.scss'

/**
 * TaskItem с кнопкой вместо чекбокса.
 * Критично: в обработчике клика читаем актуальный узел из doc.nodeAt(getPos()).
 */
const TaskItemWithButton = TaskItem.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			checked: {
				default: false,
				parseHTML: el =>
					el.hasAttribute('data-checked') &&
					el.getAttribute('data-checked') === 'true',
				renderHTML: attrs => ({
					'data-checked': attrs.checked ? 'true' : 'false',
				}),
			},
		}
	},

	addNodeView() {
		return ({ editor, getPos, node }) => {
			const li = document.createElement('li')
			li.classList.add('task-item')
			if (node.attrs.checked) li.classList.add('active')

			const button = document.createElement('button')
			button.className = 'task-toggle'
			button.type = 'button'
			button.contentEditable = 'false'

			// 🔧 ФИКС: всегда читаем актуальный узел по текущей позиции
			button.addEventListener('click', () => {
				const pos = getPos()
				const currentNode = editor.state.doc.nodeAt(pos)
				if (!currentNode) return

				const newChecked = !currentNode.attrs.checked
				const tr = editor.state.tr.setNodeMarkup(pos, undefined, {
					...currentNode.attrs,
					checked: newChecked,
				})
				editor.view.dispatch(tr)
			})

			const content = document.createElement('span')
			content.className = 'task-text'
			content.dataset.type = 'content'

			li.appendChild(button)
			li.appendChild(content)

			return {
				dom: li,
				contentDOM: content,
				update: updatedNode => {
					// синхронизируем класс и data-атрибут
					li.classList.toggle('active', updatedNode.attrs.checked)
					li.setAttribute(
						'data-checked',
						updatedNode.attrs.checked ? 'true' : 'false'
					)
					return true
				},
			}
		}
	},
})

const MemoEditorContent = memo(function MemoEditorContent({ editor }) {
	return <EditorContent editor={editor} className="editor-content" />
})

function Editor({ placeholder = '<p>Новая заметка...</p>' }) {
	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				bulletList: { keepMarks: true },
				orderedList: { keepMarks: true },
			}),
			Underline,
			Strike,
			Code,
			Link.configure({ openOnClick: false }),
			TaskList,
			TaskItemWithButton.configure({ nested: true }),
			TextAlign.configure({ types: ['heading', 'paragraph'] }),
		],
		content: placeholder,
	})

	const setLink = () => {
		const url = prompt('Введите ссылку:')
		if (url) editor.chain().focus().setLink({ href: url }).run()
	}

	if (!editor) return null

	return (
		<div className="editor">
			<div className="editor-actions">
				<div className="editor-group">
					<button
						onClick={() => editor.chain().focus().toggleBold().run()}
						className={editor.isActive('bold') ? 'active' : ''}
					>
						B
					</button>
					<button
						onClick={() => editor.chain().focus().toggleItalic().run()}
						className={editor.isActive('italic') ? 'active' : ''}
					>
						<i>I</i>
					</button>
					<button
						onClick={() => editor.chain().focus().toggleUnderline().run()}
						className={editor.isActive('underline') ? 'active' : ''}
					>
						<u>U</u>
					</button>
					<button
						onClick={() => editor.chain().focus().toggleStrike().run()}
						className={editor.isActive('strike') ? 'active' : ''}
					>
						<s>S</s>
					</button>
					<button
						onClick={() => editor.chain().focus().toggleCode().run()}
						className={editor.isActive('code') ? 'active' : ''}
					>
						{'</>'}
					</button>
				</div>

				<div className="editor-group">
					<button
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 1 }).run()
						}
						className={editor.isActive('heading', { level: 1 }) ? 'active' : ''}
					>
						H1
					</button>
					<button
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 2 }).run()
						}
						className={editor.isActive('heading', { level: 2 }) ? 'active' : ''}
					>
						H2
					</button>
					<button
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 3 }).run()
						}
						className={editor.isActive('heading', { level: 3 }) ? 'active' : ''}
					>
						H3
					</button>
				</div>

				<div className="editor-group">
					<button
						onClick={() => editor.chain().focus().toggleBulletList().run()}
						className={editor.isActive('bulletList') ? 'active' : ''}
					>
						•
					</button>
					<button
						onClick={() => editor.chain().focus().toggleOrderedList().run()}
						className={editor.isActive('orderedList') ? 'active' : ''}
					>
						1.
					</button>
					<button
						onClick={() => editor.chain().focus().toggleTaskList().run()}
						className={editor.isActive('taskList') ? 'active' : ''}
					>
						☑
					</button>
				</div>

				<div className="editor-group">
					<button
						onClick={() => editor.chain().focus().setTextAlign('left').run()}
						className={editor.isActive({ textAlign: 'left' }) ? 'active' : ''}
					>
						≡
					</button>
					<button
						onClick={() => editor.chain().focus().setTextAlign('center').run()}
						className={editor.isActive({ textAlign: 'center' }) ? 'active' : ''}
					>
						≣
					</button>
					<button
						onClick={() => editor.chain().focus().setTextAlign('right').run()}
						className={editor.isActive({ textAlign: 'right' }) ? 'active' : ''}
					>
						≜
					</button>
					<button
						onClick={setLink}
						className={editor.isActive('link') ? 'active' : ''}
					>
						🔗
					</button>
				</div>
			</div>

			<MemoEditorContent editor={editor} />
		</div>
	)
}

export default Editor
