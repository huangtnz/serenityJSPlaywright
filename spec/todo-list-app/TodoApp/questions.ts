import { includes } from '@serenity-js/assertions';
import { Answerable } from '@serenity-js/core';
import { By, PageElement, PageElements, Text } from '@serenity-js/web';

export const mainSection = () =>
    PageElement
        .located(By.css('.main'))
        .describedAs('main section');

export const footerSection = () =>
    PageElement
        .located(By.css('.footer'))
        .describedAs('footer section');

export const outstandingItemsLabel = () =>
    PageElement.located(By.css('.todo-count'))
        .describedAs('items left counter');

export const outstandingItemsCount = () =>
    Text.of(
        PageElement.located(By.tagName('strong'))
            .of(outstandingItemsLabel()),
    ).as(Number).describedAs('number of items left');

export const newTodoInput = () =>
    PageElement.located(By.css('.new-todo'))
        .describedAs('"What needs to be done?" input box');

export const clearCompletedButton = () =>
    PageElement.located(By.css('.clear-completed'))
        .describedAs('clear completed button');

export const filterCalled = (name: Answerable<string>) =>
    PageElements.located(By.css('.filters a'))
        .where(Text, includes(name))
        .first()
        .describedAs(`filter called ${ name }`);

export const toggleAllButton = () =>
    PageElement.located(By.id('toggle-all'))
        .describedAs('toggle all button');

export const shopYoga = () =>
    PageElement.located(By.xpath("//span[@class='action more button']"))
            .describedAs('shop yoga collection');

export const yogaShortLink = () =>
    PageElement.located(By.xpath("//a[@class='product-item-link'][@href='https://magento.softwaretestingboard.com/echo-fit-compression-short.html']"))
            .describedAs('yoga short link');

export const yogaShortSize = () =>
    PageElement.located(By.xpath("//div[@id='option-label-size-143-item-171']"))
            .describedAs('yoga short size');

export const yogaShortColor = () =>
    PageElement.located(By.xpath("//div[@option-label='Black']"))
            .describedAs('yoga short color');

export const addToCartButton = () =>
    PageElement.located(By.xpath("//button[@title='Add to Cart']"))
            .describedAs('add to cart button');

export const cartCount = () =>
    PageElement.located(By.xpath("//span[@class='counter-number']"))
            .describedAs('cart count number');

export const shoppingCart = () =>
    PageElement.located(By.xpath("//a[@href='https://magento.softwaretestingboard.com/checkout/cart/'][text()='shopping cart']"))
            .describedAs('shopping cart link');

export const proceedToCheckoutButton = () =>
    PageElement.located(By.xpath("//button[@type='button'][@data-role='proceed-to-checkout']"))
            .describedAs('proceed to checkout');

