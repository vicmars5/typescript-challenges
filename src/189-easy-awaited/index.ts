import { Equal, Expect } from '@type-challenges/utils'

type Awaited<T> = T extends Promise<infer U> ? U : never
type X = Promise<string>
type Y = Promise<{ field: number }>

type cases = [
    Expect<Equal<Awaited<X>, string>>,
    Expect<Equal<Awaited<Y>, { field: number }>>,
]
