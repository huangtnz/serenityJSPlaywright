import { Ensure, equals } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { Navigate, Page } from '@serenity-js/web';

import { recordItem } from '../TodoItem/tasks';

export const goToOnlineShop = () =>
    Task.where(`#actor start online shopping`,
        Navigate.to('https://magento.softwaretestingboard.com/'),

    );
export const startWithAnEmptyList = () =>
    Task.where(`#actor starts with an empty todo list`,
        Navigate.to('/'),
        Ensure.that(
            Page.current().title().describedAs('website title'),
            equals('Serenity/JS TodoApp'),
        ),
    );

export const startWithAListContaining = (...items: string[]) =>
    Task.where(`#actor starts with a list containing ${ items.length } items`,
        startWithAnEmptyList(),
        ...items.map(recordItem),
    );
