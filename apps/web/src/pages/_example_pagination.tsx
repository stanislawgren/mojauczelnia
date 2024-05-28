import { usePagination } from "../hooks/usePagination.tsx";

// Interface definition for the item structure expected by the pagination hook, just an example!
interface IEx {
  name: string
}

// Static data array to be used in the pagination example
const EXAMPLE_DATA: IEx[] = [
  {name: 'test1'}, {name: 'test2'}, {name: 'test3'}, {name: 'test4'},
  {name: 'test5'}, {name: 'test6'}, {name: 'test7'}, {name: 'test8'}
];

// Component that utilizes the pagination hook
export const ExamplePaginationPage = () => {
  const {pagination, currentItems} = usePagination<IEx>(EXAMPLE_DATA, {itemsPerPage: 2})

  return (
    <>
      {
        // Mapping through each item in the currentItems array returned by the hook
        // again just an example of how to use elements from a given pagination page!
        currentItems.map((element, i) => <span key={i}>{element.name} </span>)
      }
      {/* this is important, you must include this element in the component for the pagination to be visible (or not if the element array is empty) */}
      {pagination}
    </>
  )
}
