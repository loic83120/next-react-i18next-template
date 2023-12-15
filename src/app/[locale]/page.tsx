import ExampleClientComponent from '@/components/ExempleClientComponent';
import TranslationsProvider from '@/components/TranslationProvider';
import initTranslations from '../i18n';

const i18nNamespaces = ['common']

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <h1>{t('welcome')}</h1>
        <ExampleClientComponent />
      </main>
    </TranslationsProvider>

  );
}