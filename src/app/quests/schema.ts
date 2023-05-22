import z from 'zod'

const numberGreaterThanZero = z
  .preprocess(Number, z.number())
  .refine(n => n > 0, { message: 'Must be greater than 0' })

export const schema = z.object({
  name: z.string().nonempty(),
  category: z.string().nonempty(),
  xp: numberGreaterThanZero,
  unlockXp: numberGreaterThanZero,
  description: z.string().nonempty(),
  duration: numberGreaterThanZero,
  classification: z.string().nonempty(),
  exercises: z.array(z.string()),
})

export type QuestForm = z.infer<typeof schema>
