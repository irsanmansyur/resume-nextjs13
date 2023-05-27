'use client';
import { Icon } from '@iconify/react';

export default function IconSosmed({ icon }: { icon: string }) {
  let iconName = 'healthicons:not-ok';
  if (icon == 'facebook') iconName = 'line-md:facebook';
  else if (icon == 'github') iconName = 'uil:github';
  else if (icon == 'linkedin') iconName = 'ant-design:linkedin-outlined';
  return <Icon icon={iconName} className="w-6 h-6 text-primary group-hover:text-white duration-300" />;
}
