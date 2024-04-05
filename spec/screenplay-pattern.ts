import axios from 'axios'
import { actorCalled } from '@serenity-js/core'
import { CallAnApi } from '@serenity-js/rest'
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright'

import { chromium } from 'playwright'

const axiosInstance = axios.create({ baseURL: 'https://api.example.org/' })

const actor = actorCalled('Apisitt')
    .whoCan(CallAnApi.using(axiosInstance))

    async function example() {
        let browser
    
        try {
            browser = await chromium.launch({ headless: false })
    
            const actor = actorCalled('Wendy')
                .whoCan(BrowseTheWebWithPlaywright.using(browser))
    
            // ...
        }
        finally {
            if (browser) {
                await browser.close()
            }
        }
    }