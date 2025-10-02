'use client';

import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@/components/ui/modal';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface AttachedFile {
  id: string;
  name: string;
  size: number;
  file: File;
}

interface RichTextEditorProps {
  value?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
  className?: string;
  editorClassName?: string;
  onFilesChange?: (files: File[]) => void;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = '내용을 입력해주세요',
  className,
  editorClassName,
  onFilesChange,
}: RichTextEditorProps) {
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [fileModalOpen, setFileModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-primary underline cursor-pointer',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-md',
        },
      }),
      Youtube.configure({
        controls: true,
        nocookie: true,
        HTMLAttributes: {
          class: 'w-full aspect-video rounded-md',
        },
      }),
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: cn(
          'prose prose-sm max-w-none focus:outline-none text-base text-gray-1',
          '[&_p]:my-0 [&_p]:leading-6',
          '[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:my-2',
          '[&_h2]:text-xl [&_h2]:font-bold [&_h2]:my-2',
          '[&_h3]:text-lg [&_h3]:font-bold [&_h3]:my-2',
          '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-2',
          '[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-2',
          '[&_li]:my-0',
          '[&_iframe]:my-2',
          editorClassName,
        ),
      },
    },
  });

  // 링크 추가 함수
  const handleAddLink = () => {
    if (!editor || !linkUrl) return;
    editor.chain().focus().setLink({ href: linkUrl }).run();
    setLinkUrl('');
    setLinkModalOpen(false);
  };

  // 이미지 파일 선택 함수
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // 이미지 추가 함수
  const handleAddImage = () => {
    if (!editor || !selectedImage) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      editor.chain().focus().setImage({ src }).run();
      setSelectedImage(null);
      setImageModalOpen(false);
    };
    reader.readAsDataURL(selectedImage);
  };

  // 비디오 파일 선택 함수
  const handleVideoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedVideo(file);
    }
  };

  // 비디오 추가 함수
  const handleAddVideo = () => {
    if (!editor || !selectedVideo) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      // 비디오를 iframe처럼 삽입 (Youtube extension 사용)
      // 실제로는 비디오 파일을 서버에 업로드하고 URL을 받아야 하지만
      // 로컬 파일의 경우 data URL로 삽입
      const videoHtml = `<video controls class="w-full aspect-video rounded-md my-2"><source src="${src}" type="${selectedVideo.type}"></video>`;
      editor.chain().focus().insertContent(videoHtml).run();
      setSelectedVideo(null);
      setVideoModalOpen(false);
    };
    reader.readAsDataURL(selectedVideo);
  };

  // 파일 선택 함수
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // 파일 첨부 함수
  const handleAddFile = () => {
    if (!selectedFile) return;
    const newFile: AttachedFile = {
      id: Date.now().toString(),
      name: selectedFile.name,
      size: selectedFile.size,
      file: selectedFile,
    };
    const updatedFiles = [...attachedFiles, newFile];
    setAttachedFiles(updatedFiles);
    onFilesChange?.(updatedFiles.map((f) => f.file));
    setSelectedFile(null);
    setFileModalOpen(false);
  };

  // 파일 제거 함수
  const handleRemoveFile = (id: string) => {
    const updatedFiles = attachedFiles.filter((file) => file.id !== id);
    setAttachedFiles(updatedFiles);
    onFilesChange?.(updatedFiles.map((f) => f.file));
  };

  // 파일 크기 포맷팅
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  if (!editor) {
    return null;
  }

  return (
    <>
      <div
        className={cn(
          'flex h-[263px] w-full flex-col gap-5 rounded-[4px] border border-red-3 bg-orange-4 p-5',
          className,
        )}
      >
        {/* 에디터 툴바 */}
        <div className="flex items-center gap-4">
          {/* 헤딩 드롭다운 */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex cursor-pointer items-center gap-4">
                  <span className="text-base leading-6 text-primary">Heading</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6673 6L8.00065 10.6667L3.33398 6"
                      stroke="#911A00"
                      strokeWidth="1.6"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem
                  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                  className={editor.isActive('heading', { level: 1 }) ? 'bg-orange-4' : ''}
                >
                  Heading 1
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                  className={editor.isActive('heading', { level: 2 }) ? 'bg-orange-4' : ''}
                >
                  Heading 2
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                  className={editor.isActive('heading', { level: 3 }) ? 'bg-orange-4' : ''}
                >
                  Heading 3
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* 구분선 */}
          <div className="h-8 w-px bg-[#E0E2E7]"></div>

          {/* 포맷 옵션 */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={cn(
                'text-base font-bold leading-6 transition-opacity',
                editor.isActive('bold') ? 'text-primary' : 'text-primary opacity-50',
              )}
            >
              B
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={cn(
                'text-base italic leading-6 transition-opacity',
                editor.isActive('italic') ? 'text-primary' : 'text-primary opacity-50',
              )}
            >
              I
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={cn(
                'text-base leading-6 underline transition-opacity',
                editor.isActive('underline') ? 'text-primary' : 'text-primary opacity-50',
              )}
            >
              U
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={cn(
                'text-base leading-6 line-through transition-opacity',
                editor.isActive('strike') ? 'text-primary' : 'text-primary opacity-50',
              )}
            >
              S
            </button>

            {/* 리스트 아이콘 */}
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={cn(
                'transition-opacity',
                editor.isActive('bulletList') ? '' : 'opacity-50',
              )}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.62375 5.2H5.82375V6.8H6.62375V6V5.2ZM17 6.8H17.8V5.2H17V6V6.8ZM6.62375 13.2H5.82375V14.8H6.62375V14V13.2ZM17 14.8H17.8V13.2H17V14V14.8ZM3.02242 5.2C2.58059 5.2 2.22242 5.55817 2.22242 6C2.22242 6.44183 2.58059 6.8 3.02242 6.8V6V5.2ZM3.03442 6.8C3.47625 6.8 3.83442 6.44183 3.83442 6C3.83442 5.55817 3.47625 5.2 3.03442 5.2V6V6.8ZM6.62375 8.96471H5.82375V10.5647H6.62375V9.76471V8.96471ZM17 10.5647H17.8V8.96471H17V9.76471V10.5647ZM3.0224 8.96471C2.58058 8.96471 2.22241 9.32289 2.22242 9.76472C2.22243 10.2065 2.58061 10.5647 3.02244 10.5647L3.02242 9.76471L3.0224 8.96471ZM3.03444 10.5647C3.47627 10.5647 3.83443 10.2065 3.83442 9.76469C3.83442 9.32286 3.47624 8.9647 3.03441 8.96471L3.03442 9.76471L3.03444 10.5647ZM3 13.2C2.55817 13.2 2.2 13.5582 2.2 14C2.2 14.4418 2.55817 14.8 3 14.8V14V13.2ZM3.02242 14.8C3.46425 14.8 3.82242 14.4418 3.82242 14C3.82242 13.5582 3.46425 13.2 3.02242 13.2V14V14.8ZM6.62375 6V6.8H17V6V5.2H6.62375V6ZM6.62375 14V14.8H17V14V13.2H6.62375V14ZM3.02242 6V6.8H3.03442V6V5.2H3.02242V6ZM6.62375 9.76471V10.5647H17V9.76471V8.96471H6.62375V9.76471ZM3.02242 9.76471L3.02244 10.5647L3.03444 10.5647L3.03442 9.76471L3.03441 8.96471L3.0224 8.96471L3.02242 9.76471ZM3 14V14.8H3.02242V14V13.2H3V14Z"
                  fill="#911A00"
                />
              </svg>
            </button>

            {/* 넘버 리스트 아이콘 */}
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={cn(
                'transition-opacity',
                editor.isActive('orderedList') ? '' : 'opacity-50',
              )}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.01758 5.00977H16.0781" stroke="#911A00" strokeWidth="1.6" />
                <path d="M4.01758 10H16.0781" stroke="#911A00" strokeWidth="1.6" />
                <path d="M4.01758 15.0879H10.0479" stroke="#911A00" strokeWidth="1.6" />
              </svg>
            </button>
          </div>

          {/* 구분선 */}
          <div className="h-8 w-px bg-[#E0E2E7]"></div>

          {/* 첨부 옵션 */}
          <div className="flex items-center gap-6">
            {/* 링크 아이콘 */}
            <button
              onClick={() => setLinkModalOpen(true)}
              className={cn('transition-opacity', editor.isActive('link') ? '' : 'opacity-50')}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5233 8.47672C10.8982 7.85182 10.0505 7.50077 9.16661 7.50077C8.28273 7.50077 7.43504 7.85182 6.80994 8.47672L3.47661 11.8101C3.15824 12.1175 2.9043 12.4854 2.72961 12.892C2.55491 13.2987 2.46296 13.7361 2.45911 14.1787C2.45526 14.6213 2.5396 15.0602 2.70721 15.4699C2.87481 15.8796 3.12232 16.2517 3.43529 16.5647C3.74827 16.8777 4.12044 17.1252 4.5301 17.2928C4.93975 17.4604 5.37868 17.5447 5.82128 17.5409C6.26388 17.537 6.70128 17.4451 7.10796 17.2704C7.51464 17.0957 7.88246 16.8418 8.18995 16.5234L9.10828 15.6059M8.47661 11.5234C9.1017 12.1483 9.9494 12.4993 10.8333 12.4993C11.7172 12.4993 12.5649 12.1483 13.1899 11.5234L16.5233 8.19006C17.1305 7.56138 17.4665 6.71937 17.4589 5.84538C17.4513 4.9714 17.1007 4.13535 16.4827 3.51733C15.8646 2.8993 15.0286 2.54874 14.1546 2.54114C13.2806 2.53355 12.4386 2.86953 11.8099 3.47672L10.8933 4.39339"
                  stroke="#911A00"
                  strokeWidth="1.6"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* 이미지 아이콘 */}
            <button
              onClick={() => setImageModalOpen(true)}
              className="transition-opacity hover:opacity-70"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.82227 13.0029L7.15584 9.51244C7.46838 9.19999 7.89223 9.02447 8.33417 9.02447C8.77611 9.02447 9.19996 9.19999 9.5125 9.51244L13.3342 13.3341M11.6675 11.6674L12.9892 10.3458C13.3017 10.0333 13.7256 9.8578 14.1675 9.8578C14.6094 9.8578 15.0333 10.0333 15.3458 10.3458L16.1795 11.6674M11.6675 6.66744H11.6758M16.1793 16.1793V3.82227H3.82233V16.1793H16.1793Z"
                  stroke="#911A00"
                  strokeWidth="1.6"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* 비디오 아이콘 */}
            <button
              onClick={() => setVideoModalOpen(true)}
              className="transition-opacity hover:opacity-70"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83333 3.33398V16.6673M14.1667 3.33398V16.6673M2.5 6.66732H5.83333M14.1667 6.66732H17.5M2.5 10.0007H17.5M2.5 13.334H5.83333M14.1667 13.334H17.5M3.33333 16.6673H16.6667C16.8877 16.6673 17.0996 16.5795 17.2559 16.4232C17.4122 16.267 17.5 16.055 17.5 15.834V4.16732C17.5 3.9463 17.4122 3.73434 17.2559 3.57806C17.0996 3.42178 16.8877 3.33398 16.6667 3.33398H3.33333C3.11232 3.33398 2.90036 3.42178 2.74408 3.57806C2.5878 3.73434 2.5 3.9463 2.5 4.16732V15.834C2.5 16.055 2.5878 16.267 2.74408 16.4232C2.90036 16.5795 3.11232 16.6673 3.33333 16.6673Z"
                  stroke="#911A00"
                  strokeWidth="1.6"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* 파일 첨부 아이콘 */}
            <button
              onClick={() => setFileModalOpen(true)}
              className="transition-opacity hover:opacity-70"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6425 5.83339L7.15412 11.3217C6.99494 11.4755 6.86797 11.6594 6.78062 11.8627C6.69327 12.0661 6.64729 12.2848 6.64537 12.5061C6.64345 12.7274 6.68562 12.9468 6.76942 13.1516C6.85322 13.3565 6.97697 13.5426 7.13346 13.699C7.28995 13.8555 7.47604 13.9793 7.68086 14.0631C7.88569 14.1469 8.10516 14.1891 8.32646 14.1871C8.54776 14.1852 8.76645 14.1392 8.96979 14.0519C9.17313 13.9645 9.35704 13.8376 9.51079 13.6784L14.8558 8.19006C15.463 7.56138 15.799 6.71937 15.7914 5.84538C15.7838 4.9714 15.4332 4.13535 14.8152 3.51733C14.1972 2.8993 13.3611 2.54874 12.4871 2.54114C11.6131 2.53355 10.7711 2.86953 10.1425 3.47672L4.79662 8.96422C3.85886 9.90198 3.33203 11.1739 3.33203 12.5001C3.33203 13.8263 3.85886 15.0981 4.79662 16.0359C5.73438 16.9737 7.00626 17.5005 8.33245 17.5005C9.65865 17.5005 10.9305 16.9737 11.8683 16.0359L17.0825 10.8334"
                  stroke="#911A00"
                  strokeWidth="1.6"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 에디터 컨텐츠 */}
        <div className="flex flex-1 overflow-y-auto">
          <EditorContent editor={editor} className="w-full" placeholder={placeholder} />
          {!editor.getText() && (
            <div className="pointer-events-none absolute flex flex-1 items-start pt-0">
              <span className="text-base leading-6 text-orange-3">{placeholder}</span>
            </div>
          )}
        </div>

        {/* 링크 모달 */}
        <Modal open={linkModalOpen} onClose={() => setLinkModalOpen(false)}>
          <ModalContent>
            <ModalHeader onClose={() => setLinkModalOpen(false)}>링크 추가</ModalHeader>
            <ModalBody>
              <div className="flex w-full flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">링크 URL</label>
                <input
                  type="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={() => setLinkModalOpen(false)}
                className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                취소
              </button>
              <button
                onClick={handleAddLink}
                className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
              >
                추가
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* 이미지 모달 */}
        <Modal open={imageModalOpen} onClose={() => setImageModalOpen(false)}>
          <ModalContent>
            <ModalHeader onClose={() => setImageModalOpen(false)}>이미지 추가</ModalHeader>
            <ModalBody>
              <div className="flex w-full flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">이미지 파일 선택</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setImageModalOpen(false);
                }}
                className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                취소
              </button>
              <button
                onClick={handleAddImage}
                disabled={!selectedImage}
                className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                추가
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* 비디오 모달 */}
        <Modal open={videoModalOpen} onClose={() => setVideoModalOpen(false)}>
          <ModalContent>
            <ModalHeader onClose={() => setVideoModalOpen(false)}>동영상 추가</ModalHeader>
            <ModalBody>
              <div className="flex w-full flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">동영상 파일 선택</label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoSelect}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={() => {
                  setSelectedVideo(null);
                  setVideoModalOpen(false);
                }}
                className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                취소
              </button>
              <button
                onClick={handleAddVideo}
                disabled={!selectedVideo}
                className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                추가
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* 파일 첨부 모달 */}
        <Modal open={fileModalOpen} onClose={() => setFileModalOpen(false)}>
          <ModalContent>
            <ModalHeader onClose={() => setFileModalOpen(false)}>파일 첨부</ModalHeader>
            <ModalBody>
              <div className="flex w-full flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">파일 선택</label>
                <input
                  type="file"
                  onChange={handleFileSelect}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={() => {
                  setSelectedFile(null);
                  setFileModalOpen(false);
                }}
                className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                취소
              </button>
              <button
                onClick={handleAddFile}
                disabled={!selectedFile}
                className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                추가
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>

      {/* 첨부파일 목록 */}
      {attachedFiles.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {attachedFiles.map((file) => (
            <Badge key={file.id} variant="outline" size="md" className="gap-2 pr-2">
              <span className="max-w-[200px] truncate">{file.name}</span>
              <span className="text-gray-500">({formatFileSize(file.size)})</span>
              <button
                onClick={() => handleRemoveFile(file.id)}
                className="ml-1 text-gray-500 hover:text-primary"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11L7 7M7 7L11 3M7 7L3 3M7 7L11 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Badge>
          ))}
        </div>
      )}
    </>
  );
}
