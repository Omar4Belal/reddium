// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

import {ReactNode} from "react"

export type User = {
  id: number
  name: string
}

export type Post = {
  subreddit: string
  subreddit_name_prefixed: string
  author: string
  title: string
  ups: number
  url: string
  permalink: string
  thumbnail?: string
  created_utc: number
}

export type Props = {
  children?: ReactNode
  title?: string
}

export type DropdownProps = {
  id: string
  dataObj: any
  updatePosts?: any
  updateParams?: any
}

export type QueryParams = {
  subreddit?: string
  sort_type?: string
  geo_filter?: string
  limit?: number
  after?: string
  t?: string
}