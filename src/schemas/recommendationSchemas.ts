import joi from "joi";

export const postSongSchema = joi.object({
    name: joi.string().required(),
    youtubeLink: joi.string().uri().required()
});

export const idSchema = joi.object({
    id: joi.number().positive().integer().required()
})

export const amountSchema = joi.object({
    amount: joi.number().positive().integer().required()
})