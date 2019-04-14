import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody
} from '@loopback/rest';
import {Song} from '../models';
import {SongRepository} from '../repositories';

export class SongController {
  constructor(
    @repository(SongRepository)
    public songRepository : SongRepository,
  ) {}

  @post('/songs', {
    responses: {
      '200': {
        description: 'Song model instance',
        content: {'application/json': {schema: {'x-ts-type': Song}}},
      },
    },
  })
  async create(@requestBody() song: Song): Promise<Song> {
    return await this.songRepository.create(song);
  }

  @get('/songs/count', {
    responses: {
      '200': {
        description: 'Song model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Song)) where?: Where,
  ): Promise<Count> {
    return await this.songRepository.count(where);
  }

  @get('/songs', {
    responses: {
      '200': {
        description: 'Array of Song model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Song}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Song)) filter?: Filter,
  ): Promise<Song[]> {
    return await this.songRepository.find(filter);
  }

  @get('/songs/{id}', {
    responses: {
      '200': {
        description: 'Song model instance',
        content: {'application/json': {schema: {'x-ts-type': Song}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Song> {
    return await this.songRepository.findById(id);
  }

  @patch('/songs/{id}', {
    responses: {
      '204': {
        description: 'Song PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() song: Song,
  ): Promise<void> {
    await this.songRepository.updateById(id, song);
  }

  @del('/songs/{id}', {
    responses: {
      '204': {
        description: 'Song DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.songRepository.deleteById(id);
  }
}
