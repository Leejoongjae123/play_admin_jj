import { z } from 'zod';
import { PublicStatus } from '@/models/play';

export type PlayRegisterFormData = z.infer<typeof PlayRegisterFormSchema>;

export const PlayRegisterFormSchema = z.object({
  title: z.string().min(1, { message: '제목을 입력해주세요.' }),
  author: z.string().min(1, { message: '작가를 입력해주세요.' }),
  line1: z.string().min(1, { message: '대사를 입력해주세요.' }),
  line2: z.string().optional(),
  line3: z.string().optional(),
  year: z.string().optional(),
  country: z.string().optional(),
  keyword: z.array(z.string()).min(1, { message: '키워드를 입력해주세요.' }),
  plot: z.string().min(1, { message: '줄거리를 입력해주세요.' }),
  femaleCharacterCount: z.string().optional(),
  maleCharacterCount: z.string().optional(),
  characterList: z.array(z.string()).min(1, { message: '등장인물을 입력해주세요.' }),
  publicStatus: z.enum(PublicStatus).optional(),
  publicHistory: z.string().optional(),
});
