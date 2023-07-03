/** */
export function getFormattedDate(date?: string | undefined) {
  return date
    ? new Date(date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '';
}
