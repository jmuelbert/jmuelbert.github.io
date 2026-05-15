import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { docSearchI18nSchema } from '@astrojs/starlight-docsearch/schema';

export const collections = {
  // Die Haupt-Dokumentation
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),

  // Die Übersetzungen für die Benutzeroberfläche
  i18n: defineCollection({
    loader: i18nLoader(),
    // Das Schema gehört HIER rein, als Teil der i18n-Collection
    schema: i18nSchema({
      extend: docSearchI18nSchema(),
    }),
  }),
};
