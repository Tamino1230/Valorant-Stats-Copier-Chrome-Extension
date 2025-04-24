let private = "idk";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'fetchValorantInfo') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.id) {
                chrome.scripting.executeScript(
                    {
                        target: { tabId: tabs[0].id },
                        func: () => {
                            try {
                                private = document.body.textContent.includes("profile is private");

                                console.log(private);
                            } catch (error) {
                                console.error('Error checking private status:', error);
                                private = false;
                            }
                            const name = document.querySelector('.max-w-full')?.textContent || 'Unknown Player';
                            const hashtag = document.querySelector('.v3-trnign__discriminator')?.textContent || '#notfound';
                            let rank = document.querySelector('.value')?.textContent || 'Unknown Rank';
                            const views = document.querySelector('.flex .items-center .gap-space')?.textContent || 'No Views';
                            return `Name: ${name}${hashtag}\nCurrent Rank: ${rank}\nViews: ${views}\nPrivate: ${private}\n\nDownload here: [Github](https://github.com/Tamino1230/Valorant-Stats-Copier-Chrome-Extension)`;
                        },
                    },
                    (results) => {
                        if (chrome.runtime.lastError || !results || !results[0]?.result) {
                            sendResponse({ data: 'Error extracting data' });
                        } else {
                            sendResponse({ data: results[0].result });
                        }
                    }
                );
            } else {
                sendResponse({ data: 'No active tab found' });
            }
        });

        return true;
    }
});