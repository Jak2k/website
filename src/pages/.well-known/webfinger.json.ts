// This is borrowed from: https://www.lindsaykwardell.com/blog/integrate-mastodon-with-astro

export async function get() {
    return {
        body: JSON.stringify({
            subject: 'acct:jak2k@mastodontech.de',
            aliases: [
                'https://mastodontech.de/@jak2k',
                'https://mastodontech.de/users/jak2k',
            ],
            links: [
                {
                    rel: 'http://webfinger.net/rel/profile-page',
                    type: 'text/html',
                    href: 'https://mastodontech.de/@jak2k',
                },
                {
                    rel: 'self',
                    type: 'application/activity+json',
                    href: 'https://mastodontech.de/users/jak2k',
                },
                {
                    rel: 'http://ostatus.org/schema/1.0/subscribe',
                    template: 'https://mastodontech.de/authorize_interaction?uri={uri}',
                },
            ],
        }),
    }
}