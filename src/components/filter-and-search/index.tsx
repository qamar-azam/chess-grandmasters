import { FilterAndSearchProps } from './filter-search.type';

function FilterAndSearch({ sortList, handleSearch }: FilterAndSearchProps) {
  return (
    <div className='flex mb-10  items-center justify-center'>
      <div className='mr-8'>
        <form>
          <input
            type='text'
            id='search'
            name='search'
            placeholder='Search...'
            onChange={(e) => handleSearch(e.target.value)}
            className='border-2 border-gray-500 rounded w-96 px-4 py-2'
          />
        </form>
      </div>

      <div>
        Filter by{' '}
        <span
          className='cursor-pointer font-bold'
          onClick={() => sortList('ASC')}
        >
          A - Z
        </span>{' '}
        |{' '}
        <span
          className='cursor-pointer font-bold'
          onClick={() => sortList('DESC')}
        >
          Z - A
        </span>
      </div>
    </div>
  );
}

export default FilterAndSearch;
