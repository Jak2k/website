import { defineDb, defineTable, column } from 'astro:db';

const Status = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        text: column.text(),
        timestamp: column.date(),
        replyTo: column.text(),
        likeOf: column.text(),
        repostOf: column.text(),
    },
    indexes: {
        column: {
            on: 'id',
            unique: true,
        }
    }
})

export default defineDb({
    tables: {
        Status,
    },
})