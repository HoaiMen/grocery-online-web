export interface PaginateProps {
  page: number;
  totalRows: number;
  limit: number;
  onPageChange: (page: number) => any;
  previousIcon?: React.ReactElement;
  nextIcon?: React.ReactElement;
  colorScheme?: string;
}
