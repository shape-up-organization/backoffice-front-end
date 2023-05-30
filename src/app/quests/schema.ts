import z from 'zod'

const number = z.preprocess(Number, z.number())

const numberGreaterThanZero = number.refine(n => n > 0, {
  message: 'Must be greater than 0',
})

const numberGreaterThanOrEqualToZero = number.refine(n => n >= 0, {
  message: 'Must be greater than or equal to 0',
})

export const schema = z.object({
  name: z.string().nonempty(),
  category: z.string().nonempty(),
  xp: numberGreaterThanZero,
  unlockXp: numberGreaterThanOrEqualToZero,
  description: z.string().nonempty(),
  duration: numberGreaterThanZero,
  classification: z.string().nonempty(),
  exercises: z.array(z.string()),
})

export type QuestForm = z.infer<typeof schema>
