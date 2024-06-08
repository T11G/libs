import dayjs from 'dayjs';
import { DATE_FORMAT } from '../constants';

export function handleSearchQuery(keyword: string | null | undefined) {
  return !!keyword ? keyword.split(' ').join(' | ') : undefined;
}

export function formatDate(date: Date | string) {
  return dayjs(date).format(DATE_FORMAT);
}
