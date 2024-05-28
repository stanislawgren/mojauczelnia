import {ChangeEvent, useEffect, useMemo, useState} from 'react'
import {Pagination} from "@mui/material";

interface IPaginationProps {
  itemsPerPage: number;
}

export const usePagination = <T, >(items: T[], props: IPaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const pageCount = useMemo(() => Math.ceil(items.length / props.itemsPerPage), [items.length, props.itemsPerPage])

  useEffect(() => {
    if (currentPage > pageCount) {
      setCurrentPage(pageCount)
    }
  }, [pageCount, currentPage])

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
  }

  const pagination = items.length ?
    <Pagination count={pageCount} onChange={handlePageChange} siblingCount={0} boundaryCount={2} page={currentPage}/>
    : null

  const currentItems = useMemo(() => {
    return items.slice(
      (currentPage - 1) * props.itemsPerPage,
      (currentPage - 1) * props.itemsPerPage + props.itemsPerPage
    )
  }, [currentPage, items, props.itemsPerPage]);

  return {
    pagination,
    currentItems
  }
}