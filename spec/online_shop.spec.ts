import { Ensure, equals, isPresent, not } from '@serenity-js/assertions';
import { describe, it } from '@serenity-js/playwright-test';
import { isVisible, Page, Value } from '@serenity-js/web';

import { TODO_ITEMS } from './todo-list-app/test-data';
import {
    cartCount,
    footerSection,
    goToOnlineShop,
    mainSection,
    newTodoInput,
    outstandingItemsCount,
    persistedItemCalled,
    persistedItemNames,
    persistedItems,
    startWithAListContaining,
    startWithAnEmptyList,
    successMessage,
} from './todo-list-app/TodoApp';
import { addYogaShortToShoppingCart, checkout } from './todo-list-app/TodoItem';
import { itemCalled, itemNames } from './todo-list-app/TodoList';
import { Debug, Wait } from '@serenity-js/core';
import { PlaywrightPage } from '@serenity-js/playwright';



describe('Online Shopping', () => {

    it('should allow me to add an yoga item to cart and checkout', async ({ actor }) => {
        await actor.attemptsTo(
            goToOnlineShop(),
            addYogaShortToShoppingCart(),
            //Ensure.that(cartCount(), isVisible()),
            checkout(),
    
        )
    })
});
