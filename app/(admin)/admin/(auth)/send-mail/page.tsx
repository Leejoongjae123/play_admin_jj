'use client';
import * as React from 'react';
import Mail from '@/components/icons/Mail';
import Image from 'next/image';
export default function SendMailPage() {
  return (
    <div className="flex flex-col justify-center items-center px-20 py-28 bg-transparent max-w-[800px] max-md:px-5 max-md:pt-24">
      <div className="flex flex-col max-w-full w-[520px]">
        <div className="flex flex-col justify-between p-16 bg-white rounded-xl shadow-sm min-h-[438px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full">
            <div className="flex gap-2 items-start self-center text-xl font-semibold leading-tight text-gray-1">
              <Image src="/images_jj/lock.png" alt="mail" width={24} height={24} />
              <div className="text-gray-1">
                임시 비밀번호 발송 드립니다!
              </div>
            </div>
            <div className="flex flex-col mt-6 w-full">
              <div className="flex justify-between items-start py-6 w-full text-lg font-semibold leading-none text-center text-red whitespace-nowrap rounded bg-gray-6">
                <div className="flex flex-1 shrink justify-between items-center w-full basis-0 min-w-60">
                  <div className="flex-1 shrink self-stretch my-auto text-[#911A00] basis-0">
                    asdkls12lsdk
                  </div>
                </div>
              </div>
              <div className="self-center mt-6 text-base tracking-tight text-gray-3">
                임시비밀번호 로그인 후 비밀번호를 변경해주세요.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center self-center mt-28 text-xs font-medium tracking-normal leading-relaxed text-right text-gray-4 max-md:mt-10">
            <Image src="/images_jj/logo3.png" alt="logo" width={244} height={40.52} />
          </div>
        </div>
        <div className="flex flex-col self-center mt-24 max-w-full text-sm tracking-tight leading-6 text-center w-[347px] max-md:mt-10">
          <div className="w-full font-medium">
            <div className="text-gray-4 text-orange-2">
              본 메일은 발신전용 입니다.
              <br />더 궁금하신 사항은 문의주시면 성심껏 답변 드리겠습니다.{' '}
            </div>
            <div className="mt-1.5 text-[#911A00]">
              P. 02-1234-1234 F. 02-1234-1234 E. admin@000.co.kr
            </div>
          </div>
          <div className="flex gap-0.5 items-center self-center mt-14 text-gray-4 max-md:mt-10">
            <div className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap">
              <div className="self-stretch my-auto text-[#A0A0A0] flex flex-row items-center gap-2">
                Copyright <Image src="/images_jj/logo4.png" alt="logo" width={65} height={13} />
              </div>
            </div>
            <div className="self-stretch my-auto text-[#A0A0A0]">
               Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
