/* eslint-disable @typescript-eslint/naming-convention */
import type { IFieldRo, IConvertFieldRo, NotificationStatesEnum } from '@teable/core';
import type {
  IShareViewRowCountRo,
  IShareViewAggregationsRo,
  IAggregationRo,
  IGroupPointsRo,
  IQueryBaseRo,
} from '@teable/openapi';

export const ReactQueryKeys = {
  space: (spaceId: string) => ['space', spaceId] as const,

  base: (baseId: string) => ['base', baseId] as const,

  baseAll: () => ['base-all'] as const,

  pinList: () => ['pin-list'] as const,

  spaceList: () => ['space'] as const,

  tableList: (baseId: string) => ['table-list', baseId] as const,

  subscriptionSummary: (spaceId: string) => ['subscription-summary', spaceId] as const,

  subscriptionSummaryList: () => ['subscription-summary'] as const,

  spaceCollaboratorList: (spaceId: string) => ['space-collaborator-list', spaceId] as const,

  baseCollaboratorList: (baseId: string) => ['base-collaborator-list', baseId] as const,

  notifyList: (filter: { status: NotificationStatesEnum }) =>
    ['notification', 'list', filter] as const,
  notifyUnreadCount: () => ['notification', 'unread-count'],

  rowCount: (tableId: string, query: IQueryBaseRo) => ['row-count', tableId, query] as const,
  groupPoints: (tableId: string, query: IGroupPointsRo) =>
    ['group-points', tableId, query] as const,
  aggregations: (tableId: string, query: IAggregationRo) =>
    ['aggregations', tableId, query] as const,

  shareViewRowCount: (shareId: string, query: IShareViewRowCountRo) =>
    ['share-view-row-count', shareId, query] as const,
  shareViewGroupPoints: (shareId: string, query: IGroupPointsRo) =>
    ['share-view-group-points', shareId, query] as const,
  shareViewAggregations: (shareId: string, query: IShareViewAggregationsRo) =>
    ['share-view-aggregations', shareId, query] as const,

  planFieldCreate: (tableId: string, fieldRo: IFieldRo) =>
    ['create-field-plan', tableId, fieldRo] as const,

  planFieldConvert: (tableId: string, fieldId: string, fieldRo: IConvertFieldRo) =>
    ['create-field-plan', tableId, fieldId, fieldRo] as const,

  planField: (tableId: string, fieldId: string) => ['field-plan', tableId, fieldId] as const,

  personAccessTokenList: () => ['person-access-token-list'],

  personAccessToken: (id: string) => ['person-access-token-list', id],

  tableInfo: (baseId: string, tableId: string) => ['table-info', baseId, tableId],

  field: (tableId: string) => ['field-info', tableId],

  shareViewCollaborators: (shareId: string, fieldId?: string) =>
    ['share-view-collaborators', shareId, fieldId] as const,

  getViewFilterLinkRecords: (tableId: string, viewId: string) =>
    ['get-view-filter-link-records', tableId, viewId] as const,

  shareViewLinkRecords: (shareId: string, fieldId: string, search?: string) =>
    ['share-link-records', shareId, fieldId, search] as const,

  getTablePermission: (baseId: string, tableId: string) =>
    ['table-permission', baseId, tableId] as const,

  getRecordHistory: (tableId: string, recordId?: string) =>
    ['record-history', tableId, recordId] as const,
};
