import { Schema } from 'effect'

export const RepoInfo = Schema.Struct({
  id: Schema.String,
  owner: Schema.String,
  repo: Schema.String,
  /** @default 'main' */
  branch: Schema.optionalWith(Schema.String, { default: () => 'main' }),
  /** @default '' */
  basePath: Schema.optionalWith(Schema.String, { default: () => '' }),
})

export type RepoInfo = typeof RepoInfo.Type

export const repos = Schema.decodeSync(Schema.Array(RepoInfo))([
  {
    id: 'automerge',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/automerge',
  },
  {
    id: 'electricsql',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/electricsql',
  },
  {
    id: 'jazz',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/jazz',
  },
  {
    id: 'zero',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/zero',
  },
  {
    id: 'liveblocks-yjs',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/liveblocks-yjs',
  },
  {
    id: 'liveblocks-storage',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/liveblocks-storage',
  },
  {
    id: 'livestore',
    owner: 'livestorejs',
    repo: 'local-first-landscape',
  },
  {
    id: 'dxos',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/dxos',
  },
  {
    id: 'basicdb',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/basicdb',
  },
  {
    id: 'convex',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/convex',
  },
  {
    id: 'ditto',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/ditto',
  },
  {
    id: 'powersync',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/powersync',
  },
  {
    id: 'triplit',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/triplit',
  },
  {
    id: 'y-sweet',
    owner: 'schickling',
    repo: 'local-first-landscape',
    basePath: 'temporary-technology-info/y-sweet',
  },
])
