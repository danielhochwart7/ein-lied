import {Entity, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class Song extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  author: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  lyric: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: false,
  })
  translations?: string[];

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Song>) {
    super(data);
  }
}
