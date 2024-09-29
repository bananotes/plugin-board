export type CustomText = {
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  underline?: boolean;
  color?: string;
  backgroundColor?: string;
  text: string;
};

export type ContentItem = {
  type: string;
  children: CustomText[];
};

export type ContentList = ContentItem[];

const mockList: ContentList = [
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Hello，World！Hello，World！Hello，World！Hello，World！Hello，World！Hello，World！Hello，World！Hello，World！Hello，World！Hello，World！Hello，World！Hello，World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!Hello, World!',
      },
    ],
  },
  { type: 'paragraph', children: [{ text: '白日依山尽黄河入海流欲穷千里目更上一层楼我能吞下玻璃而不伤身体' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
  { type: 'paragraph', children: [{ text: 'Hello, World!' }] },
];

export const mockRaw = JSON.stringify(mockList);
