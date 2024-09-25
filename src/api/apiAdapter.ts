import { MetaDataPage, Page } from '@/types';

import { MetaDataPageApi, PageAPI } from './apiTypes';

/**
 * @description Adapta o MetaDataPage para o modelo de MetaData.
 */
export function toMetaDataPage(meta: MetaDataPageApi): MetaDataPage {
  return {
    total: meta.total,
    perPage: meta.per_page,
    currentPage: meta.current_page,
    lastPage: meta.last_page,
    firstPage: meta.first_page,
    hasNextPage: !!meta.next_page_url,
    hasPreviousPage: !!meta.previous_page_url,
  };
}

export function toPageModel<ApiType, ModelType>(
  page: PageAPI<ApiType>,
  adapterToModel: (api: ApiType) => ModelType,
): Page<ModelType> {
  return {
    meta: toMetaDataPage(page.meta),
    data: page.data.map(adapterToModel),
  };
}

export const apiAdapter = {
  toMetaDataPage,
  toPageModel,
};
