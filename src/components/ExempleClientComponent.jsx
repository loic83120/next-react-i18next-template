'use client';

import LanguageChanger from './LanguageChanger'
import { useTranslation } from 'react-i18next';

export default function ExampleClientComponent() {
  const { t } = useTranslation(['common']);
  return <>
    <p>{t('message')}</p>
    <LanguageChanger />
  </>
}