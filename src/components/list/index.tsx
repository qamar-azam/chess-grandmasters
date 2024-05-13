'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterAndSearch from '../filter-and-search';
import { GrandMastersListProps } from './list.type';

function GrandMastersList({ list }: GrandMastersListProps) {
  const [listItems, setList] = useState(list);

  const sortList = (sort: string) => {
    const sortedList = [...listItems].sort((a, b) =>
      sort === 'ASC' ? a.localeCompare(b) : b.localeCompare(a)
    );

    setList(sortedList);
  };

  const handleSearch = (search: string) => {
    if (search) {
      const result = [...list]
        .filter((title) => title.toLowerCase().includes(search.toLowerCase()))
        .sort(
          (a, b) =>
            a.toLowerCase().indexOf(search.toLowerCase()) -
            b.toLowerCase().indexOf(search.toLowerCase())
        );

      setList(result);
    } else {
      setList(list);
    }
  };
  return (
    <div>
      <FilterAndSearch sortList={sortList} handleSearch={handleSearch} />
      <div className='flex flex-wrap'>
        {listItems.map((item) => (
          <Link key={item} to={`/profile/${item}`} className='w-1/4'>
            - {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GrandMastersList;
