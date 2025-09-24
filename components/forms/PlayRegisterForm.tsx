'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlayRegisterFormData, PlayRegisterFormSchema } from './schema';
import { cn } from '@/lib/utils';
import { Form, FormField, FormItem, FormControl, FormLabel } from '../ui/form';
import { Button } from '../ui/button';
import { FormInput, FormTagInput } from '../common/Input';
import FormTextareaInput from '../common/Input/FormTextareaInput';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { PublicStatus } from '@/models/play';

interface PlayRegisterFormProps {
  className?: string;
  onSubmit?: () => void;
}

export default function PlayRegisterForm({ onSubmit, className }: PlayRegisterFormProps) {
  const form = useForm<PlayRegisterFormData>({
    resolver: zodResolver(PlayRegisterFormSchema),
    defaultValues: {
      title: '',
      author: '',
      line1: '',
      line2: '',
      line3: '',
      year: '',
      country: '',
      keyword: [],
      plot: '',
      femaleCharacterCount: '',
      maleCharacterCount: '',
      characterList: [],
      publicStatus: undefined,
      publicHistory: '',
    },
  });

  const handleSubmit = (data: PlayRegisterFormData) => {
    console.log('폼 데이터:', data);
    onSubmit?.();
  };

  const { isValid } = form.formState;

  return (
    <Form {...form}>
      <form
        className={cn('flex w-full max-w-[590px] flex-col gap-4', className)}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        {/* 제목 - Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <FormInput
                  label="제목"
                  type="text"
                  placeholder="제목을 입력해주세요"
                  required
                  error={fieldState.error?.message}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 작가 - Author */}
        <FormField
          control={form.control}
          name="author"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <FormInput
                  label="작가"
                  type="text"
                  placeholder="작가 이름을 입력해주세요"
                  required
                  error={fieldState.error?.message}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 대사1 - Line 1 */}
        <FormField
          control={form.control}
          name="line1"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <FormTextareaInput
                  label="대사1"
                  placeholder="이 작품을 대표하는 대사를 찾아 입력해주세요"
                  className="h-[72px] lg:h-14"
                  error={fieldState.error?.message}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 대사2 - Line 2 */}
        <FormField
          control={form.control}
          name="line2"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <FormTextareaInput
                  label="대사2"
                  placeholder="이 작품을 대표하는 대사를 찾아 입력해주세요"
                  className="h-[72px] lg:h-14"
                  error={fieldState.error?.message}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 대사3 - Line 3 */}
        <FormField
          control={form.control}
          name="line3"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <FormTextareaInput
                  label="대사3"
                  placeholder="이 작품을 대표하는 대사를 찾아 입력해주세요"
                  className="h-[72px] lg:h-14"
                  error={fieldState.error?.message}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 연도 - Year */}
        <FormField
          control={form.control}
          name="year"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <FormInput
                  label="연도"
                  placeholder="작품이 발표된 연도를 입력해주세요"
                  error={fieldState.error?.message}
                  maxLength={4}
                  numericOnly
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 나라 - Country */}
        <FormField
          control={form.control}
          name="country"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <FormInput
                  label="나라"
                  placeholder="작품이 발표된 나라를 입력해주세요"
                  error={fieldState.error?.message}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 키워드 - Keyword */}
        <FormField
          control={form.control}
          name="keyword"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <FormTagInput
                  label="키워드"
                  placeholder="대표 키워드 입력 후 엔터를 눌러주세요"
                  error={fieldState.error?.message}
                  value={field.value}
                  onChange={field.onChange}
                  required
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 줄거리 - Plot */}
        <FormField
          control={form.control}
          name="plot"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <FormTextareaInput
                  label="줄거리"
                  placeholder="작품의 요약 줄거리를 입력해주세요"
                  className="h-[185px] lg:h-[230px]"
                  error={fieldState.error?.message}
                  required
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 등장인물 수 - Character Count */}
        <div className="flex items-center justify-between">
          <Label className="w-[65px] shrink-0 leading-6 text-gray-3 lg:w-40 lg:text-xl">
            등장인물 수
          </Label>
          <div className="flex w-full max-w-[250px] items-center gap-3 sm:max-w-[430px]">
            <FormField
              control={form.control}
              name="femaleCharacterCount"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <FormInput
                      label="여"
                      placeholder="숫자입력"
                      labelClassName="w-10"
                      error={fieldState.error?.message}
                      numericOnly
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maleCharacterCount"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <FormInput
                      label="남"
                      placeholder="숫자입력"
                      labelClassName="w-10"
                      error={fieldState.error?.message}
                      numericOnly
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* 등장인물 목록 - Character List */}
        <FormField
          control={form.control}
          name="characterList"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <FormTagInput
                  label="등장인물 목록"
                  placeholder="작품을 대표하는 키워드를 입력해주세요"
                  error={fieldState.error?.message}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 출간여부 - Publication Status */}
        <FormField
          control={form.control}
          name="publicStatus"
          render={({ field }) => (
            <FormItem className="flex h-12 items-center justify-between">
              <FormLabel className="relative w-[65px] gap-1 leading-6 text-gray-3 lg:w-40 lg:text-xl">
                출간여부
              </FormLabel>
              <FormControl>
                <FormItem className="flex w-full max-w-[250px] items-center sm:max-w-[430px]">
                  <RadioGroup
                    className="flex w-full items-center gap-0"
                    value={field.value || ''}
                    onValueChange={field.onChange}
                  >
                    <FormItem className="flex items-center gap-2 p-2">
                      <FormControl>
                        <RadioGroupItem value={PublicStatus.PUBLISHED} />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          'shrink-0 text-gray-3',
                          field.value === PublicStatus.PUBLISHED && 'font-bold text-primary',
                        )}
                      >
                        출간
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-2 p-2">
                      <FormControl>
                        <RadioGroupItem value={PublicStatus.UNPUBLISHED} />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          'shrink-0 text-gray-3',
                          field.value === PublicStatus.UNPUBLISHED && 'font-bold text-primary',
                        )}
                      >
                        미출간
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-2 p-2">
                      <FormControl>
                        <RadioGroupItem value={PublicStatus.OUT_OF_PRINT} />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          'shrink-0 text-gray-3',
                          field.value === PublicStatus.OUT_OF_PRINT && 'font-bold text-primary',
                        )}
                      >
                        절판
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormItem>
              </FormControl>
            </FormItem>
          )}
        />

        {/* 출간 내역 - Publication History */}
        <FormField
          control={form.control}
          name="publicHistory"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <FormInput
                  label="출간 내역"
                  type="text"
                  placeholder="출간 내역이 있는 경우 입력해주세요"
                  error={fieldState.error?.message}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className={cn(
            'disabled:bg-cancle disabled:text-cancle-foreground mx-auto mt-1 w-full max-w-[335px] text-lg font-semibold lg:max-w-[470px]',
          )}
          disabled={!isValid || form.formState.isSubmitting}
        >
          희곡 등록하기
        </Button>
      </form>
    </Form>
  );
}
