import {DefaultCrudRepository} from '@loopback/repository';
import {Song} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SongRepository extends DefaultCrudRepository<
  Song,
  typeof Song.prototype.id
> {
  constructor(
    @inject('datasources.MongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Song, dataSource);
  }
}
