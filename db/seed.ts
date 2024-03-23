import { db, Status } from 'astro:db';

export default async function () {
    // await db.insert(Status).values([
    //     { id: 1, text: 'Hello, world!', timestamp: new Date(), likeOf: '', repostOf: '', replyTo: '' },
    //     { id: 2, text: 'This is a reply', timestamp: new Date(), likeOf: '', repostOf: '', replyTo: 'https://example.com' },
    //     { id: 3, text: 'This is a repost', timestamp: new Date(), likeOf: '', repostOf: 'https://example.com', replyTo: '' },
    //     { id: 4, text: 'This is a like', timestamp: new Date(), likeOf: 'https://example.com', repostOf: '', replyTo: '' },
    // ])
}