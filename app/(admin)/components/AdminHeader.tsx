'use client';
import * as React from 'react';
import Image from 'next/image';

function AdminHeader() {
  return (
    <div
      className="absolute left-1/2 top-0 z-50 flex h-[80px] w-full -translate-x-1/2 transform items-center justify-between bg-white px-10 py-6"
      style={{ boxShadow: '0 4px 12px 0 rgba(83, 46, 14, 0.12)' }}
      data-component-name="header"
    >
      <div className="flex flex-1 items-center gap-1" data-layer-name="inscript2025_newlogotype">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/ac9a6e1592603a3891f99bf648ec975438f22105?width=321"
          alt="Frame 1707482462"
          width={160.72}
          height={32.28}
          className="flex items-center gap-1"
        />
      </div>
    </div>
  );
}

export default AdminHeader;
