import faker, { image, name, internet, lorem } from 'faker';
import { add, parseISO } from 'date-fns';

export default function tweetAPI(req, res) {
	const startingDate = parseISO('2020-01-14');
	const tweets = { tweets: new Array(20) };

	for (let i = 0; i < tweets.tweets.length; i++)
		tweets.tweets[i] = {
			name: name.findName(),
			userName: internet.userName(),
			text: lorem.sentence(),
			avatarUrl: image.avatar(),
			date: add(startingDate, { days: i }).toISOString(),
		};

	res.status(200).json(tweets);
}
