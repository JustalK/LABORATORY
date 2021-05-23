import React from 'react'
import { usePreloadedQuery } from 'react-relay/hooks';
import { AppRepository } from './AppRepository'


export default function Children(props) {
  const data = usePreloadedQuery(AppRepository, props.preloadedQuery);
  if(!data) {
    return <p>No data</p>
  }
  return <p>{data.repository.name}</p>;
}
